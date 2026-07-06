import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    let body: Record<string, string>;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, phone, serviceType, pickup, dropoff, details } = body;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 8px;">
        <h2 style="color: #1e3a5f; margin-bottom: 20px;">New Quote Request — Tony Drives</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 40%;"><strong>Name</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${name ?? "N/A"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Phone</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${phone ?? "N/A"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Service Type</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${serviceType ?? "N/A"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Pickup</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${pickup ?? "N/A"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Drop-off</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${dropoff ?? "N/A"}</td></tr>
          <tr><td style="padding: 10px 0; color: #6b7280; vertical-align: top;"><strong>Details</strong></td><td style="padding: 10px 0;">${details ?? "N/A"}</td></tr>
        </table>
      </div>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Tony Drives Quote Form <onboarding@resend.dev>",
        to: ["tony@tonydrives.com"],
        subject: `New Quote Request from ${name ?? "Unknown"}`,
        html,
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      throw new Error(
        resendData?.message ?? resendData?.name ?? JSON.stringify(resendData)
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
