import { useState } from "react";
import LinkComponent from "../LinkComponent";
import { Anchors } from "../../typings";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo-blue.svg";
import phone from "../../assets/phone_icon.svg";
import basket from "../../assets/basket_icon.svg";
import burgermenu from "../../assets/burgermenu.svg";

export interface IAppProps {}

export default function Navbar(props: IAppProps) {
  const [selectedSection, setSelectedSection] = useState<Anchors>(Anchors.Hero);
  const location = useLocation();

  return (
    <header className={`${location.pathname === "/form" && styles.white}`}>
      <div className={`${styles.container} ${styles.row}`}>
        <a className={styles.menu}>
          <img src={burgermenu} alt="Mobile menu" />
        </a>
        <Link to="/" className={styles["header__logo"]}>
          <img src={logo} alt="Logo" className={styles["header__img"]} />
        </Link>
        <nav className={`header__nav ${styles.nav}`}>
          <ul
            className={`${styles["nav__list"]} ${styles["nav__list--primary"]}`}
          >
            <li className="nav__item">
              <LinkComponent
                section="магазин"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            </li>
            <li className="nav__item">
              <LinkComponent
                section="доставка"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            </li>
            <li className="nav__item">
              <LinkComponent
                section="про воду"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            </li>
            <li className="nav__item">
              <LinkComponent
                section="склад води"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            </li>
            <li className="nav__item">
              <LinkComponent
                section="контакти"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            </li>
          </ul>
          <ul
            className={`${styles["nav__list"]} ${styles["nav__list--secondary"]}`}
          >
            <li className={styles["nav__item"]}>
              <a href="tel:+380689482864">
                <img src={phone} alt="Direct contact" />
                <span>068 948 28 64</span>
              </a>
            </li>
            <li className={`${styles["nav__item"]} ${styles.basket}`}>
              <img src={basket} alt="Basket" />
              <span className={styles.quantity}>0</span>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <img
            src={phone}
            alt="Direct contact"
            className={styles["phone-img"]}
          />
          <div className={`${styles["nav__item"]} ${styles.basket}`}>
            <img src={basket} alt="Basket" className={styles["basket-img"]} />
            <span className={styles.quantity}>0</span>
          </div>
        </div>
      </div>
    </header>
  );
}
