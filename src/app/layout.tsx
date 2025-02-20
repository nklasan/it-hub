import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";
import Header from "@/components/Header";
import Links from "@/components/Links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IT Hub",
  description: "E-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
          <Header />
          <Navbar />
          <Links />
          {children}
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
