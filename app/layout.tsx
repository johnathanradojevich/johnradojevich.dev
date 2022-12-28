import Image from "next/image";
import MonogramImage from "../public/icons/monogram.svg";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-plantin">
      <head />
      <body className="h-screen">
        <Image
          src={MonogramImage}
          alt="John Radojevich"
          height={40}
          width={40}
          className="fixed top-4 left-4"
        />
        {children}
      </body>
    </html>
  );
}
