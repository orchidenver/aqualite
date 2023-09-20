import { ActionTypes, Actions, InitialContextState } from "../typings";
import { setCookie, deleteCookie, getCookie } from "../utils";

export function reducer(state: InitialContextState, action: ActionTypes) {
  if (action.type === Actions.ADD_TO_CART) {
    const { id, name, amount, price, img, imgLabel, description } =
      action.payload;
    const tempItem = state.cart.find((item) => item.id === id);

    if (tempItem) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          let newItemAmount = amount > 10 ? 10 : amount;
          return { ...item, amount: newItemAmount };
        } else {
          return item;
        }
      });

      setCookie("cart", JSON.stringify(tempCart), {
        maxAge: 1209600,
        secure: "secure",
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id,
        name,
        amount,
        price,
        img,
        imgLabel,
        description,
      };
      setCookie("cart", JSON.stringify([...state.cart, newItem]), {
        maxAge: 1209600,
        secure: "secure",
      });
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === Actions.REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    setCookie("cart", JSON.stringify(tempCart), {
      maxAge: 1209600,
      secure: "secure",
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === Actions.CLEAR_CART) {
    deleteCookie("cart");
    return { ...state, cart: [] };
  }

  if (action.type === Actions.CHANGE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount === 10 ? 10 : item.amount! + 1;

          return { ...item, amount: newAmount };
        }

        if (value === "dec") {
          let newAmount = item.amount === 1 ? 0 : item.amount! - 1;

          return { ...item, amount: newAmount };
        }
      }

      return item;
    });

    setCookie("cart", JSON.stringify(tempCart), {
      maxAge: 1209600,
      secure: "secure",
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === Actions.COUNT_CART_TOTALS) {
    const { totalItems, totalSum } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;

        if (typeof price === "boolean")
          return {
            totalItems: 0,
            totalSum: 0,
          };

        total.totalItems += amount!;
        total.totalSum += price * amount!;
        return total;
      },
      {
        totalItems: 0,
        totalSum: 0,
      }
    );
    return {
      ...state,
      cartTotal: {
        totalItems,
        totalSum,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
}
