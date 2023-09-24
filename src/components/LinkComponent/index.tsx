import { LinkComponentInterface, Anchors } from "../../typings";
import { useCartContext } from "../../context";
import { useTranslationFromUkrtoEng } from "../../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./LinkComponent.module.css";

export default function LinkComponent({
  section,
  selectedSection,
  setSelectedSection,
}: LinkComponentInterface) {
  const { mobileMenuOpen, closeMobileMenu, updateBurgerMenuClass } =
    useCartContext();
  const lowercaseSection = useTranslationFromUkrtoEng(section) as Anchors;
  return (
    <AnchorLink
      className={`${
        lowercaseSection === selectedSection
          ? `${styles["link"]} ${styles["active-link"]}`
          : `${styles["link"]}`
      }`}
      href={`#${lowercaseSection}`}
      onClick={() => {
        setSelectedSection(lowercaseSection);

        if (mobileMenuOpen) {
          closeMobileMenu();
          updateBurgerMenuClass();
        }
      }}
    >
      {section}
    </AnchorLink>
  );
}
