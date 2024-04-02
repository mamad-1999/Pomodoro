import React from "react";
import "./globals.css";

export const metadata = {
  title: "Pomodoro",
  description:
    "The Pomodoro Technique is a time management method that alternates work periods with short breaks.",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Pomodoro", "Next.js"],
  authors: [
    { name: "Mohammad" },
    {
      name: "Mohammad",
      url: "https://github.com/mamad-1999",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "/icon-512x512.png" },
    { rel: "icon", url: "/icon-512x512.png" },
  ],
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
