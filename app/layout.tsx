import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Neeko Tamashiro - Japanese Tattoo Artist",
  description: "Japanese tattoo artist based in Japan. Traditional irezumi and Japanese tattooing by Neeko Tamashiro.",
  icons: {
    icon: "/img/logo-icon.png",
    shortcut: "/img/logo-icon.png",
    apple: "/img/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={openSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

