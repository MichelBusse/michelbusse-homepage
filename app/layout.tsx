import type { Metadata } from "next";
import "@/styles/globals.scss";
import MouseCircle from "@/components/MouseCircle";
import BackgroundCanvas from "@/components/Three/BackgroundCanvas";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Michel Busse | Developer Portfolio",
  description: "Hey, my name is Michel Busse and I am a passionate Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <MouseCircle />
        <BackgroundCanvas />
        <ToastContainer position="bottom-left" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
