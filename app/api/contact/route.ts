import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

export async function POST(request: Request) {
  const { name, email, ringSize, message, type } = await request.json();

  const subjectMap: Record<string, string> = {
    general: "General Inquiry",
    custom: "Custom Ring Inquiry",
    sizing: "Ring Sizing Inquiry",
  };

  const subject = `Silver Star Ring Co — ${subjectMap[type] ?? "Inquiry"}`;

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    ringSize ? `Ring Size: ${ringSize}` : null,
    ``,
    `Message:`,
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    await resend.emails.send({
      from: "Silver Star Ring Co <noreply@silverstarrings.com>",
      to: "stella@silverstarrings.com",
      replyTo: email,
      subject,
      text: body,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
