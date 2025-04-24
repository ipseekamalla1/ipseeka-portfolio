import type { Metadata } from "next";
import "./globals.css";
import {PT_Serif} from "next/font/google";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Ipseeka Portfolio",
  description: "Ipseeka Portfolio",
};

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',

});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ptSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <Header/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
