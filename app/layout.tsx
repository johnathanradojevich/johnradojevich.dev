"use client";

import Image from "next/image";
import MonogramImage from "../public/icons/monogram.svg";
import MenuImage from "../public/icons/menu.svg";

import {
  ScrollDirection,
  useScrollDirection,
} from "./hooks/useScrollDirection";
import LinkedinIcon from "../public/icons/linkedin.svg";
import CodepenIcon from "../public/icons/codepen.svg";
import PipeIcon from "../public/icons/pipe.svg";
import StarIcon from "../public/icons/star.svg";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollDirection = useScrollDirection();
  return (
    <html lang="en" className="font-plantin">
      <head />
      <body className="flex min-h-screen flex-col">
        <Image
          src={MonogramImage}
          alt="John Radojevich"
          height={30}
          width={30}
          className={`fixed top-4 left-4`}
        />
        <Image
          src={MenuImage}
          alt=""
          height={30}
          width={30}
          className={`fixed top-4 right-4 ${
            scrollDirection === ScrollDirection.Up ? "invisible" : "visible"
          }`}
        />
        <main>{children}</main>
        <footer className="mt-auto py-4 text-center font-oak">
          <div className="flex justify-center gap-2">
            <Image src={LinkedinIcon} alt="GitHub" width={25} height={25} />
            <Image src={CodepenIcon} alt="Codepen" width={25} height={25} />
          </div>
          <span className="text-xs">&copy; 2022 John Radojevich</span>
          <div className="gap-2s flex justify-center">
            <Image src={StarIcon} alt="" width={15} height={15} />
            <Image src={PipeIcon} alt="" width={15} height={15} />
          </div>
        </footer>
      </body>
    </html>
  );
}
