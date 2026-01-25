import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // For now, we'll use a mailto link approach or you can integrate with:
    // - Resend (https://resend.com)
    // - SendGrid
    // - Nodemailer with SMTP

    // Example with Resend (uncomment and add RESEND_API_KEY to .env):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'evan@concept-coffee.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })
    */

    // For demonstration, log the submission
    console.log("Contact form submission:", { name, email, subject, message })

    // Return success - in production, integrate with email service
    return NextResponse.json({
      success: true,
      message: "Message sent successfully"
    })

  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
