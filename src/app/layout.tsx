import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image"; // ✅ For header avatar
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish",
  icons: {
    icon: "/Profile.jpeg", // ✅ path from /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            background: "#2e1e0f", // brown background
          }}
        >
          <Image
            src="/Profile.jpeg" // ✅ Image in /public folder
            alt="Ashish Avatar"
            width={28}
            height={28}
            style={{ borderRadius: "4px" }}
          />
          <span style={{ color: "#e3c9a8", fontWeight: 500 }}>Ashish</span>
        </header>

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
