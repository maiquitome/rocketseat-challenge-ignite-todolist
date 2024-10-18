import styles from "./Counter.module.css";

interface CounterProps {
  total: number;
  completed: number | null;
  title: string;
  color: "colorPrimaryLight" | "colorSecondaryLight";
}

export function Counter({ total, completed, title, color }: CounterProps) {
  const counterText =
    completed !== null ? `${completed} de ${total}` : total.toString();

  return (
    <div className={styles.counterWrapper}>
      <span className={`${styles.title} ${styles[color]}`}>{title}</span>
      <span className={styles.counterNumber}>{counterText}</span>
    </div>
  );
}
