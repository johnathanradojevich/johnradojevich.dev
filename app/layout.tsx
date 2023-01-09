"use client";

import Navbar from "./components/navbar";
import LinkedIn from "../public/icons/linkedin.svg";
import GitHub from "../public/icons/github.svg";

import "./globals.css";

const navigationItems = [
  { href: "#about", title: "About" },
  { href: "#experience", title: "Experience" },
  { href: "#contact", title: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head />
      <body className="flex min-h-full flex-col">
        <header>
          <Navbar navigationItems={navigationItems} />
        </header>
        <main className="flex-1">
          <aside></aside>
        </main>
        <div className="fixed bottom-0 left-12 hidden sm:block">
          <ul className="flex flex-col items-center gap-4 after:block after:h-[90px] after:h-[90px] after:w-[1px] after:w-[1px] after:bg-black after:content-['']">
            <li className="hover:translate-y-[-10px] hover:text-red-500">
              <a href="https://github.com/johnathanradojevich">
                <GitHub />
              </a>
            </li>
            <li className="hover:translate-y-[-10px] hover:text-red-500">
              <a href="https://linkedin.com/in/john-radojevich">
                <LinkedIn />
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="fixed bottom-0 right-12 flex hidden flex-col items-center gap-4 after:h-[90px] after:w-[1px] after:bg-black sm:block">
          <a
            href="mailto:johnathanradojevich@gmail.com"
            className=" transition-transition-colors font-oak text-sm tracking-widest delay-200 [writing-mode:vertical-lr] hover:translate-y-[-10px] hover:text-red-500"
          >
            johnathanradojevich@gmail.com
          </a>
        </div>
        <footer></footer>
      </body>
    </html>
  );
}
