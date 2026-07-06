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
      <h2>New Quote Request — Tony Drives</h2>
      <p><strong>Name:</strong> ${name ?? "N/A"}</p>
      <p><strong>Phone:</strong> ${phone ?? "N/A"}</p>
      <p><strong>Service Type:</strong> ${serviceType ?? "N/A"}</p>
      <p><strong>Pickup Location:</strong> ${pickup ?? "N/A"}</p>
      <p><strong>Drop-off Destination:</strong> ${dropoff ?? "N/A"}</p>
      <p><strong>Job Details:</strong> ${details ?? "N/A"}</p>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Tony Drives Quote <onboarding@resend.dev>",
        to: ["tony@tonydrives.com"],
        reply_to: phone ? undefined : undefined,
        subject: `New Quote Request from ${name ?? "Unknown"}`,
        html,
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      throw new Error(
        resendData?.message ?? resendData?.name ?? JSON.stringify(resendData) ?? `Resend error: ${resendRes.status}`
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: resendData.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
