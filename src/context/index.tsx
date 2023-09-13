import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  Reducer,
  useCallback,
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

const initialContext: InitialContext = {
  cart: [],
  cartTotal: {
    totalItems: 0,
    totalSum: 0,
  },
  addItem: () => {},
  removeItem: () => {},
  changeAmount: () => {},
  clearCart: () => {},
};

const CartContext = createContext<InitialContext>(initialContext);

export function CartProvider({ children }: ProviderInterface) {
  const [{ cart, cartTotal }, dispatch] = useReducer<
    Reducer<InitialContextState, ActionTypes>
  >(reducer, initialContext);

  useEffect(() => {
    dispatch({ type: Actions.COUNT_CART_TOTALS });
    // localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [cart]);

  function addItem({ id, name, amount, sum }: Product) {
    dispatch({
      type: Actions.ADD_TO_CART,
      payload: {
        id,
        name,
        amount,
        sum,
      },
    });
  }

  function removeItem(id: number) {
    dispatch({ type: Actions.REMOVE_CART_ITEM, payload: id });
  }

  function changeAmount(id: number, value: string) {
    dispatch({ type: Actions.CHANGE_CART_ITEM_AMOUNT, payload: { id, value } });
  }

  function clearCart() {
    dispatch({ type: Actions.CLEAR_CART });
  }

  const cartValue: InitialContext = {
    cart,
    cartTotal,
    addItem,
    removeItem,
    changeAmount,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
