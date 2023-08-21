import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles["lds-heart"]}>
      <div></div>
    </div>
  );
}
