"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: Number(process.env.PORT),
  secure: process.env.SECURE === "true",
  service: process.env.SERVICE,
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export const sendEmail = async (
  name: string,
  senderEmail: string,
  message: string
) => {
  try {
    await transporter.sendMail({
      from: `My website <${process.env.APP_EMAIL}>'`,
      to: process.env.APP_EMAIL,
      text: `Name: ${name}\nEmail: ${senderEmail}\nMessage: ${message}`,
      replyTo: senderEmail,
    });
    return { error: false, message: "Your Email Sent Successfully ! " };
  } catch (e: any) {
    return { error: true, message: e.message };
  }
};
