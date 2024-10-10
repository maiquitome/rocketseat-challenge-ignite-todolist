import { PlusCircle } from "phosphor-react";
import styles from "./Form.module.css";

export function Form() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <button>
        Criar
        <PlusCircle size="1.1rem" weight="bold" />
      </button>
    </form>
  );
}
