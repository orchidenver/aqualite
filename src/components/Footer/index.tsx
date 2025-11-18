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
          <a
            href="tel:+380689482864"
            className={styles["contacts__tel"]}
            target="_blank"
          >
            <img loading="lazy" src={phone} alt="Direct contact" />
            <span>068 948 28 64</span>
          </a>
          <a
            href="mailto:aqualite@gmai.com"
            className={styles["contacts__mail"]}
          >
            <img loading="lazy" src={mail} alt="Email contact" />
            <span>aqualitekrivoyrog@gmail.com</span>
          </a>
        </div>
        <p className={styles["contacts__text"]}>
          Пишіть нам у чатботи в телеграм та вайбер та приєднюйтесь до соц
          мереж.
        </p>
        <div className={styles["contacts__messengers"]}>
          <a href="https://t.me/Aqualite_ua" target="_blank">
            <img loading="lazy" src={tg} alt="Telegram" />
          </a>
          <a
            href="https://www.instagram.com/aqualite.ua?igsh=eDd6ZHdlM2h2bWJv"
            target="_blank"
          >
            <img loading="lazy" src={ig} alt="Instagram" />
          </a>
          <a href="https://viber.click/380689482864" target="_blank">
            <img loading="lazy" src={viber} alt="Viber" />
          </a>
          <a href="https://www.facebook.com/share/1DCbPrk5Wv" target="_blank">
            <img loading="lazy" src={fb} alt="Facebook" />
          </a>
        </div>
        <img
          loading="lazy"
          src={logo}
          alt="Logo"
          className={styles["contacts__logo"]}
        />
        <p className={styles["contacts__rights"]}>{`
        © Aqualite 2019 - ${new Date().getFullYear()}. All rights reserved.`}</p>
        <article>
          <a className={styles["contacts__rights"]} href="#" target="_blank">
            Designed by Mark Kushnerenko
          </a>
          <a
            className={styles["contacts__rights"]}
            href="https://www.linkedin.com/in/vslavyaninov/"
            target="_blank"
          >
            Developed by Vsevolod Slavianinov
          </a>
        </article>
      </div>
    </footer>
  );
}
