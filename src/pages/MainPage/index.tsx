import { NavLink } from "react-router-dom";
import { PathConstants } from "../../router/PageRoutes";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import useMediaQuery from "../../hooks/useMediaQuery";
import styles from "./MainPage.module.css";
import hero from "../../assets/hero.svg";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";
import card4 from "../../assets/card4.svg";
import waterexample1 from "../../assets/waterexample1.jpg";
import waterexample2 from "../../assets/waterexample2.jpg";
import waterexample3 from "../../assets/waterexample3.jpg";

export interface IAppProps {}

export default function MainPage(props: IAppProps) {
  const mobileSize = useMediaQuery("(max-width: 800px)");

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
      <section id="about" className={styles.about}>
        <h2 className={`${styles["about__header"]}  ${styles.blue}`}>
          про воду
        </h2>
        <div className={`${styles.container} ${mobileSize ? styles.full : ""}`}>
          <div className={styles["about__container"]}>
            <img
              src={waterexample1}
              alt="Water example"
              className={styles["about__img"]}
            />
            <p className={styles["about__text"]}>
              Тут написать что-то про водичку, что она негазированная и еще
              всякой нужной и приятно фигни. С какого года работаем. В какие
              районы ездим. И все что крутое прийдет в голову Тут написать
              что-то про водичку, что она негазированная и еще всякой нужной и
              приятно фигни. С какого года работаем. В какие районы ездим. И все
              что крутое прийдет в голову
            </p>
          </div>
          <div
            className={`${styles["about__container"]} ${
              mobileSize ? "" : styles.reverse
            }`}
          >
            <img
              src={waterexample2}
              alt="Water example"
              className={styles["about__img"]}
            />
            <p
              className={`${styles["about__text"]} ${
                mobileSize ? "" : styles["about__text-left"]
              }`}
            >
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. Lorem Ipsum - это текст-"рыба",
              часто используемый в печати и вэб-дизайне. Lorem Ipsum является
              стандартной "рыбой" для текстов на латинице с начала XVI века.
            </p>
          </div>
          <div className={styles["about__container"]}>
            <img
              src={waterexample3}
              alt="Water example"
              className={styles["about__img"]}
            />
            <p className={styles["about__text"]}>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. Lorem Ipsum - это текст-"рыба",
              часто используемый в печати и вэб-дизайне. Lorem Ipsum является
              стандартной "рыбой" для текстов на латинице с начала XVI века.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
