import Button from "../Button";
import Counter from "../Counter";
import styles from "./ProductCard.module.css";
import bulb from "../../assets/bulb.svg";

export interface IAppProps {}

export default function ProductCard(props: IAppProps) {
  return (
    <div className={styles.card}>
      <img src={bulb} alt="water" className={styles["card__img"]} />
      <h2 className={styles["card__title"]}>балон</h2>
      <p className={styles["card__text"]}>Негазована питна вода Аквалайт 19л</p>
      <Counter />
      <p className={styles["card__price"]}>
        60<span> грн.</span>
      </p>
      <Button />
    </div>
  );
}
