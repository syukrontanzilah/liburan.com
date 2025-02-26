import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import {Poppins} from 'next/font/google'
import NavbarResponsive from "@/components/Home/Navbar/NavbarResponsive";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "qiqi.com 😎 ",
  description: "Liburan yuk jangan dirumah aja 🏝️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <NavbarResponsive/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
