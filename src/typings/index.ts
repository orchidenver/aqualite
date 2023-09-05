export type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

export enum Anchors {
  Hero = "hero",
  Shop = "shop",
  Delivery = "delivery",
  AboutWater = "aboutwater",
  Composition = "composition",
  Contacts = "contacts",
}

export interface LinkComponentInterface {
  section: string;
  selectedSection: Anchors;
  setSelectedSection: (value: Anchors) => void;
}
