import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Neeko Tamashiro - Japanese Tattoo Artist",
  description: "Japanese tattoo artist based in Japan. Traditional irezumi and Japanese tattooing by Neeko Tamashiro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}

