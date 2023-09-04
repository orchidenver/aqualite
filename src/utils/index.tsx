import { JSONValue } from "../typings";

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

  const data = `
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
    text: data,
    chat_id: id,
  });
};
