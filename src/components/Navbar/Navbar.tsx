import { useState, useEffect } from "react";
import LinkComponent from "../LinkComponent";
import MobileMenu from "../MobileMenu";
import { Anchors } from "../../typings";
import { PathConstants } from "../../router/PageRoutes";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useCartContext } from "../../context";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo-blue.svg";
import phone from "../../assets/phone_icon.svg";
import basket from "../../assets/basket_icon.svg";

export default function Navbar() {
  const [selectedSection, setSelectedSection] = useState<Anchors>(Anchors.Hero);
  const [animation, setAnimation] = useState<string>(styles.quantity);
  const {
    cartTotal: { totalItems },
    mobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    updateBurgerMenuClass,
    burgerMenuClass,
  } = useCartContext();
  const location = useLocation();
  const mobileSize = useMediaQuery("(max-width: 800px)");
  const doesBackgroundNeedToBeWhite =
    location.pathname === "/form" ||
    location.pathname === "/cart" ||
    location.pathname === "/feedback";

  useEffect(() => {
    setAnimation(`${styles.quantity} ${styles.animated}`);
    const interval = setInterval(() => {
      setAnimation(`${styles.quantity}`);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [totalItems]);

  return (
    <header className={`${doesBackgroundNeedToBeWhite && styles.white}`}>
      <div className={`${styles.container} ${styles.row}`}>
        {mobileSize && (
          <div
            className={styles["burger-menu"]}
            onClick={() => {
              updateBurgerMenuClass();
              toggleMobileMenu();
            }}
          >
            <div className={burgerMenuClass}></div>
            <div className={burgerMenuClass}></div>
            <div className={burgerMenuClass}></div>
          </div>
        )}

        <Link
          to="/"
          className={styles["header__logo"]}
          onClick={() => {
            if (mobileMenuOpen) {
              closeMobileMenu();
              updateBurgerMenuClass();
            }
          }}
        >
          <img
            loading="lazy"
            src={logo}
            alt="Logo"
            className={styles["header__img"]}
          />
        </Link>
        <nav className={`header__nav ${styles.nav}`}>
          <ul
            className={`${styles["nav__list"]} ${styles["nav__list--primary"]}`}
          >
            <li
              className="nav__item"
              onClick={() => {
                if (mobileMenuOpen) {
                  closeMobileMenu();
                  updateBurgerMenuClass();
                }
              }}
            >
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
              <a href="tel:+380689482864" target="_blank">
                <img loading="lazy" src={phone} alt="Direct contact" />
                <span>068 948 28 64</span>
              </a>
            </li>
            <li className={`${styles["nav__item"]} ${styles.basket}`}>
              <Link to={PathConstants.CART}>
                <img loading="lazy" src={basket} alt="Basket" />
                <span className={animation}>{totalItems}</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={styles.actions}
          onClick={() => {
            if (mobileMenuOpen) {
              closeMobileMenu();
              updateBurgerMenuClass();
            }
          }}
        >
          <a href="tel:+380689482864" target="_blank">
            <img
              loading="lazy"
              src={phone}
              alt="Direct contact"
              className={styles["phone-img"]}
            />
          </a>
          <div className={`${styles["nav__item"]} ${styles.basket}`}>
            <Link to={PathConstants.CART}>
              <img
                loading="lazy"
                src={basket}
                alt="Basket"
                className={styles["basket-img"]}
              />
              <span className={animation}>{totalItems}</span>
            </Link>
          </div>
        </div>
      </div>
      {mobileSize && <MobileMenu />}
    </header>
  );
}
