import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webdev Quiz",
  description: "Test your skills in web development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark:bg-neutral-950'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
