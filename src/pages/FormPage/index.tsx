import { object, z } from "zod";
import {
  createTsForm,
  createUniqueFieldSchema,
  useDescription,
  useTsController,
} from "@ts-react/form";
import {
  capitalize,
  setCookie,
  getCookie,
  sendNotification,
} from "../../utils";
import { NameSchema, PhoneSchema, FormSchema } from "../../schemas";
import styles from "./Form.module.css";

const TG_TOKEN = import.meta.env.VITE_TG_TOKEN;
const CHAT_ID = import.meta.env.VITE_TG_USER_ID;

const mapping = [
  [NameSchema, MandatoryTextField] as const,
  [PhoneSchema, MandatoryTextField] as const,
  [z.string(), TextField] as const,
] as const;

const MyForm = createTsForm(mapping);

function MandatoryTextField({ inputId }: { inputId: string }) {
  const {
    field: { onChange, value },
    error,
  } = useTsController<string>();
  const { label, placeholder } = useDescription();

  return (
    <div className="mandatory-textfield">
      <span>*</span>
      <label htmlFor={inputId}>
        {label}
        <input
          id={inputId}
          type="text"
          value={value ? value : ""}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </label>
      {error?.errorMessage && <span>{error?.errorMessage}</span>}
    </div>
  );
}

function TextField({ inputId }: { inputId: string }) {
  const {
    field: { onChange, value },
    error,
  } = useTsController<string>();
  const { label, placeholder } = useDescription();

  return (
    <>
      <label htmlFor={inputId}>
        {label}
        <input
          id={inputId}
          type="text"
          value={value ? value : ""}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </label>
      {error?.errorMessage && <span>{error?.errorMessage}</span>}
    </>
  );
}

export default function FormPage() {
  return (
    <section className="user-data">
      <h3 className="user-data__title">вкажіть інформацію для доставки</h3>
      <MyForm
        onSubmit={(data) => {
          sendNotification(JSON.stringify(data), CHAT_ID, TG_TOKEN);
        }}
        renderAfter={() => <input type="submit" value="Відправити" />}
        schema={FormSchema}
        defaultValues={{
          name: getCookie("name"),
          phone: getCookie("phone"),
          street: getCookie("street"),
          building: getCookie("building"),
          porch: getCookie("porch"),
          flat: getCookie("flat"),
        }}
        props={{
          name: {
            inputId: "name",
          },
          phone: {
            inputId: "phone",
          },
          street: {
            inputId: "street",
          },
          building: {
            inputId: "building",
          },
          porch: {
            inputId: "porch",
          },
          flat: {
            inputId: "flat",
          },
        }}
      >
        {({ name, phone, street, building, porch, flat }) => {
          return (
            <>
              {name}
              {phone}
              {street}
              <div className="flex-row">
                {building}
                {porch}
                {flat}
              </div>
            </>
          );
        }}
      </MyForm>
    </section>
  );
  // return (
  //   <section className="user-data">
  //     <h3 className="user-data__title">вкажіть інформацію для доставки</h3>
  //     <form className="form">
  //       <div className="name">
  //         <span>*</span>
  //         <label htmlFor="name">
  //           Ім'я
  //           <input type="text" id="name" />
  //         </label>
  //       </div>
  //       <div className="phone">
  //         <span>*</span>
  //         <label htmlFor="phone">
  //           Телефон
  //           <input type="number" id="phone" />
  //         </label>
  //       </div>
  //       <label htmlFor="street">
  //         Вулиця
  //         <input type="text" id="street" />
  //       </label>
  //       <div className="form__address">
  //         <label htmlFor="building">
  //           Дім
  //           <input type="text" id="building" />
  //         </label>
  //         <label htmlFor="porch">
  //           Під'їзд
  //           <input type="text" id="porch" />
  //         </label>
  //         <label htmlFor="flat">
  //           Квартира
  //           <input type="text" id="flat" />
  //         </label>
  //       </div>
  //       <input type="submit" value="Відправити" />
  //     </form>
  //   </section>
  // );
}
