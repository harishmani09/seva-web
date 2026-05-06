import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seva Foundation | Serving Humanity with Love",
  description:
    "SEVA Foundation serves humanity, society, and nation with value-based education, health services, and self-reliance embedded with spiritualism.",
  keywords: ["seva foundation", "charity", "education", "health", "spirituality", "deoghar", "jharkhand"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
