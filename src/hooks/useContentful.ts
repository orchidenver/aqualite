import { createClient } from "contentful";

export default function useContentful() {
  const SPACE_ID = import.meta.env.VITE_SPACE_ID_CONTENT;
  const PROD_TOKEN = import.meta.env.VITE_PROD_TOKEN_CONTENT;
  // const DEV_TOKEN = import.meta.env.VITE_DEV_TOKEN_CONTENT;

  const client = createClient({
    space: SPACE_ID,
    accessToken: PROD_TOKEN,
    host: "preview.contentful.com",
  });

  async function getProducts() {
    try {
      const entries = await client.getEntries({
        content_type: "product",
      });

      const sabitizedEntries = entries.items.map((item) => {
        const { name, description, picture, price } = item.fields;
        // @ts-ignore
        const img = picture?.fields.file.url;
        // @ts-ignore
        const imgLabel = picture?.fields.file.fileName;

        return { name, description, price, img, imgLabel };
      });

      return sabitizedEntries;
    } catch (error) {}
  }

  return { getProducts };
}
