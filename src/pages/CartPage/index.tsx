import { Fragment } from "react";
import Counter from "../../components/Counter";
import TransparentButton from "../../components/TransparentButton";
import Button from "../../components/Button";
import { useCartContext } from "../../context";
import { PathConstants } from "../../router/PageRoutes";
import deleteItem from "../../assets/deleteitem.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import styles from "./CartPage.module.css";

export default function CartPage() {
  const {
    cart,
    cartTotal: { totalSum, totalItems },
    removeItem,
  } = useCartContext();
  const mobileSize = useMediaQuery("(max-width: 800px)");

  return (
    <aside className={styles.cart}>
      <h3 className={styles["cart__header"]}>корзина</h3>
      <div className={styles.container}>
        {totalItems ? (
          <>
            <div className={styles["cart__full"]}>
              {cart.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <div className={styles["cart__item"]}>
                      <img
                        src={item.img}
                        alt={item.imgLabel}
                        className={styles["cart__img"]}
                      />
                      <div className={styles["cart__description"]}>
                        <p className={styles.title}>{item.name}</p>
                        <p className={styles.text}>{item.description}</p>
                        <Counter
                          label={item.imgLabel}
                          name={item.name}
                          price={item.price}
                          description={item.description}
                          img={item.img}
                        />
                      </div>
                      <div className={styles["cart__total"]}>
                        <button
                          className={styles["delete-btn"]}
                          onClick={() => removeItem(item.id)}
                        >
                          <img src={deleteItem} alt="Delete" />
                        </button>
                        <p className={styles.sum}>
                          {item.price} <span>грн.</span>
                        </p>
                      </div>
                    </div>
                    <div className={styles.divider}></div>
                  </Fragment>
                );
              })}
            </div>
            <div className={styles.summary}>
              <p className={styles.title}>РАЗОМ:</p>
              <p className={styles.sum}>
                {totalSum} <span>грн.</span>
              </p>
            </div>
            <div className={styles.btn}>
              <Button width="200px" height="50px" />
            </div>
          </>
        ) : (
          <div className={styles["cart__empty"]}>
            <p className={styles["cart__message"]}>Ваш кошик порожній</p>
            <TransparentButton
              reference={mobileSize ? PathConstants.FAST_ORDER : "/#shop"}
            >
              Швидке замовлення
            </TransparentButton>
          </div>
        )}
      </div>
    </aside>
  );
}
