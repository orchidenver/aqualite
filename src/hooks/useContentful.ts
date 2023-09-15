import { createClient } from "contentful";

export default function useContentful() {
  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID_CONTENT,
    accessToken: import.meta.env.VITE_PROD_TOKEN_CONTENT,
    // host: "cdn.contentful.com",
    // host: "preview.contentful.com",
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
