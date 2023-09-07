import { NavLink } from "react-router-dom";
import { PathConstants } from "../../router/PageRoutes";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import styles from "./MainPage.module.css";
import hero from "../../assets/hero.svg";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";
import card4 from "../../assets/card4.svg";

export interface IAppProps {}

export default function MainPage(props: IAppProps) {
  return (
    <>
      <section id="hero" className={styles.hero}>
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles["hero__actions"]}>
            <h1 className={styles["hero__header"]}>
              доставка негазованої питної води
              <p className={styles.blue}>в кривому розі</p>
            </h1>
            <NavLink
              to={PathConstants.FAST_ORDER}
              className={styles["hero__btn"]}
            >
              Замовити
            </NavLink>
          </div>
          <img src={hero} alt="Water" className={styles["hero__img"]} />
        </div>
      </section>
      <section id="shop" className={styles.shop}>
        <h2 className={`${styles["shop__header"]} ${styles.blue}`}>магазин</h2>
        <div className={`${styles.container} ${styles.row}`}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <section id="delivery" className={styles.delivery}>
        <h2 className={`${styles["delivery__header"]} ${styles.blue}`}>
          доставка
        </h2>
        <div className={`${styles.container} ${styles.row}`}>
          <div className={styles.card}>
            <img src={card1} alt="Order" className={styles["card__img"]} />
            <h2 className={styles["card__title"]}>Оформіть заявку</h2>
            <p className={styles["card__text"]}>На сайті або за телефоном</p>
          </div>
          <div className={styles.card}>
            <img src={card2} alt="Contact" className={styles["card__img"]} />
            <h2 className={styles["card__title"]}>Обробляємо заявку</h2>
            <p className={styles["card__text"]}>
              Оператор передзвонить вам для уточнення зручного часу доставки
            </p>
          </div>
          <div className={styles.card}>
            <img src={card3} alt="Delivery" className={styles["card__img"]} />
            <h2 className={styles["card__title"]}>Доставляємо воду</h2>
            <p className={styles["card__text"]}>
              Найкратчайшим шляхом, по улюбленим дорогам та вулочкам, під
              приємну музику
            </p>
          </div>
          <div className={styles.card}>
            <img src={card4} alt="Water" className={styles["card__img"]} />
            <h2 className={styles["card__title"]}>Вода вже у вас</h2>
            <p className={styles["card__text"]}>
              Донесемо навіть на 9й поверх якщо вимкнули світло. Русні пи#да!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
