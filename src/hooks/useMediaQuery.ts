import { useState, useEffect } from "react";
import { Anchors } from "../typings";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export function useTranslationFromUkrtoEng(value: string) {
  switch (value) {
    case "магазин":
      return Anchors.Shop;
    case "доставка":
      return Anchors.Delivery;
    case "про воду":
      return Anchors.AboutWater;
    case "склад води":
      return Anchors.Composition;
    case "контакти":
      return Anchors.Contacts;
    default:
      Anchors.Hero;
  }
}
