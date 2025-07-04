import { useRef, useEffect, useState } from "react";
import { PathConstants } from "../../router/PageRoutes";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import useContentful from "../../hooks/useContentful";
import { Composition, ProductCardInterface } from "../../typings";
import { COMPOSITION } from "../../utils";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./MainPage.module.css";
import heroBig from "../../assets/hero1920.webp";
import heroMedium from "../../assets/hero1280.webp";
import heroSmall from "../../assets/hero800.webp";
import card1Medium from "../../assets/card11280.webp";
import card2Medium from "../../assets/card21280.webp";
import card3Medium from "../../assets/card31280.webp";
import card4Medium from "../../assets/card41280.webp";
import card1Small from "../../assets/card1800.webp";
import card2Small from "../../assets/card2800.webp";
import card3Small from "../../assets/card3800.webp";
import card4Small from "../../assets/card4800.webp";
import waterexample1Big from "../../assets/waterexample11920.webp";
import waterexample2Big from "../../assets/waterexample21920.webp";
import waterexample3Big from "../../assets/waterexample31920.webp";
import waterexample1Medium from "../../assets/waterexample11280.webp";
import waterexample2Medium from "../../assets/waterexample21280.webp";
import waterexample3Medium from "../../assets/waterexample31280.webp";
import waterexample1Small from "../../assets/waterexample1800.webp";
import waterexample2Small from "../../assets/waterexample2800.webp";
import waterexample3Small from "../../assets/waterexample3800.webp";
import sertificateMedium from "../../assets/sertificate1280.webp";
import sertificateSmall from "../../assets/sertificate1280.webp";
import arrowDown from "../../assets/arrowdown.svg";

export default function MainPage() {
  const element = useRef<HTMLElement>(null);
  const mobileSize = useMediaQuery("(max-width: 800px)");
  const hdSize = useMediaQuery("(min-width: 1921px)");
  const [products, setProducts] = useState<ProductCardInterface[]>();
  const { getProducts } = useContentful();

  console.log(products);

  useEffect(() => {
    getProducts().then((res) => setProducts(res as ProductCardInterface[]));
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Головна сторінка" />
        <title>Aqualite - Головна сторінка</title>
        <meta
          name="keywords"
          content="water, main, page, вода, головна, сторінка, aqualite, аквалайт"
        ></meta>
      </Helmet>
      <section id="hero" className={styles.hero}>
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles["hero__actions"]}>
            <h1 className={styles["hero__header"]}>
              доставка негазованої питної води
              <p className={styles.blue}>в кривому розі</p>
            </h1>
            <Link
              to={mobileSize ? PathConstants.FAST_ORDER : PathConstants.FORM}
              className={styles["hero__btn"]}
            >
              Замовити
            </Link>
          </div>
          <picture>
            <source media="(max-width: 800px)" srcSet={heroSmall} />
            <source media="(max-width: 1280px)" srcSet={heroMedium} />
            <source media="(max-width: 1920px)" srcSet={heroBig} />
            <img src={heroMedium} alt="Water" className={styles["hero__img"]} />
          </picture>
          {hdSize && (
            <div className={styles.arrow}>
              <img src={arrowDown} alt="Scroll down" />
            </div>
          )}
        </div>
      </section>
      <section id="shop" className={styles.shop}>
        <h2 className={`${styles["shop__header"]} ${styles.blue}`}>магазин</h2>
        <div className={`${styles.container} ${styles["cards-grid"]}`}>
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
            <picture>
              <source media="(max-width: 800px)" srcSet={card1Small} />
              <source media="(max-width: 1280px)" srcSet={card1Medium} />
              <img
                loading="lazy"
                src={card1Medium}
                alt="Order"
                className={styles["card__img"]}
              />
            </picture>

            <h2 className={styles["card__title"]}>Оформіть заявку</h2>
            <p className={styles["card__text"]}>
              На{" "}
              <Link
                to={mobileSize ? PathConstants.FAST_ORDER : PathConstants.FORM}
                className={styles["card__text-link"]}
              >
                сайті
              </Link>{" "}
              або за{" "}
              <a
                href="tel:+380689482864"
                className={styles["card__text-link"]}
                target="_blank"
              >
                телефоном
              </a>
            </p>
          </div>
          <div className={styles.card}>
            <picture>
              <source media="(max-width: 800px)" srcSet={card2Small} />
              <source media="(max-width: 1280px)" srcSet={card2Medium} />
              <img
                loading="lazy"
                src={card2Medium}
                alt="Contact"
                className={styles["card__img"]}
              />
            </picture>
            <h2 className={styles["card__title"]}>Обробляємо заявку</h2>
            <p className={styles["card__text"]}>
              Оператор передзвонить вам для уточнення зручного часу доставки
            </p>
          </div>
          <div className={styles.card}>
            <picture>
              <source media="(max-width: 800px)" srcSet={card3Small} />
              <source media="(max-width: 1280px)" srcSet={card3Medium} />
              <img
                loading="lazy"
                src={card3Medium}
                alt="Delivery"
                className={styles["card__img"]}
              />
            </picture>

            <h2 className={styles["card__title"]}>Доставляємо воду</h2>
            <p className={styles["card__text"]}>
              Найкратчайшим шляхом, по улюбленим дорогам та вулочкам, під
              приємну музику
            </p>
          </div>
          <div className={styles.card}>
            <picture>
              <source media="(max-width: 800px)" srcSet={card4Small} />
              <source media="(max-width: 1280px)" srcSet={card4Medium} />
              <img
                loading="lazy"
                src={card4Medium}
                alt="Water"
                className={styles["card__img"]}
              />
            </picture>

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
            <picture>
              <source media="(max-width: 800px)" srcSet={waterexample1Small} />
              <source
                media="(max-width: 1280px)"
                srcSet={waterexample1Medium}
              />
              <source media="(max-width: 1920px)" srcSet={waterexample1Big} />
              <img
                loading="lazy"
                src={waterexample1Big}
                alt="Water example"
                className={styles["about__img"]}
              />
            </picture>
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
            <picture>
              <source media="(max-width: 800px)" srcSet={waterexample2Small} />
              <source
                media="(max-width: 1280px)"
                srcSet={waterexample2Medium}
              />
              <source media="(max-width: 1920px)" srcSet={waterexample2Big} />
              <img
                loading="lazy"
                src={waterexample2Big}
                alt="Water example"
                className={styles["about__img"]}
              />
            </picture>

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
            <picture>
              <source media="(max-width: 800px)" srcSet={waterexample3Small} />
              <source
                media="(max-width: 1280px)"
                srcSet={waterexample3Medium}
              />
              <source media="(max-width: 1920px)" srcSet={waterexample3Big} />
              <img
                loading="lazy"
                src={waterexample3Big}
                alt="Water example"
                className={styles["about__img"]}
              />
            </picture>
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
            <a href="https://ibb.co/v1WKwsg" target="_blank">
              <picture>
                <source media="(max-width: 800px)" srcSet={sertificateSmall} />
                <source
                  media="(max-width: 1280px)"
                  srcSet={sertificateMedium}
                />
                <img
                  loading="lazy"
                  src={sertificateMedium}
                  alt="Sertificate"
                  className={styles["composition__img"]}
                />
              </picture>
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
