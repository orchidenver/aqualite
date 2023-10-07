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
  Empty = "",
}

export interface LinkComponentInterface {
  section: string;
  selectedSection: Anchors;
  setSelectedSection: (value: Anchors) => void;
}

export interface ButtonInterface {
  width?: string;
  height?: string;
  onClick?: () => void;
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

export interface Product {
  id: string;
  name: string;
  amount: number;
  price: number | boolean;
  description: string;
  img: string;
  imgLabel: string;
}

export interface InitialContextState {
  cart: Product[];
  cartTotal: {
    totalItems: number;
    totalSum: number;
  };
  mobileMenuOpen: boolean;
  burgerMenuClass: string;
}

export interface InitialContext extends InitialContextState {
  addItem: ({ id, name, amount, price }: Product) => void;
  removeItem: (id: string | undefined) => void;
  changeAmount: (id: string | undefined, value: string | undefined) => void;
  clearCart: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
  updateBurgerMenuClass: () => void;
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
      payload: string | undefined;
    }
  | {
      type: Actions.CHANGE_CART_ITEM_AMOUNT;
      payload: {
        id: string | undefined;
        value: string | undefined;
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
  price: number | boolean;
  counter: boolean;
}

export type PricesInterface = {
  [T in string]: number;
};

export interface CounterInterface {
  label: string;
  name: string;
  price: number | boolean;
  img: string;
  description: string;
}
