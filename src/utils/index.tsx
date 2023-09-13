import { JSONValue, Composition } from "../typings";

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
  return matches ? decodeURIComponent(matches[1]) : undefined;
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
  Object.entries(JSON.parse(text)).forEach((entry: [string, unknown]) =>
    setCookie(entry[0], entry[1], { maxAge: 1209600, secure: "secure" })
  );

  const DATA = `
    НОВЕ ЗАМОВЛЕННЯ \n
    Клієнт: ${capitalize(order.name)} \n
    Контакт: ${order.phone} \n
    Адреса: вул. ${order.street && capitalize(order.street)}, ${
    order.building
  }, під'їзд ${order.porch}, кв. ${order.flat} \n
    Замовлення: 1 балон 
  `;

  const endpoint = `https://api.telegram.org/bot${token}/sendMessage`;
  await makePostRequest(endpoint, {
    text: DATA,
    chat_id: id,
  });
};
