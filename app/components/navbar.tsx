import React, { useState } from "react";
import {
  ScrollDirection,
  useScrollDirection,
} from "../hooks/useScrollDirection";

interface NavigationItem {
  href: string;
  title: string;
}

export default function Navbar({
  navigationItems,
}: {
  navigationItems: NavigationItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, isHidden] = useState(false);
  const scrollDirection = useScrollDirection();
  return (
    <nav className="fixed font-oak">
      <ul
        className={`flex justify-end ${
          scrollDirection === ScrollDirection.Down
            ? "translate-y-0 transition-transform"
            : "translate-y-[-100%] transition-transform"
        }`}
      >
        {navigationItems.map((item) => (
          <li key={item.title}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
