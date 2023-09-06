import { NavLink } from "react-router-dom";
import { PathConstants } from "../../router/PageRoutes";
import Footer from "../../components/Footer";
import styles from "./MainPage.module.css";
import hero from "../../assets/hero.svg";

export interface IAppProps {}

export default function MainPage(props: IAppProps) {
  return (
    <>
      <section id="hero" className={styles.hero}>
        <div className={`${styles.container} ${styles.row}`}>
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
      <Footer />
    </>
  );
}
