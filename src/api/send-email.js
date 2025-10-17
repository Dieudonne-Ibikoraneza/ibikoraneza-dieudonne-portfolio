// api/send-email.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { firstName, lastName, email, phone, message } = req.body;

      const data = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "dieudonneibikoraneza13@gmail.com",
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        reply_to: email,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="margin: 0; color: #333;">New Contact Form Submission</h2>
              <p style="margin: 5px 0 0 0; color: #666;">From your portfolio website</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #666;">Name:</strong><br>
              <span style="color: #333;">${firstName} ${lastName}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #666;">Email:</strong><br>
              <span style="color: #333;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #666;">Phone:</strong><br>
              <span style="color: #333;">${phone || "Not provided"}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #666;">Message:</strong><br>
              <div style="color: #333; white-space: pre-wrap; background: #f8f9fa; padding: 10px; border-radius: 4px; margin-top: 5px;">
                ${message}
              </div>
            </div>
          </div>
        `,
      });

      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
