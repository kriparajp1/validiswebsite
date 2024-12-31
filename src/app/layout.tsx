import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
    <title>Validis - Lightweight Validation Library for Email, Phone, Password, and More</title>
    <meta name="description" content="Validis is a lightweight, dependency-free JavaScript/Node.js validation library. It offers customizable validation for email, phone numbers, passwords, character limits, cross-field validations, and more. Perfect for modern web applications and developers seeking simplicity and flexibility." />
    <meta name="keywords" content="Validis, validation library, JavaScript validation, Node.js validation, email validation, phone validation, password validation, lightweight validation, customizable validation, cross-field validation, input validation, data validation" />
    <meta name="author" content="Kriparaj P" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="UTF-8" />
    <meta property="og:title" content="Validis - Lightweight Validation Library" />
    <meta property="og:description" content="Simplify input validation with Validis, a lightweight, dependency-free library for JavaScript/Node.js. Perform email, phone, password, and advanced cross-field validations with ease." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://validis.netlify.app" />
    <meta property="og:image" content="https://validis.netlify.app/og-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Validis - Lightweight Validation Library" />
    <meta name="twitter:description" content="Validis is a powerful validation library offering flexibility and ease for JavaScript and Node.js developers. Handle email, phone, password, and other validations effortlessly." />
    <meta name="twitter:image" content="https://validis.netlify.app/twitter-image.png" />
</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
