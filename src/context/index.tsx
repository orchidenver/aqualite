import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  Reducer,
  useState,
  useMemo,
} from "react";
import { reducer } from "../reducers";
import {
  ActionTypes,
  Actions,
  InitialContext,
  InitialContextState,
  ProviderInterface,
  Product,
} from "../typings";
import styles from "../components/Navbar/Navbar.module.css";

const initialContext: InitialContext = {
  cart: [],
  cartTotal: {
    totalItems: 0,
    totalSum: 0,
  },
  burgerMenuClass: "",
  addItem: () => {},
  removeItem: () => {},
  changeAmount: () => {},
  clearCart: () => {},
  mobileMenuOpen: false,
  closeMobileMenu: () => {},
  toggleMobileMenu: () => {},
  updateBurgerMenuClass: () => {},
};

const CartContext = createContext<InitialContext>(initialContext);

export function CartProvider({ children }: ProviderInterface) {
  const [{ cart, cartTotal }, dispatch] = useReducer<
    Reducer<InitialContextState, ActionTypes>
  >(reducer, initialContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [burgerMenuClass, setBurgerMenuClass] = useState<string>(
    `${styles["burger-bar"]} ${styles.unclicked}`
  );

  useEffect(() => {
    dispatch({ type: Actions.COUNT_CART_TOTALS });
  }, [cart]);

  function toggleMobileMenu() {
    setMobileMenuOpen((prevState) => !prevState);
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  function updateBurgerMenuClass() {
    if (!mobileMenuOpen) {
      setBurgerMenuClass(`${styles["burger-bar"]} ${styles.clicked}`);
    } else {
      setBurgerMenuClass(`${styles["burger-bar"]} ${styles.unclicked}`);
    }
  }

  function addItem({
    id,
    name,
    amount,
    price,
    img,
    imgLabel,
    description,
  }: Product) {
    dispatch({
      type: Actions.ADD_TO_CART,
      payload: {
        id,
        name,
        amount,
        price,
        img,
        imgLabel,
        description,
      },
    });
  }

  function removeItem(id: string | undefined) {
    dispatch({ type: Actions.REMOVE_CART_ITEM, payload: id });
  }

  function changeAmount(id: string | undefined, value: string | undefined) {
    dispatch({ type: Actions.CHANGE_CART_ITEM_AMOUNT, payload: { id, value } });
  }

  function clearCart() {
    dispatch({ type: Actions.CLEAR_CART });
  }

  const cartValue: InitialContext = useMemo(() => {
    return {
      cart,
      cartTotal,
      mobileMenuOpen,
      burgerMenuClass,
      addItem,
      removeItem,
      changeAmount,
      clearCart,
      closeMobileMenu,
      toggleMobileMenu,
      updateBurgerMenuClass,
    };
  }, [cart, cartTotal, mobileMenuOpen]);

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
