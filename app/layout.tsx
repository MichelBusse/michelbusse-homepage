import type { Metadata } from "next";
import "@/styles/globals.scss";
import MouseCircle from "@/components/MouseCircle";
import BackgroundCanvas from "@/components/Three/BackgroundCanvas";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://michelbusse.dev"),
  title: "Michel Busse | Software Engineer Portfolio",
  description:
    "Bilingual portfolio of Michel Busse, Lead Software Engineer with experience in mobile, web, and XR development.",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
