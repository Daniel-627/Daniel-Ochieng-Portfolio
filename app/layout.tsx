import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Ochieng",
  description: "Just my Portfolio, Nothing else",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex flex-col overflow-hidden mx-auto px-5 md:px-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
