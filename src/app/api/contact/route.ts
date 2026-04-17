import { Resend } from "resend";
import { NextResponse } from "next/server";

function sanitize(str: string | undefined): string {
  if (!str) return "";
  return str.replace(/[<>]/g, "").trim();
}

interface ContactBody {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  organization?: string;
  role?: string;
  subject: string;
  source?: string;
  message: string;
  _hp?: string;
  _t?: number;
}

export async function POST(req: Request) {
  try {
    const body: ContactBody = await req.json();

    if (body._hp) {
      return NextResponse.json({ success: true });
    }

    if (body._t && Date.now() - body._t < 3000) {
      return NextResponse.json({ success: true });
    }

    const firstName = sanitize(body.firstName);
    const lastName = sanitize(body.lastName);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const organization = sanitize(body.organization);
    const role = sanitize(body.role);
    const subject = sanitize(body.subject);
    const source = sanitize(body.source);
    const message = sanitize(body.message);

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px;">
        <h2 style="color: #1d1d1f; border-bottom: 1px solid #e5e5e5; padding-bottom: 12px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #333;">
          <tr><td style="padding: 8px 0; color: #888; width: 140px;">Name</td><td style="padding: 8px 0;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
          ${organization ? `<tr><td style="padding: 8px 0; color: #888;">Organization</td><td style="padding: 8px 0;">${organization}</td></tr>` : ""}
          ${role ? `<tr><td style="padding: 8px 0; color: #888;">Role</td><td style="padding: 8px 0;">${role}</td></tr>` : ""}
          <tr><td style="padding: 8px 0; color: #888;">Subject</td><td style="padding: 8px 0;">${subject}</td></tr>
          ${source ? `<tr><td style="padding: 8px 0; color: #888;">How they found us</td><td style="padding: 8px 0;">${source}</td></tr>` : ""}
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f5f5f7; border-radius: 8px;">
          <p style="margin: 0 0 8px; font-size: 12px; color: #888;">Message</p>
          <p style="margin: 0; font-size: 14px; color: #1d1d1f; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "VARL Contact Form <noreply@varl.net>",
      to: "contact@varl.net",
      replyTo: email,
      subject: `[Contact] ${subject} — ${firstName} ${lastName}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
