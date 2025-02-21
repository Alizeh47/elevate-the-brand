import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "BrandElevate",
  description: "Elevate your brand with AI-powered content creation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={exo2.variable}>
      <body className={exo2.className}>
        {children}
      </body>
    </html>
  );
}
