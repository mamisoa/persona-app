import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from '@/app/ui/components/TopBar'
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'AI Automation App',
  description: 'Focus by AI automations',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBar />
        <TooltipProvider>
        {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
