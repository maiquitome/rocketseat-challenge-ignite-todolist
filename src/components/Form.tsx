import { PlusCircle } from "phosphor-react";
import styles from "./Form.module.css";
import { CreateTodoItemProps } from "../App";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface FormProps {
  onCreateTodoItem: (props: CreateTodoItemProps) => void;
}

export function Form({ onCreateTodoItem }: FormProps) {
  const [descriptionOfNewItem, setDescriptionOfNewItem] = useState("");

  const item = {
    id: Date.now(),
    isChecked: false,
    description: descriptionOfNewItem,
  };

  function handleDescriptionOfNewItem(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity(""); // limpa a mensagem de campo obrigatório
    setDescriptionOfNewItem(event.target.value);
  }

  function handleInvalidDescriptionOfNewItem(
    event: InvalidEvent<HTMLInputElement>
  ) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function handleCreateTodoItem(event: FormEvent<HTMLFormElement>) {
    onCreateTodoItem({ event, item });
    setDescriptionOfNewItem("");
  }

  return (
    <form onSubmit={handleCreateTodoItem} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={descriptionOfNewItem}
        onChange={handleDescriptionOfNewItem}
        onInvalid={handleInvalidDescriptionOfNewItem}
        required
      />

      <button>
        Criar
        <PlusCircle size="1.1rem" weight="bold" />
      </button>
    </form>
  );
}
