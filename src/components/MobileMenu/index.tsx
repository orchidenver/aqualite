import { useState } from "react";
import TransparentButton from "../TransparentButton";
import { useCartContext } from "../../context";
import { PathConstants } from "../../router/PageRoutes";
import styles from "./MobileMenu.module.css";
import { Anchors } from "../../typings";
import LinkComponent from "../LinkComponent";
import { Link, useLocation } from "react-router-dom";

export default function MobileMenu() {
  const { mobileMenuOpen, closeMobileMenu, updateBurgerMenuClass } =
    useCartContext();
  const [selectedSection, setSelectedSection] = useState<Anchors>(Anchors.Hero);
  const location = useLocation();
  const isCurrentPageAHomepage = location.pathname === "/";

  return (
    <aside
      className={`${styles.sidebar} ${
        mobileMenuOpen ? styles.active : `${styles.active} ${styles.inactive}`
      }`}
    >
      <nav className={styles["sidebar__nav"]} onClick={closeMobileMenu}>
        <ul className={styles["sidebar__menu"]}>
          <li className={styles["sidebar__item"]}>
            {isCurrentPageAHomepage ? (
              <LinkComponent
                section="магазин"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            ) : (
              <Link
                className={styles.link}
                to="/"
                onClick={updateBurgerMenuClass}
              >
                магазин
              </Link>
            )}
          </li>
          <li className={styles["sidebar__item"]}>
            {isCurrentPageAHomepage ? (
              <LinkComponent
                section="доставка"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            ) : (
              <Link
                className={styles.link}
                to="/"
                onClick={updateBurgerMenuClass}
              >
                доставка
              </Link>
            )}
          </li>
          <li className={styles["sidebar__item"]}>
            {isCurrentPageAHomepage ? (
              <LinkComponent
                section="про воду"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            ) : (
              <Link
                className={styles.link}
                to="/"
                onClick={updateBurgerMenuClass}
              >
                про воду
              </Link>
            )}
          </li>
          <li className={styles["sidebar__item"]}>
            {isCurrentPageAHomepage ? (
              <LinkComponent
                section="склад води"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            ) : (
              <Link
                className={styles.link}
                to="/"
                onClick={updateBurgerMenuClass}
              >
                склад води
              </Link>
            )}
          </li>
          <li className={styles["sidebar__item"]}>
            {isCurrentPageAHomepage ? (
              <LinkComponent
                section="контакти"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            ) : (
              <Link
                className={styles.link}
                to="/"
                onClick={updateBurgerMenuClass}
              >
                контакти
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <div
        className={styles["sidebar__btn"]}
        onClick={() => {
          if (mobileMenuOpen) {
            closeMobileMenu();
            updateBurgerMenuClass();
          }
        }}
      >
        <TransparentButton reference={PathConstants.FAST_ORDER}>
          Швидке замовлення
        </TransparentButton>
      </div>
    </aside>
  );
}
