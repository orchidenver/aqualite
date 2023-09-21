import { useEffect, useState } from "react";
import TransparentButton from "../../components/TransparentButton";
import useContentful from "../../hooks/useContentful";
import ProductCard from "../../components/ProductCard";
import styles from "./FastOrder.module.css";
import logo from "../../assets/logo-white.svg";
import phone from "../../assets/phone_icon.svg";
import { ProductCardInterface } from "../../typings";
import { fastOrderBackupData } from "../../utils";

export default function FastOrder() {
  const [product, setProduct] =
    useState<ProductCardInterface>(fastOrderBackupData);
  const { getProducts } = useContentful();

  useEffect(() => {
    getProducts().then((res) => {
      const singleProduct = res.find(
        (res) => res.imgLabel === "bulb.webp"
      ) as ProductCardInterface;

      setProduct(singleProduct);
    });
  }, []);

  return (
    <section className={styles["fast-order"]}>
      <nav className={styles.nav}>
        <img loading="lazy" src={logo} alt="Logo" />
        <a href="tel:068 948 28 64" target="_blank">
          <img loading="lazy" src={phone} alt="Phone" className="tel" />
        </a>
      </nav>
      <h3 className={styles["fast-order__header"]}>швидке замовлення</h3>

      <div className={styles["fast-order__content"]}>
        <ProductCard
          key={product.name}
          name={product.name}
          description={product.description}
          img={product.img}
          imgLabel={product.imgLabel}
          price={product.price}
        />
        <div className={styles.action}>
          <TransparentButton reference="/" color="#FFF">
            Перейти на сайт
          </TransparentButton>
        </div>
      </div>
    </section>
  );
}
