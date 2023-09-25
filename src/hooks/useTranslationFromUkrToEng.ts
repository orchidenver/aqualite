import { Anchors } from "../typings";

export function useTranslationFromUkrToEng(value: string) {
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
