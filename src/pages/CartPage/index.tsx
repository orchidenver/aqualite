import * as React from "react";
import Counter from "../../components/Counter";
import TransparentButton from "../../components/TransparentButton";
import Button from "../../components/Button";
import { PathConstants } from "../../router/PageRoutes";

import bulb from "../../assets/bulb.svg";
import styles from "./CartPage.module.css";

export interface IAppProps {}

export default function CartPage(props: IAppProps) {
  return (
    <aside className={styles.cart}>
      <h3 className={styles["cart__header"]}>корзина</h3>
      <div className={styles.container}>
        {/* <div className={styles["cart__empty"]}>
          <p className={styles["cart__message"]}>Ваш кошик порожній</p>
          <TransparentButton reference={PathConstants.FAST_ORDER}>
            Швидке замовлення
          </TransparentButton>
        </div> */}
        <div className={styles["cart__full"]}>
          <div className={styles["cart__item"]}>
            <img src={bulb} alt="Product" className={styles["cart__img"]} />
            <div className={styles["cart__description"]}>
              <p className={styles.title}>СТАРТОВИЙ НАБІР</p>
              <p className={styles.text}>
                Стартовий набір. 2 балона та помпа. Вода у подарунок
              </p>
              <Counter />
            </div>
            <div className={styles["cart__total"]}>
              <button className={styles["delete-btn"]}>&#128473;</button>
              <p className={styles.sum}>
                420 <span>грн.</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles["cart__full"]}>
          <div className={styles["cart__item"]}>
            <img src={bulb} alt="Product" className={styles["cart__img"]} />
            <div className={styles["cart__description"]}>
              <p className={`${styles.title} ${styles.green}`}>
                СТАРТОВИЙ НАБІР
              </p>
              <p className={styles.text}>
                Стартовий набір. 2 балона та помпа. Вода у подарунок
              </p>
              <Counter />
            </div>
            <div className={styles["cart__total"]}>
              <button className={styles["delete-btn"]}>&#128473;</button>
              <p className={styles.sum}>
                420 <span>грн.</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles["cart__full"]}>
          <div className={styles["cart__item"]}>
            <img src={bulb} alt="Product" className={styles["cart__img"]} />
            <div className={styles["cart__description"]}>
              <p className={styles.title}>СТАРТОВИЙ НАБІР</p>
              <p className={styles.text}>
                Стартовий набір. 2 балона та помпа. Вода у подарунок
              </p>
              <Counter />
            </div>
            <div className={styles["cart__total"]}>
              <button className={styles["delete-btn"]}>&#128473;</button>
              <p className={styles.sum}>
                420 <span>грн.</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.summary}>
          <p className={styles.title}>РАЗОМ:</p>
          <p className={styles.sum}>
            420 <span>грн.</span>
          </p>
        </div>
        <div className={styles.btn}>
          <Button width="200px" height="50px" />
        </div>
      </div>
    </aside>
  );
}
