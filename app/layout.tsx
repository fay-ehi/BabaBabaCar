import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synq Ride — Comfortable Intercity Travel",
  description: "Verified, comfortable shared rides between Nigerian cities. Find a trusted ride or share your trip with verified travelers.",
  keywords: "intercity travel Nigeria, shared rides Nigeria, Lagos Ibadan ride, Abuja Kaduna ride, carpooling Nigeria",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
