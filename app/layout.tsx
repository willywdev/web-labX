import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./global.css";

export const metadata: Metadata = {
  title: "Webdev Quiz",
  description: "Test your skills in web development",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='w-full h-full'>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
