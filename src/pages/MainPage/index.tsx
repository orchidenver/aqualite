import { useRef, useEffect, useState } from "react";
import { PathConstants } from "../../router/PageRoutes";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import useContentful from "../../hooks/useContentful";
import { Composition, ProductCardInterface } from "../../typings";
import { COMPOSITION } from "../../utils";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
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

export default function MainPage() {
  const element = useRef<HTMLElement>(null);
  const [visibleElement, setVisibleElement] = useState<boolean>(false);
  const mobileSize = useMediaQuery("(max-width: 800px)");
  const [products, setProducts] = useState<ProductCardInterface[]>();
  const { getProducts } = useContentful();

  useEffect(() => {
    getProducts().then((res) => setProducts(res as ProductCardInterface[]));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisibleElement(entry.isIntersecting);
    });

    console.log(visibleElement);

    observer.observe(element.current as Element);
  }, []);

  return (
    <>
      <section id="hero" className={styles.hero}>
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles["hero__actions"]}>
            <h1 className={styles["hero__header"]}>
              доставка негазованої питної води
              <p className={styles.blue}>в кривому розі</p>
            </h1>
            <Link to={PathConstants.FORM} className={styles["hero__btn"]}>
              Замовити
            </Link>
          </div>
          <img src={hero} alt="Water" className={styles["hero__img"]} />
        </div>
      </section>
      <section id="shop" className={styles.shop}>
        <h2 className={`${styles["shop__header"]} ${styles.blue}`}>магазин</h2>
        <div className={`${styles.container} ${styles.row}`}>
          {products?.map((product: ProductCardInterface) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              img={product.img}
              imgLabel={product.imgLabel}
              price={product.price}
            />
          ))}
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
                to={PathConstants.FORM}
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
      <section id="aboutwater" className={styles.about} ref={element}>
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
              {COMPOSITION.map((el: Composition, i: number) => (
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
    </>
  );
}
