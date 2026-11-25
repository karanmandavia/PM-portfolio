import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Karan Mandavia — The Making of a Product", description: "A documentary-style product portfolio: a journey through curiosity, decisions and creation." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
