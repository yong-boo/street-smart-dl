import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StreetSmart — Better roads, together",
  description: "StreetSmart helps communities spot, report and understand road defects.",
};

export const viewport: Viewport = {
  themeColor: "#f7faf9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
