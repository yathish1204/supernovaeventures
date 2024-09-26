import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Chat from "@/components/WhatsApp/Chat";
import Link from "next/link";

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





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Hero />
        <Link href='https://wa.me/918762628710' target='_blank' className='bot'>
          <Chat />
        </Link>
        {children}
        <Footer />
      </body>
    </html>
  );
}
