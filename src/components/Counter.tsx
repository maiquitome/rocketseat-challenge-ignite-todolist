import styles from "./Counter.module.css";

interface CounterProps {
  title: string;
  color: "colorPrimaryLight" | "colorSecondaryLight";
}

export function Counter({ title, color }: CounterProps) {
  return (
    <div className={styles.counterWrapper}>
      <span className={`${styles.title} ${styles[color]}`}>{title}</span>
      <span className={styles.counterNumber}>0</span>
    </div>
  );
}
