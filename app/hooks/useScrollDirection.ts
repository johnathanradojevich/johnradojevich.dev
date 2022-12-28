import { useEffect, useState } from "react";

export enum ScrollDirection {
  Up = "Up",
  Down = "Down",
}

/**
 * Returns the current scroll direction, if available.
 */
export function useScrollDirection(): ScrollDirection | undefined {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>();
  useEffect(() => {
    let previousYOffset = window.scrollY;
    function updateScrollDirection(pageYOffset: number) {
      const direction =
        window.scrollY > pageYOffset
          ? ScrollDirection.Up
          : ScrollDirection.Down;
      previousYOffset = window.scrollY;
      setScrollDirection(direction);
    }
    window.addEventListener("scroll", () =>
      window.requestAnimationFrame(() => {
        updateScrollDirection(previousYOffset);
      })
    );
  }, []);
  return scrollDirection;
}
