import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StreetSmart — Better roads, together",
  description: "StreetSmart helps communities spot, report and understand road defects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
