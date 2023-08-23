import styles from "./Preloader.module.css";
import logo from "../../assets/logo-white.svg";

export interface IAppProps {}

export default function Preloader(props: IAppProps) {
  return (
    <aside className={styles.preloader}>
      <img
        src={logo}
        alt="logo loading site"
        className={styles["preloader__img"]}
      />
    </aside>
  );
}
