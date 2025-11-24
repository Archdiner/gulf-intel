import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, sector } = body;

    // Validate required fields
    if (!name || !email || !sector) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    // For testing: onboarding@resend.dev works immediately
    // For production: Verify your domain in Resend dashboard and use your own domain
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Gulf Intel Contact Form <onboarding@resend.dev>',
      to: ['admin@gulfintelai.com'],
      subject: `New Client Onboarding Request from ${name}`,
      html: `
        <h2>New Client Onboarding Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sector/Industry:</strong> ${sector}</p>
        <hr>
        <p><em>This email was sent from the Gulf Intel website contact form.</em></p>
      `,
      text: `
        New Client Onboarding Request
        
        Name: ${name}
        Email: ${email}
        Sector/Industry: ${sector}
        
        This email was sent from the Gulf Intel website contact form.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

