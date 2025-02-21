import type { Metadata } from "next";
import { Exo_2, Poppins } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo2",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
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
    <html lang="en" className={`${exo2.variable} ${poppins.variable}`}>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
