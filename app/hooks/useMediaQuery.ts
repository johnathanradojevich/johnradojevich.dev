import { useState, useEffect } from "react";

/**
 * Returns a match to a media query.
 * @param query
 * @returns
 */
export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const matches = window.matchMedia(query);
    function handleChange(e) {
      setMatches(e.matches);
    }
    matches.addEventListener("change", handleChange);
    return () => {
      matches.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}
