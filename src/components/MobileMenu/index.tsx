import { useState } from "react";
import TransparentButton from "../TransparentButton";
import { useCartContext } from "../../context";
import { PathConstants } from "../../router/PageRoutes";
import styles from "./MobileMenu.module.css";
import { Anchors } from "../../typings";
import LinkComponent from "../LinkComponent";

export default function MobileMenu() {
  const { mobileMenuOpen, closeMobileMenu } = useCartContext();
  const [selectedSection, setSelectedSection] = useState<Anchors>(Anchors.Hero);
  const temp = `${styles.active} ${styles.inactive}`;
  return (
    <aside
      className={`${styles.sidebar} ${
        mobileMenuOpen ? styles.active : `${styles.active} ${styles.inactive}`
      }`}
    >
      <nav className={styles["sidebar__nav"]} onClick={closeMobileMenu}>
        <ul className={styles["sidebar__menu"]}>
          <li className={styles["sidebar__item"]}>
            <LinkComponent
              section="магазин"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          </li>
          <li className={styles["sidebar__item"]}>
            <LinkComponent
              section="доставка"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          </li>
          <li className={styles["sidebar__item"]}>
            <LinkComponent
              section="про воду"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          </li>
          <li className={styles["sidebar__item"]}>
            <LinkComponent
              section="склад води"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          </li>
          <li className={styles["sidebar__item"]}>
            <LinkComponent
              section="контакти"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          </li>
        </ul>
      </nav>
      <div className={styles["sidebar__btn"]} onClick={closeMobileMenu}>
        <TransparentButton reference={PathConstants.FAST_ORDER}>
          Швидке замовлення
        </TransparentButton>
      </div>
    </aside>
  );
}
