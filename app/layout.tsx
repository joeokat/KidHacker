import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  weight: '400',
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "JoeOkat: UI/UX",
  description: "🎯 I help businesses publish MVPs to market fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
