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
    const { name, phone, serviceType, pickup, dropoff, details } = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "re_QQdqEpQH_JkUL5jEuRy6shRe3WE7BKh2V";

    const htmlBody = `
      <h2>New Quote Request — Tony Drives</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;width:40%;">Name / Business</td><td style="padding:8px;">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Phone</td><td style="padding:8px;">${phone}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Service Type</td><td style="padding:8px;">${serviceType}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Pickup Location</td><td style="padding:8px;">${pickup}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Drop-off Destination</td><td style="padding:8px;">${dropoff}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Job Details</td><td style="padding:8px;">${details}</td></tr>
      </table>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Tony Drives Quote Form <onboarding@resend.dev>",
        to: ["tony@tonydrives.com"],
        subject: `New Quote Request from ${name}`,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Resend error: ${err}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
