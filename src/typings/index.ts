import ProductCard from "../components/ProductCard";

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

export interface ButtonInterface {
  width?: string;
  height?: string;
}

export interface TransparentButtonInterface {
  reference: string;
  children: string;
  width?: string;
  margin?: string;
  color?: string;
}

export interface Composition {
  element: string;
  amount: {
    quantity: string;
    measure: string;
  };
}

export enum ProductNames {
  BULB = "bulb",
  SET = "set",
  POMP = "pomp",
  DISPENSER = "dispenser",
}

export interface Product {
  id: string | number;
  name: ProductNames;
  amount: number;
  sum: number;
}

export interface InitialContextState {
  cart: Product[];
  cartTotal: {
    totalItems: number;
    totalSum: number;
  };
}

export interface InitialContext extends InitialContextState {
  addItem: ({ id, name, amount, sum }: Product) => void;
  removeItem: (id: number) => void;
  changeAmount: (id: number, value: number) => void;
  clearCart: () => void;
}

export enum Actions {
  LOADING = "LOADING",
  SIDEBAR_OPEN = "SIDEBAR_OPEN",
  SIDEBAR_CLOSE = "SIDEBAR_CLOSE",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  CHANGE_CART_ITEM_AMOUNT = "CHANGE_CART_ITEM_AMOUNT",
  COUNT_CART_TOTALS = "COUNT_CART_TOTALS",
  CLEAR_CART = "CLEAR_CART",
}

export type ActionTypes =
  | {
      type: Actions.LOADING;
    }
  | {
      type: Actions.ADD_TO_CART;
      payload: Product;
    }
  | {
      type: Actions.REMOVE_CART_ITEM;
      payload: number;
    }
  | {
      type: Actions.CHANGE_CART_ITEM_AMOUNT;
      payload: {
        id: number;
        value: string;
      };
    }
  | {
      type: Actions.COUNT_CART_TOTALS;
    }
  | {
      type: Actions.CLEAR_CART;
    };

export interface ProviderInterface {
  children: JSX.Element;
}

export interface ProductCardInterface {
  description: string;
  img: string;
  imgLabel: string;
  name: string;
  price: number;
}
