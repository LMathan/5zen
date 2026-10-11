import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budgetRange, currency, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL || "info@5zentech.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "5Zen Technologies <contact@5zentech.com>";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        { error: "Email service is currently misconfigured." },
        { status: 500 }
      );
    }

    // 1. Email notification to the 5Zen team
    const teamHtmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7fb; color: #071A3A; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #dce7f5; overflow: hidden; }
            .header { background-color: #071A3A; color: #ffffff; padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 800; }
            .content { padding: 28px; }
            .field-group { margin-bottom: 20px; }
            .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #1677FF; letter-spacing: 0.5px; margin-bottom: 4px; }
            .value { font-size: 15px; color: #071A3A; font-weight: 500; }
            .message-box { background: #f7faff; border: 1px solid #dce7f5; border-radius: 8px; padding: 16px; margin-top: 8px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
            .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px; text-align: center; font-size: 12px; color: #64748b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Project Inquiry</h1>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: #93c5fd;">5Zen Technologies Contact Form</p>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="label">Client Name</div>
                <div class="value">${escapeHtml(name)}</div>
              </div>
              <div class="field-group">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${escapeHtml(email)}" style="color: #1677FF; text-decoration: none;">${escapeHtml(email)}</a></div>
              </div>
              <div class="field-group">
                <div class="label">Company / Organization</div>
                <div class="value">${escapeHtml(company || "N/A")}</div>
              </div>
              <div class="field-group">
                <div class="label">Project Type</div>
                <div class="value">${escapeHtml(projectType || "Website")}</div>
              </div>
              <div class="field-group">
                <div class="label">Estimated Budget</div>
                <div class="value">${escapeHtml(budgetRange || "Not specified")} (${escapeHtml(currency || "USD")})</div>
              </div>
              <div class="field-group">
                <div class="label">Project Details & Requirements</div>
                <div class="message-box">${escapeHtml(message)}</div>
              </div>
            </div>
            <div class="footer">
              Submitted via 5Zen Technologies website on ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST
            </div>
          </div>
        </body>
      </html>
    `;

    // 2. Acknowledgment email to the visitor
    const visitorAckHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7fb; color: #071A3A; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #dce7f5; overflow: hidden; box-shadow: 0 4px 12px rgba(7, 26, 58, 0.05); }
            .header { background: linear-gradient(135deg, #071A3A 0%, #0d2757 100%); color: #ffffff; padding: 32px 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
            .header p { margin: 6px 0 0 0; font-size: 13px; color: #93c5fd; }
            .content { padding: 32px 24px; }
            .greeting { font-size: 17px; font-weight: 700; color: #071A3A; margin-bottom: 12px; }
            .lead-text { font-size: 15px; line-height: 1.6; color: #334155; margin-bottom: 24px; }
            .summary-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
            .summary-title { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #1677FF; letter-spacing: 0.5px; margin-bottom: 12px; }
            .field { margin-bottom: 8px; font-size: 14px; color: #475569; }
            .field strong { color: #071A3A; font-weight: 600; }
            .message-preview { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; margin-top: 6px; font-size: 13px; color: #334155; white-space: pre-wrap; line-height: 1.5; }
            .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px; text-align: center; font-size: 12px; color: #64748b; line-height: 1.6; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Reaching Out</h1>
              <p>5Zen Technologies &bull; Connect &bull; Create &bull; Elevate</p>
            </div>
            <div class="content">
              <div class="greeting">Hi ${escapeHtml(name)},</div>
              <p class="lead-text">
                Thank you for contacting 5Zen Technologies. We have received your inquiry and our team is already reviewing your requirements.
              </p>
              <div class="summary-box">
                <div class="summary-title">Summary of Your Inquiry</div>
                <div class="field"><strong>Project Type:</strong> ${escapeHtml(projectType || "General Inquiry")}</div>
                ${company ? `<div class="field"><strong>Company:</strong> ${escapeHtml(company)}</div>` : ""}
                ${budgetRange ? `<div class="field"><strong>Estimated Budget:</strong> ${escapeHtml(budgetRange)} (${escapeHtml(currency || "USD")})</div>` : ""}
                <div class="field">
                  <strong>Your Message:</strong>
                  <div class="message-preview">${escapeHtml(message)}</div>
                </div>
              </div>
              <p class="lead-text" style="margin-bottom: 0;">
                A member of our team will get in touch with you within <strong>24 business hours</strong> to discuss next steps. If you have any additional questions or updates, feel free to reply directly to this email or reach us at <a href="mailto:${escapeHtml(toEmail)}" style="color: #1677FF; text-decoration: none;">${escapeHtml(toEmail)}</a>.
              </p>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} 5Zen Technologies. All rights reserved.<br>
              <a href="https://5zentech.com" style="color: #1677FF; text-decoration: none;">5zentech.com</a>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send team notification and visitor acknowledgment concurrently
    const [teamRes, visitorRes] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `[New Lead] ${projectType || "Project"} Inquiry from ${name}`,
          html: teamHtmlContent
        })
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [email],
          reply_to: toEmail,
          subject: `Thank you for contacting 5Zen Technologies`,
          html: visitorAckHtml
        })
      })
    ]);

    const teamData = await teamRes.json();

    if (!teamRes.ok) {
      console.error("Resend API Error (Team Email):", teamData);
      return NextResponse.json(
        { error: teamData.message || "Failed to send email via Resend API." },
        { status: teamRes.status }
      );
    }

    if (!visitorRes.ok) {
      const visitorData = await visitorRes.json().catch(() => ({}));
      console.warn("Resend Warning (Visitor Acknowledgment Email failed):", visitorData);
      // We don't fail the whole submission if the team email succeeded
    }

    return NextResponse.json({ success: true, id: teamData.id });
  } catch (error: unknown) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
