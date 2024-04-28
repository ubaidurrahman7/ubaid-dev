"use server";
import { sendMail } from "@/lib/mail";

export async function Send(formData) {
  const { name, email, subject, message } = formData;
  await sendMail({
    to: process.env.SMTP_EMAIL,
    name: name,
    subject: subject,
    body: `<div>
        <h1>${name}</h1>
        <h3>${email}</h3>
  <p>${message}</p>
  </div>`,
  });
}
