import { createUniqueFieldSchema } from "@ts-react/form";
import { object, z } from "zod";

export const NameSchema = createUniqueFieldSchema(
  z
    .string()
    .regex(/^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ']+$/, { message: "Check your phone name" })
    .min(2, { message: "Must be 2 or more characters long" })
    .max(10, { message: "Must be 10 or less characters long" })
    .describe("Ім'я // Олександр"),
  "name"
);

export const PhoneSchema = createUniqueFieldSchema(
  z
    .string()
    .regex(/(?=.*[0-9]{10}\s?$)/, { message: "Check your phone number" })
    .describe("Телефон // 067 123 45 67"),
  "phone"
);

export const FormSchema = z.object({
  name: NameSchema,
  phone: PhoneSchema,
  street: z
    .string()
    .min(4, { message: "Must be 4 or more characters long" })
    .max(20, { message: "Must be 20 or less characters long" })
    .describe("Вулиця // Героїв АТО")
    .optional(),
  building: z
    .string()
    .min(1, { message: "Must be 1 or more characters long" })
    .max(3, { message: "Must be 3 or less characters long" })
    .describe("Будинок // 1")
    .optional(),
  porch: z
    .string()
    .min(1, { message: "Must be 1 or more characters long" })
    .max(2, { message: "Must be 2 or less characters long" })
    .describe("Під'їзд // 1")
    .optional(),
  flat: z
    .string()
    .min(1, { message: "Must be 1 or more characters long" })
    .max(3, { message: "Must be 3 or less characters long" })
    .describe("Квартира // 1")
    .optional(),
});
