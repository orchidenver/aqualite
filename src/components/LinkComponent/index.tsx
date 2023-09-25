import { LinkComponentInterface, Anchors } from "../../typings";
import { useCartContext } from "../../context";
import { useTranslationFromUkrToEng } from "../../hooks/useTranslationFromUkrToEng";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./LinkComponent.module.css";

export default function LinkComponent({
  section,
  selectedSection,
  setSelectedSection,
}: LinkComponentInterface) {
  const { mobileMenuOpen, closeMobileMenu, updateBurgerMenuClass } =
    useCartContext();
  const mobileSize = useMediaQuery("(max-width: 800px)");
  const lowercaseSection = useTranslationFromUkrToEng(section) as Anchors;
  return (
    <AnchorLink
      offset={mobileSize ? 50 : 100}
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
