import { useEffect, useState } from "react";
import TransparentButton from "../../components/TransparentButton";
import useContentful from "../../hooks/useContentful";
import ProductCard from "../../components/ProductCard";
import styles from "./FastOrder.module.css";
import logo from "../../assets/logo-white.svg";
import phone from "../../assets/phone_icon.svg";
import { ProductCardInterface } from "../../typings";

export default function FastOrder() {
  const [product, setProduct] = useState<ProductCardInterface>();
  const { getProducts } = useContentful();

  useEffect(() => {
    getProducts().then((res) => {
      const singleProduct = res?.find((res) => res.imgLabel === "pomp.webp");
      setProduct(singleProduct as ProductCardInterface);
    });
  }, []);

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
        <ProductCard
          key={product?.name}
          name={product?.name}
          description={product?.description}
          img={product?.img}
          imgLabel={product?.imgLabel}
          price={product?.price}
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
