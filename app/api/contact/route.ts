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
    const toEmail = process.env.RESEND_TO_EMAIL || "5zentechnologies@gmail.com";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        { error: "Email service is currently misconfigured." },
        { status: 500 }
      );
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7fb; color: #071A3A; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #dce7f5; overflow: hidden; }
            .header { background-color: #071A3A; color: #ffffff; padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 800; tracking-tight: true; }
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

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "5Zen Contact Form <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email,
        subject: `[New Lead] ${projectType || "Project"} Inquiry from ${name}`,
        html: htmlContent
      })
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend API Error:", resendData);
      return NextResponse.json(
        { error: resendData.message || "Failed to send email via Resend API." },
        { status: resendRes.status }
      );
    }

    return NextResponse.json({ success: true, id: resendData.id });
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
