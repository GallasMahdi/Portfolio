import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

// ✅ Access the environment variable securely on the server
const resendApiKey = process.env.RESEND_API_KEY;

// ❗ Throw a descriptive error if the key is missing
if (!resendApiKey) {
  throw new Error(
    "Missing RESEND_API_KEY. Please add it in your .env.local file or Netlify Environment Variables."
  );
}

// ✅ Initialize Resend client with the API key
const resend = new Resend(resendApiKey);

// ✅ Zod schema for validation
const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

// ✅ POST function for handling form submission
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { success, data, error } = Email.safeParse(body);

    if (!success) {
      return new Response(JSON.stringify({ error: error?.message }), {
        status: 400,
      });
    }

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Adjust this
      to: [config.email], // Your portfolio email
      subject: "New portfolio contact message",
      react: EmailTemplate({
        fullName: data.fullName,
        email: data.email,
        message: data.message,
      }),
    });

    if (resendError) {
      return new Response(JSON.stringify({ resendError }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify(resendData), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
