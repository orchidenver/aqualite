import {
  JSONValue,
  Composition,
  ProductCardInterface,
  Product,
} from "../typings";

export const COMPOSITION: Composition[] = [
  {
    element: "Загальна жорсткість",
    amount: {
      quantity: "1.0 - 1.3",
      measure: "ммоль/дм³",
    },
  },
  {
    element: "Загальна лужність",
    amount: {
      quantity: "1.1 - 1.3",
      measure: "ммоль/дм³",
    },
  },
  {
    element: "Калій",
    amount: {
      quantity: "1,0 — 1,2",
      measure: "мг/дм³",
    },
  },
  {
    element: "Кальций",
    amount: {
      quantity: "13,0 — 15,0",
      measure: "мг/дм³",
    },
  },
  {
    element: "Магній",
    amount: {
      quantity: "5,0 — 7,0",
      measure: "мг/дм³",
    },
  },
  {
    element: "Натрій",
    amount: {
      quantity: "2,0 — 3,0",
      measure: "мг/дм³",
    },
  },
  {
    element: "Сухий залишок",
    amount: {
      quantity: "40,0 — 45,0",
      measure: "мг/дм³",
    },
  },
  {
    element: "Фториди",
    amount: {
      quantity: "0,07",
      measure: "мг/дм³",
    },
  },
  {
    element: "Сульфати",
    amount: {
      quantity: "5,0 — 15,0",
      measure: "мг/дм³",
    },
  },
  {
    element: "Хлориди",
    amount: {
      quantity: "5,0 — 6,0",
      measure: "мг/дм³",
    },
  },
  {
    element: "Гідрокарбонат-іони",
    amount: {
      quantity: "100,0 — 105,0",
      measure: "мг/дм³",
    },
  },
];

export const PRICES = {
  bulb: 160,
  set: 420,
  pomp: 150,
  dispenser: 150,
};

const makePostRequest = (url: string, data: JSONValue) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const capitalize = (input: string) =>
  `${input.charAt(0).toUpperCase()}${input.slice(1)}`;

export const newLineToken = "\n";

export const formatTitle = (title: string) => `<b><i>${title}</i></b>`;

export function setCookie(
  name: string,
  value: string | unknown,
  options: { maxAge: number; secure?: "secure"; path?: string }
) {
  options = {
    path: "/",
    ...options,
  };

  const updatedCookie: string = `${name}=${value}; max-age=${options.maxAge}; path=${options.path}; ${options.secure}`;

  document.cookie = updatedCookie;
}

export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : "";
}

export function deleteCookie(name: string) {
  setCookie(name, "", {
    maxAge: -1,
  });
}

export const sendNotification = async (
  text: string,
  id: string,
  token: string
) => {
  const order = JSON.parse(text);
  let newOrder;
  Object.entries(JSON.parse(text)).forEach((entry: [string, unknown]) =>
    setCookie(entry[0], entry[1], { maxAge: 1209600, secure: "secure" })
  );

  if (getCookie("cart")) {
    const cartData = JSON.parse(getCookie("cart"));
    newOrder = cartData
      .map(
        (item: Product) =>
          `${item.name} : ${item.amount} шт, ${item.price} грн. \n`
      )
      .join(" ");
  }

  const DATA = `
    НОВЕ ЗАМОВЛЕННЯ \n
    Клієнт: ${capitalize(order.name)} \n
    Контакт: ${order.phone} \n
    Адреса: вул. ${order.street ? capitalize(order.street) : "-"}, ${
    order.building ? order.building : "-"
  }, під'їзд ${order.porch ? order.porch : "-"}, кв. ${
    order.flat ? order.flat : "-"
  } \n
    Замовлення: \n ${newOrder ? newOrder : "передзвоніть мені"} 
  `;

  const endpoint = `https://api.telegram.org/bot${token}/sendMessage`;
  await makePostRequest(endpoint, {
    text: DATA,
    chat_id: id,
  });
};

export function assertTypeOfData<T>(arg: any): asserts arg is T {
  if (typeof arg !== "number" && typeof arg !== "string") {
    console.log("!!!", arg);
    throw new Error(`${arg} ${typeof arg} error`);
  }
}

export function assertTypeOfPrice(arg: any): asserts arg is number | boolean {
  if (typeof arg !== "number" && typeof arg !== "boolean") {
    console.log("!!!", arg);
    throw new Error(`${arg} ${typeof arg} error`);
  }
}

export const backupData: ProductCardInterface[] = [
  {
    name: "електро диспенсер",
    description: "Електрична помпа для балонів 19 л.",
    price: false,
    img: "//images.ctfassets.net/s5xleiql8x7z/2SpZNffEPaCq2a7MKjEXgP/118362e036961d6467c87a8e585dbf83/dispenser.webp",
    imgLabel: "dispenser.webp",
  },
  {
    name: "помпа",
    description: "Стандартна помпа для балонів 19 л.",
    price: false,
    img: "//images.ctfassets.net/s5xleiql8x7z/csESox23GgZWso5iOxpOM/cd032dfbd29fc8233470ea6416e5b15d/pomp.webp",
    imgLabel: "pomp.webp",
  },
  {
    name: "стартовий набір",
    description: "Стартовий набір. 2 балона та помпа. Вода у подарунок",
    price: false,
    img: "//images.ctfassets.net/s5xleiql8x7z/32ZT785wcSAmMfjzYa8Mh2/444d775fd39b89e146bb4dffee39473e/set.webp",
    imgLabel: "set.webp",
  },
  {
    name: "балон",
    description: "Негазована питна вода «Аквалайт» 19 л.",
    price: false,
    img: "//images.ctfassets.net/s5xleiql8x7z/8UPwdVjRtAx9ohmrGQftM/673626b31fd0b639d4d73d4133a804ff/bulb.webp",
    imgLabel: "bulb.webp",
  },
];

export const fastOrderBackupData: ProductCardInterface = {
  name: "балон",
  description: "Негазована питна вода «Аквалайт» 19 л.",
  price: false,
  img: "//images.ctfassets.net/s5xleiql8x7z/8UPwdVjRtAx9ohmrGQftM/673626b31fd0b639d4d73d4133a804ff/bulb.webp",
  imgLabel: "bulb.webp",
};
