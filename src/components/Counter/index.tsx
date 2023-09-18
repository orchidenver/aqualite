import { useCartContext } from "../../context";
import styles from "./Counter.module.css";

export interface CounterInterface {
  label: string;
  name: string;
  price: number | boolean;
  img: string;
  description: string;
}

export default function Counter({
  label,
  name,
  price,
  img,
  description,
}: CounterInterface) {
  const { changeAmount, cart, addItem, removeItem } = useCartContext();
  const product = cart.find((item) => item.id === label);

  return (
    <div className={styles["card__counter"]}>
      <button
        type="button"
        className={styles["card-amount-btn"]}
        disabled={
          product?.amount != undefined && product?.amount > 0 ? false : true
        }
        onClick={() => {
          if (!product?.amount) {
            addItem({
              id: label,
              name,
              amount: 0,
              price,
              img,
              description,
              imgLabel: label,
            });
          }

          if (product?.amount === 1) {
            removeItem(label);
          }
          changeAmount(label, "dec");
        }}
      >
        -
      </button>
      <h2 className={styles.amount}>{product?.amount ? product?.amount : 0}</h2>
      <button
        type="button"
        className={styles["card-amount-btn"]}
        disabled={
          product?.amount != undefined && product?.amount > 9 ? true : false
        }
        onClick={() => {
          if (!product?.amount) {
            addItem({
              id: label,
              name,
              amount: 0,
              price,
              img,
              description,
              imgLabel: label,
            });
          }
          changeAmount(label, "inc");
        }}
      >
        +
      </button>
    </div>
  );
}
