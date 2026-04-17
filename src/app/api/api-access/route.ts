import { Resend } from "resend";
import { NextResponse } from "next/server";

function sanitize(str: string | undefined): string {
  if (!str) return "";
  return str.replace(/[<>]/g, "").trim();
}

interface ApiAccessBody {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  title: string;
  department?: string;
  applicantType: string;
  organizationName?: string;
  website?: string;
  teamSize?: string;
  country: string;
  sector: string;
  primaryUseCase: string;
  environment: string;
  preferredSdk: string;
  estimatedCalls?: string;
  apiScopes: string[];
  patientData: string;
  regulations?: string;
  dataResidency?: string;
  dpa: string;
  ipAllowlist?: string;
  projectDescription: string;
  timeline: string;
  technicalLeadEmail?: string;
  engineeringTeamSize?: string;
  additionalNotes?: string;
  _hp?: string;
  _t?: number;
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr><td style="padding:8px 16px 8px 0;color:#888;vertical-align:top;white-space:nowrap;font-size:13px;">${label}</td><td style="padding:8px 0;font-size:13px;">${value}</td></tr>`;
}

function section(title: string, rows: string) {
  if (!rows.trim()) return "";
  return `
    <h3 style="margin:28px 0 12px;padding-bottom:8px;border-bottom:1px solid #e5e5e5;color:#1d1d1f;font-size:15px;font-weight:600;">${title}</h3>
    <table style="width:100%;border-collapse:collapse;">${rows}</table>
  `;
}

export async function POST(req: Request) {
  try {
    const body: ApiAccessBody = await req.json();

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
    const title = sanitize(body.title);
    const department = sanitize(body.department);
    const applicantType = sanitize(body.applicantType);
    const organizationName = sanitize(body.organizationName);
    const website = sanitize(body.website);
    const teamSize = sanitize(body.teamSize);
    const country = sanitize(body.country);
    const sector = sanitize(body.sector);
    const primaryUseCase = sanitize(body.primaryUseCase);
    const environment = sanitize(body.environment);
    const preferredSdk = sanitize(body.preferredSdk);
    const estimatedCalls = sanitize(body.estimatedCalls);
    const apiScopes = (body.apiScopes || []).map((s: string) => sanitize(s));
    const patientData = sanitize(body.patientData);
    const regulations = sanitize(body.regulations);
    const dataResidency = sanitize(body.dataResidency);
    const dpa = sanitize(body.dpa);
    const ipAllowlist = sanitize(body.ipAllowlist);
    const projectDescription = sanitize(body.projectDescription);
    const timeline = sanitize(body.timeline);
    const technicalLeadEmail = sanitize(body.technicalLeadEmail);
    const engineeringTeamSize = sanitize(body.engineeringTeamSize);
    const additionalNotes = sanitize(body.additionalNotes);

    if (!firstName || !lastName || !email || !title || !applicantType || !country || !sector ||
        !primaryUseCase || !environment || !preferredSdk || !patientData || !dpa ||
        !projectDescription || !timeline) {
      return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:680px;color:#333;">
        <h2 style="color:#1d1d1f;border-bottom:2px solid #1d1d1f;padding-bottom:12px;font-size:20px;">
          New API Access Request
        </h2>

        ${section("Contact Information", [
          row("Name", `${firstName} ${lastName}`),
          row("Email", `<a href="mailto:${email}">${email}</a>`),
          row("Phone", phone),
          row("Title / Role", title),
          row("Department", department),
        ].join(""))}

        ${section("Applicant", [
          row("Type", applicantType),
          row("Organization", organizationName),
          row("Website", website ? `<a href="${website}">${website}</a>` : undefined),
          row("Team Size", teamSize),
          row("Country", country),
          row("Sector", sector),
        ].join(""))}

        ${section("Technical Requirements", [
          row("Primary Use Case", primaryUseCase),
          row("Environment", environment),
          row("Preferred SDK", preferredSdk),
          row("Estimated Monthly Calls", estimatedCalls),
          row("API Scopes", apiScopes.length > 0 ? apiScopes.map(s => `<code style="background:#f5f5f7;padding:2px 6px;border-radius:3px;font-size:12px;margin-right:4px;">${s}</code>`).join(" ") : undefined),
        ].join(""))}

        ${section("Data & Compliance", [
          row("Patient Data", patientData),
          row("Regulations", regulations),
          row("Data Residency", dataResidency),
          row("DPA / BAA", dpa),
          row("IP Allowlist", ipAllowlist),
        ].join(""))}

        ${section("Project Details", [
          row("Timeline", timeline),
          row("Technical Lead", technicalLeadEmail ? `<a href="mailto:${technicalLeadEmail}">${technicalLeadEmail}</a>` : undefined),
          row("Engineering Team", engineeringTeamSize),
        ].join(""))}

        <h3 style="margin:28px 0 12px;padding-bottom:8px;border-bottom:1px solid #e5e5e5;color:#1d1d1f;font-size:15px;font-weight:600;">Project Description</h3>
        <div style="padding:16px;background:#f5f5f7;border-radius:8px;">
          <p style="margin:0;font-size:13px;white-space:pre-wrap;">${projectDescription}</p>
        </div>

        ${additionalNotes ? `
          <h3 style="margin:28px 0 12px;padding-bottom:8px;border-bottom:1px solid #e5e5e5;color:#1d1d1f;font-size:15px;font-weight:600;">Additional Notes</h3>
          <div style="padding:16px;background:#f5f5f7;border-radius:8px;">
            <p style="margin:0;font-size:13px;white-space:pre-wrap;">${additionalNotes}</p>
          </div>
        ` : ""}
      </div>
    `;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "VARL API Access <noreply@varl.net>",
      to: "contact@varl.net",
      replyTo: email,
      subject: `[API Access] ${applicantType} — ${firstName} ${lastName} (${organizationName || "Individual"})`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send request. Please try again." }, { status: 500 });
  }
}
