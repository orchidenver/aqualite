import ProductCard from "../../components/ProductCard";
import TransparentButton from "../../components/TransparentButton";

import styles from "./FastOrder.module.css";
import logo from "../../assets/logo-white.svg";
import phone from "../../assets/phone_icon.svg";

export default function FastOrder() {
  return (
    <section className={styles["fast-order"]}>
      <nav className={styles.nav}>
        <img src={logo} alt="Logo" />
        <a href="tel:068 948 28 64">
          <img src={phone} alt="Phone" className="tel" />
        </a>
      </nav>
      <h3 className={styles["fast-order__header"]}>швидке замовлення</h3>
      <div className={styles["fast-order__content"]}>
        <ProductCard />
        <div className={styles.action}>
          <TransparentButton reference="/" color="#FFF">
            Перейти на сайт
          </TransparentButton>
        </div>
      </div>
    </section>
  );
}
