import styles from "./Footer.module.css";
import phone from "../../assets/phone_icon.svg";
import mail from "../../assets/mail_icon.svg";
import tg from "../../assets/tg_icon.svg";
import ig from "../../assets/ig_icon.svg";
import viber from "../../assets/viber_icon.svg";
import fb from "../../assets/fb_icon.svg";
import logo from "../../assets/logo-blue.svg";

export default function Footer() {
  return (
    <footer id="contacts" className={styles.contacts}>
      <h3 className={styles["contacts__header"]}>контакти</h3>
      <div className={styles.container}>
        <div className={styles["contacts__main"]}>
          <a href="tel:+380689482864" className={styles["contacts__tel"]}>
            <img src={phone} alt="Direct contact" />
            <span>068 948 28 64</span>
          </a>
          <a
            href="mailto:aqualite@gmai.com"
            className={styles["contacts__mail"]}
          >
            <img src={mail} alt="Email contact" />
            <span>aqualite@gmai.com</span>
          </a>
        </div>
        <p className={styles["contacts__text"]}>
          Пишіть нам у чатботи в телеграм та вайбер та приєднюйтесь до соц
          мереж.
        </p>
        <div className={styles["contacts__messengers"]}>
          <a href="#">
            <img src={tg} alt="Telegram" />
          </a>
          <a href="#">
            <img src={ig} alt="Instagram" />
          </a>
          <a href="#">
            <img src={viber} alt="Viber" />
          </a>
          <a href="#">
            <img src={fb} alt="Facebook" />
          </a>
        </div>
        <img src={logo} alt="Logo" className={styles["contacts__logo"]} />
        <p className={styles["contacts__rights"]}>{`
        © Aqualite 2019 - ${new Date().getFullYear()}. All rights reserved.`}</p>
      </div>
    </footer>
  );
}
