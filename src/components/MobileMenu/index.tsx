import TransparentButton from "../TransparentButton";
import { PathConstants } from "../../router/PageRoutes";
import styles from "./MobileMenu.module.css";

export default function MobileMenu() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles["sidebar__nav"]}>
        <ul className={styles["sidebar__menu"]}>
          <li className={styles["sidebar__item"]}>Магазин</li>
          <li className={styles["sidebar__item"]}>Доставка</li>
          <li className={styles["sidebar__item"]}>Про Воду</li>
          <li className={styles["sidebar__item"]}>Склад Води</li>
          <li className={styles["sidebar__item"]}>Контакти</li>
        </ul>
      </nav>
      <div className={styles["sidebar__btn"]}>
        <TransparentButton reference={PathConstants.FAST_ORDER}>
          Швидке замовлення
        </TransparentButton>
      </div>
    </aside>
  );
}
