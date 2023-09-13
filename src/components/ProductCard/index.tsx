import Button from "../Button";
import Counter from "../Counter";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./ProductCard.module.css";
import bulb from "../../assets/bulb.svg";

export default function ProductCard() {
  const largeMobileSize = useMediaQuery("(min-width: 376px)");
  const mobileSize = useMediaQuery("(max-width: 800px)");
  const cardStylingSize = largeMobileSize && mobileSize;

  return (
    <div
      className={styles.card}
      style={{
        maxWidth: cardStylingSize ? "65vw" : "220px",
        maxHeight: cardStylingSize ? "50vh" : "340px",
      }}
    >
      <img
        src={bulb}
        alt="water"
        className={styles["card__img"]}
        style={{
          width: largeMobileSize && mobileSize ? "55%" : "50%",
        }}
      />
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
