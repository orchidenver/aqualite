import { Link } from "react-router-dom";
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
import sertificate from "../../assets/sertificate.jpg";

interface Composition {
  element: string;
  amount: {
    quantity: string;
    measure: string;
  };
}

const composition: Composition[] = [
  {
    element: "Загальна жорсткість",
    amount: {
      quantity: "1.0 - 1.3",
      measure: "ммоль/дм³",
    },
  },
  {
    element: "Загальна лужність",
    amount: {
      quantity: "1.1 - 1.3",
      measure: "ммоль/дм³",
    },
  },
  {
    element: "Калій",
    amount: {
      quantity: "1,0 — 1,2",
      measure: "мг/дм³",
    },
  },
  {
    element: "Кальций",
    amount: {
      quantity: "13,0 — 15,0",
      measure: "мг/дм³",
    },
  },
  {
    element: "Магній",
    amount: {
      quantity: "5,0 — 7,0",
      measure: "мг/дм³",
    },
  },
  {
    element: "Натрій",
    amount: {
      quantity: "2,0 — 3,0",
      measure: "мг/дм³",
    },
  },
  {
    element: "Сухий залишок",
    amount: {
      quantity: "40,0 — 45,0",
      measure: "мг/дм³",
    },
  },
  {
    element: "Фториди",
    amount: {
      quantity: "0,07",
      measure: "мг/дм³",
    },
  },
  {
    element: "Сульфати",
    amount: {
      quantity: "5,0 — 15,0",
      measure: "мг/дм³",
    },
  },
  {
    element: "Хлориди",
    amount: {
      quantity: "5,0 — 6,0",
      measure: "мг/дм³",
    },
  },
  {
    element: "Гідрокарбонат-іони",
    amount: {
      quantity: "100,0 — 105,0",
      measure: "мг/дм³",
    },
  },
];

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
            <Link to={PathConstants.FAST_ORDER} className={styles["hero__btn"]}>
              Замовити
            </Link>
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
            <p className={styles["card__text"]}>
              На{" "}
              <Link
                to={PathConstants.FAST_ORDER}
                className={styles["card__text-link"]}
              >
                сайті
              </Link>{" "}
              або за{" "}
              <a href="tel:+380689482864" className={styles["card__text-link"]}>
                телефоном
              </a>
            </p>
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
      <section id="aboutwater" className={styles.about}>
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
      <section id="composition" className={styles.composition}>
        <div className={`${styles.container} ${mobileSize ? styles.full : ""}`}>
          <h2 className={`${styles["composition__header"]}  ${styles.blue}`}>
            склад води
          </h2>
          <div className={styles["composition__info"]}>
            <h3 className={styles["composition__subheader"]}>склад води</h3>
            <div className={styles["composition__elements"]}>
              {composition.map((el: Composition, i: number) => (
                <div
                  className={styles["elements__container"]}
                  key={el.element + i}
                >
                  <span className={styles.element}>{el.element}</span>
                  <div className={styles.details}>
                    <span className={styles.quantity}>
                      {el.amount.quantity}
                    </span>
                    <span className={styles.measure}>{el.amount.measure}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles["composition__sertificate"]}>
            <a href="#">
              <img
                src={sertificate}
                alt="Sertificate"
                className={styles["composition__img"]}
              />
            </a>
            <p className={styles["composition__text"]}>
              Вода сертифікована Державною службою України з питань безпечності
              харчових продуктів та захисту споживачів.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
