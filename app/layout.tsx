import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./global.css";

export const metadata: Metadata = {
  title: "Webdev Quiz",
  description: "Test your skills in web development",
};

const bodyStyle = `${GeistSans.className} w-full h-full bg-neutral-100 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-100`;

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <body className={bodyStyle}>{children}</body>
    </html>
  );
}

export default RootLayout;
