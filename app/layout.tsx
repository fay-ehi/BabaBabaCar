import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SYNQ RIDE — Get a car for Uber and Bolt",
  description:
    "Approved drivers get a used car, owned and maintained by Bablo, linked to Uber, Bolt and other ride-hailing apps. Rent weekly or drive-to-own. Launching in Poland and the USA.",
  keywords:
    "car for Uber drivers, car for Bolt drivers, drive to own, ride-hailing vehicle rental, taxi car rental Poland, rideshare car rental USA, fleet partner",
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
