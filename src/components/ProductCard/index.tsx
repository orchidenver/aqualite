import Button from "../Button";
import styles from "./ProductCard.module.css";
import bulb from "../../assets/bulb.jpg";

export interface IAppProps {}

export default function ProductCard(props: IAppProps) {
  return (
    <div className={styles.card}>
      <img src={bulb} alt="water" className={styles["card__img"]} />
      <h2 className={styles["card__title"]}>балон</h2>
      <p className={styles["card__text"]}>Негазована питна вода Аквалайт 19л</p>
      <div className={styles["card__counter"]}>
        <button
          type="button"
          className={styles["card-amount-btn"]}
          disabled={true}
        >
          -
        </button>
        <h2 className={styles.amount}>1</h2>
        <button type="button" className={styles["card-amount-btn"]}>
          +
        </button>
      </div>
      <p className={styles["card__price"]}>
        60<span> грн.</span>
      </p>
      <Button />
    </div>
  );
}
