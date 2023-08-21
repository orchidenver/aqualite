import Button from "../Button";
import styles from "./Card.module.css";
import bulb from "../../assets/bulb.jpg";

export interface IAppProps {}

export default function Card(props: IAppProps) {
  return (
    <div className={styles.card}>
      <img src={bulb} alt="water" className={styles["card__img"]} />
      <h2 className={styles["card__title"]}>БАЛОН</h2>
      <p className={styles["card__text"]}>Негазована питна вода Аквалайт 19л</p>
      <div className="card__counter"></div>
      <p className="card__price">
        60<span>грн.</span>
      </p>
      <Button />
    </div>
  );
}
