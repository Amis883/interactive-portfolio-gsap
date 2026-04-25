import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoda – Portfolio",
  description:
    "Frontend developer specializing in dashboards, data-driven applications, and modern web interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
