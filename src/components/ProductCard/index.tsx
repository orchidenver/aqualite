import Button from "../Button";
import Counter from "../Counter";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./ProductCard.module.css";
import { ProductCardInterface } from "../../typings";
import { useCartContext } from "../../context";

export default function ProductCard({
  name,
  description,
  img,
  imgLabel,
  price,
}: ProductCardInterface) {
  const { addItem, cart } = useCartContext();
  const largeMobileSize = useMediaQuery("(min-width: 376px)");
  const mobileSize = useMediaQuery("(max-width: 800px)");
  const cardStylingSize = largeMobileSize && mobileSize;
  const product = cart.find((item) => item.id === imgLabel);

  return (
    <div
      className={styles.card}
      style={{
        maxWidth: cardStylingSize ? "65vw" : "220px",
        maxHeight: cardStylingSize ? "50vh" : "340px",
      }}
    >
      <img
        loading="lazy"
        src={img}
        alt={imgLabel}
        className={styles["card__img"]}
        style={{
          width: largeMobileSize && mobileSize ? "55%" : "50%",
        }}
      />
      <h2
        className={`${styles["card__title"]} ${
          imgLabel === "set.webp" && styles.green
        }`}
      >
        {name}
      </h2>
      <p className={styles["card__text"]}>{description}</p>
      <Counter
        label={imgLabel}
        name={name}
        price={price}
        description={description}
        img={img}
      />
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
