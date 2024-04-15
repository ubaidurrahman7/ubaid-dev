import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Ubaid <ubaidurr888999@gmail.com>",
      to: ["ubaidurr888999@gmail.com"],
      subject: "Hello world",
      react: (
        <>
          <p>Email body</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
