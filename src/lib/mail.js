import nodemailer from "nodemailer";
import { JSDOM } from "jsdom";

export async function sendMail({ to, name, subject, body }) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });

    const dom = new JSDOM(body);
    const senderEmail = dom.window.document.querySelector("h3").textContent;

    const autoResponseResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: senderEmail,
      subject: "Auto Response: Your Message Has Been Received",
      html: `Hi ${name}, Your message has been received. We will get back to you as soon as possible.`,
    });

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email"); // Throw error to be caught by caller
  }
}
