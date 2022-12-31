"use client";

import Image from "next/image";
import MonogramImage from "../public/icons/monogram.svg";
import MenuImage from "../public/icons/menu.svg";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-plantin">
      <head />
      <body className="flex min-h-screen flex-col">
        <MonogramImage height="30" width="30" className="fixed top-4 left-4" />
        <header className="fixed">
          <MenuImage
            height="30"
            width="30"
            className={`fixed top-4 right-4 md:hidden`}
          />
          <nav>
            <ul className="align-center flex flex-row gap-4 font-oak">
              <li>About</li>
              <li>Experience</li>
              <li>Contact</li>
              <li>
                <button type="button">Résumé</button>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-auto py-4 text-center font-oak">
          <div className="flex justify-center gap-2"></div>
          <span className="text-xs">&copy; 2022 John Radojevich</span>
          <div className="flex justify-center gap-2"></div>
        </footer>
      </body>
    </html>
  );
}
