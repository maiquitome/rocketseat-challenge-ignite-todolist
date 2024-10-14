import { PlusCircle } from "phosphor-react";
import styles from "./Form.module.css";
import { TodoListItemType } from "./TodoListItem";
import { CreateTodoItemProps } from "../App";

interface FormProps {
  todoListItemsState: TodoListItemType[];
  onCreateTodoItem: (props: CreateTodoItemProps) => void;
}

export function Form({ todoListItemsState, onCreateTodoItem }: FormProps) {
  const item = {
    id: todoListItemsState.length + 1,
    isChecked: false,
    description: "teste",
  };

  return (
    <form
      onSubmit={(event) => onCreateTodoItem({ event, item })}
      className={styles.form}
    >
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <button>
        Criar
        <PlusCircle size="1.1rem" weight="bold" />
      </button>
    </form>
  );
}
