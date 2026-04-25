import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { email, mobile, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification to YOUR inbox with the visitor's details
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "amis883@yahoo.com",          // ← always YOUR email (Resend free plan restriction)
      reply_to: email,                   // ← reply goes to the visitor
      subject: `📩 Portfolio message from ${email}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f9fafb;border-radius:12px;">
          <h2 style="color:#111827;margin:0 0 24px;">📬 New portfolio message</h2>
          <p style="margin:0 0 12px;"><strong>From:</strong> ${email}</p>
          ${mobile ? `<p style="margin:0 0 12px;"><strong>Mobile:</strong> ${mobile}</p>` : ""}
          <p style="margin:0 0 8px;"><strong>Message:</strong></p>
          <div style="background:#fff;border-left:4px solid #22c55e;padding:16px;border-radius:4px;line-height:1.7;color:#374151;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
          <p style="color:#9ca3af;font-size:12px;margin-top:24px;">
            Sent from your portfolio contact form<br/>
            Hit Reply to respond directly to ${email}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
