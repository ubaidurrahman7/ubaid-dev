import nodemailer from "nodemailer";
import { JSDOM } from "jsdom";

export async function sendMail({ to, name, subject, body }) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

  console.log("SMTP_EMAIL:", SMTP_EMAIL);
  console.log("SMTP_PASSWORD:", SMTP_PASSWORD);

  if (!SMTP_EMAIL || !SMTP_PASSWORD) {
    throw new Error("SMTP credentials are not set");
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transport.verify();
    console.log("SMTP server verified");
  } catch (error) {
    console.error("SMTP server verification failed:", error);
    throw new Error("SMTP server verification failed");
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });

    console.log("Email sent:", sendResult);

    const dom = new JSDOM(body);
    const senderEmail = dom.window.document.querySelector("h3")?.textContent;

    if (!senderEmail) {
      console.error("Failed to extract sender email from body");
      throw new Error("Failed to extract sender email from body");
    }

    const autoResponseResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: senderEmail,
      subject: "Auto Response: Your Message Has Been Received",
      html: `Hi ${name}, Your message has been received. We will get back to you as soon as possible.`,
    });

    console.log("Auto-response email sent:", autoResponseResult);

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }
}
