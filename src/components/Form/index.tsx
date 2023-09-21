import { getCookie, sendNotification } from "../../utils";
import { useCartContext } from "../../context";
import { NameSchema, PhoneSchema, FormSchema } from "../../schemas";
import { z } from "zod";
import { createTsForm, useDescription, useTsController } from "@ts-react/form";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import { PathConstants } from "../../router/PageRoutes";

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
    <div className={styles["mandatory-textfield"]}>
      <span
        className={`${styles.mandatory} ${
          error?.errorMessage && styles["error-asterisk"]
        }`}
      >
        *
      </span>
      <div className={styles["input-container"]}>
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
            className={`${error?.errorMessage && styles["error-input"]}`}
          />
        </label>
        <span className={styles["error-message"]}>
          {error?.errorMessage && error?.errorMessage}
        </span>
      </div>
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
    <div
      className={`${styles["input-container"]} ${styles["optional-textfield"]}`}
    >
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
          className={`${error?.errorMessage && styles["error-input"]}`}
        />
      </label>
      <span className={styles["error-message"]}>
        {error?.errorMessage && error?.errorMessage}
      </span>
    </div>
  );
}

export default function Form() {
  const { clearCart } = useCartContext();
  const navigate = useNavigate();

  return (
    <MyForm
      onSubmit={(data) => {
        // sendNotification(JSON.stringify(data), CHAT_ID, TG_TOKEN);
        clearCart();
        navigate(PathConstants.FEEDBACK);
      }}
      renderAfter={() => (
        <input
          type="submit"
          value="Підтвердити"
          className={styles["submit-btn"]}
        />
      )}
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
            <div className={styles["flex-row"]}>
              {building}
              {porch}
              {flat}
            </div>
          </>
        );
      }}
    </MyForm>
  );
}
