import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
   try {
     const {name , email , message , unit , date} = await request.json();

    // Here you can handle the contact us data, e.g., save it to a database or send an email
    if(!name || !email || !message || !unit || !date) {
      return NextResponse.json({error: "All fields are required."}, {status: 400});
    }

     const  transporter =nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `New Contact Us Message: ${unit}`,
        text: `Name: ${name}\nEmail: ${email}\nDate: ${date}\n\nMessage:\n${message}\nUnit: ${unit}`,
      })
        return NextResponse.json({ message: "Contact form submitted successfully." }, { status: 200 });
    
   } catch (error) {
    return NextResponse.json({ error: "Failed to submit contact form." }, { status: 500 });
   }

    
}