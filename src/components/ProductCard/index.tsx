import Button from "../Button";
import Counter from "../Counter";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./ProductCard.module.css";
import { ProductCardInterface } from "../../typings";
import { useCartContext } from "../../context";
import { useLocation } from "react-router-dom";

export default function ProductCard({
  name,
  description,
  img,
  imgLabel,
  price,
}: ProductCardInterface) {
  const { addItem, cart } = useCartContext();
  const location = useLocation();
  const product = cart.find((item) => item.id === imgLabel);

  return (
    <div
      className={styles.card}
      style={{ height: location.pathname === "/order" ? 450 : 400 }}
    >
      <img
        loading="lazy"
        src={img}
        alt={imgLabel}
        className={styles["card__img"]}
      />
      <h2
        className={`${styles["card__title"]} ${
          imgLabel === "set.webp" && styles.green
        }`}
      >
        {name}
      </h2>
      <p className={styles["card__text"]}>{description}</p>
      {location.pathname === "/order" && (
        <Counter
          label={imgLabel}
          name={name}
          price={price}
          description={description}
          img={img}
        />
      )}
      <p className={styles["card__price"]}>
        {!price ? (
          "Уточнюйте ціну"
        ) : (
          <>
            {price}
            <span> грн.</span>
          </>
        )}
      </p>
      <Button
        onClick={() =>
          addItem({
            id: imgLabel,
            name,
            amount: product?.amount ? product?.amount : 1,
            price,
            img,
            imgLabel,
            description,
          })
        }
      />
    </div>
  );
}
