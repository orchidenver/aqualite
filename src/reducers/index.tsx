import { ActionTypes, Actions, InitialContextState } from "../typings";
import { findPrice } from "../utils";

export function reducer(state: InitialContextState, action: ActionTypes) {
  if (action.type === Actions.ADD_TO_CART) {
    const { id, name, amount, sum } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id);

    if (tempItem) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          let newItemAmount =
            item.amount + amount > 10 ? 10 : item.amount + amount;
          return { ...item, amount: newItemAmount };
        } else {
          return item;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id,
        name,
        amount,
        sum,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === Actions.REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  if (action.type === Actions.CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === Actions.CHANGE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount === 10 ? 10 : item.amount + 1;

          return { ...item, amount: newAmount };
        }

        if (value === "dec") {
          let newAmount = item.amount === 1 ? 1 : item.amount - 1;

          return { ...item, amount: newAmount };
        }
      }

      return item;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === Actions.COUNT_CART_TOTALS) {
    const { totalItems, totalAmount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, name } = cartItem;
        const price = findPrice(name);

        total.totalItems += amount;
        total.totalAmount += price! * amount;
        return total;
      },
      {
        totalItems: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItems, totalAmount };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
}
