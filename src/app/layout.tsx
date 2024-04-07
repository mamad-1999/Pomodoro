import React from "react";
import "./globals.css";

export const metadata = {
  title: {
    template: '%s | Pomodoro',
    default: "Pomodoro",
  },
  description:
    "The Pomodoro Technique is a time management method that alternates work periods with short breaks",
  applicationName: "Pomodoro",
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
  publisher: 'Mohammad yousefvand',
  icons: [
    { rel: "apple-touch-icon", url: "/icon-512x512.png" },
    { rel: "icon", url: "/icon-512x512.png" },
  ],
  openGraph: {
    title: "Pomodoro",
    description: "The Pomodoro Technique is a time management method that alternates work periods with short breaks",
    url: 'https://main--pomodoro-next.netlify.app/',
    siteName: "Pomodoro",
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/mamad-1999/Pomodoro/main/Pomodoro_openGraph.jpg',
        secureUrl: 'https://raw.githubusercontent.com/mamad-1999/Pomodoro/main/Pomodoro_openGraph.jpg',
        width: 1200,
        height: 624,
        alt: 'Pomodoro OpenGraph Image',
      }
    ]
  },
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
