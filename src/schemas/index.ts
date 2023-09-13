import { createUniqueFieldSchema } from "@ts-react/form";
import { z } from "zod";

export const NameSchema = createUniqueFieldSchema(
  z
    .string({ required_error: "Обов'язкове поле" })
    .regex(/^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ']+$/, { message: "Перемірте ім'я" })
    .min(2, { message: "Занадто коротке ім'я" })
    .max(10, { message: "Занадто довге ім'я" })
    .describe("Ім'я // Олександр"),
  "name"
);

export const PhoneSchema = createUniqueFieldSchema(
  z
    .string({ required_error: "Обов'язкове поле" })
    .regex(/(?=.*[0-9]{10}\s?$)/, { message: "Невірний номер телефону" })
    .describe("Телефон // 067 123 45 67"),
  "phone"
);

export const FormSchema = z.object({
  name: NameSchema,
  phone: PhoneSchema,
  street: z
    .string()
    .min(4, { message: "Зададто коротка назва вулиці" })
    .max(20, { message: "Занадто довга назва вулиці" })
    .describe("Вулиця // Героїв АТО")
    .optional(),
  building: z
    .string()
    .min(1, { message: "Мін. 1 цифра" })
    .max(3, { message: "Макс. 3 цифри" })
    .describe("Будинок // 1")
    .optional(),
  porch: z
    .string()
    .min(1, { message: "Мін. 1 цифра" })
    .max(2, { message: "Макс. 2 цифри" })
    .describe("Під'їзд // 1")
    .optional(),
  flat: z
    .string()
    .min(1, { message: "Мін. 1 цифра" })
    .max(3, { message: "Макс. 3 цифри" })
    .describe("Квартира // 1")
    .optional(),
});
