import { createClient } from "contentful";
import { assertTypeOfData, backupData, assertTypeOfPrice } from "../utils";

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

      if (!entries) throw new Error("Something went wrong");

      const sabitizedEntries = entries.items.map((item) => {
        const { name, description, picture, price } = item.fields;
        // @ts-ignore
        const img = picture?.fields.file.url;
        // @ts-ignore
        const imgLabel = picture?.fields.file.fileName;

        assertTypeOfData<string>(name);
        assertTypeOfData<string>(description);
        assertTypeOfData<string>(img);
        assertTypeOfData<string>(imgLabel);
        assertTypeOfPrice(price);

        return { name, description, price, img, imgLabel };
      });

      return sabitizedEntries;
    } catch (error) {
      return backupData;
    }
  }

  return { getProducts };
}
