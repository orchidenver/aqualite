import styles from "./Counter.module.css";

export default function Counter() {
  return (
    <div className={styles["card__counter"]}>
      <button
        type="button"
        className={styles["card-amount-btn"]}
        disabled={true}
      >
        -
      </button>
      <h2 className={styles.amount}>1</h2>
      <button type="button" className={styles["card-amount-btn"]}>
        +
      </button>
    </div>
  );
}
