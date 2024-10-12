import { Counter } from "./Counter";
import styles from "./TodoList.module.css";
import clipboardIcon from "../assets/clipboard.svg";

export function TodoList() {
  return (
    <div>
      <header className={styles.header}>
        <Counter title="Tarefas criadas" color="colorPrimaryLight" />
        <Counter title="Concluídas" color="colorSecondaryLight" />
      </header>
      <div className={styles.emptyList}>
        <img src={clipboardIcon} alt="ilustração de uma prancheta" />
        <div>Você ainda não tem tarefas cadastradas</div>
        <div>Crie tarefas e organize seus itens a fazer</div>
      </div>
    </div>
  );
}
