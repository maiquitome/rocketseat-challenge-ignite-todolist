import { Trash } from "phosphor-react";
import styles from "./TodoListItem.module.css";
import checkIcon from "../assets/check.svg";

export interface TodoListItemType {
  id: number;
  isChecked: boolean;
  description: string;
}

interface TodoListItemProps {
  item: TodoListItemType;
  onChangeCheckboxValue: (item: TodoListItemType) => void;
}

export function TodoListItem({
  item,
  onChangeCheckboxValue,
}: TodoListItemProps) {
  return (
    <div className={styles.todoListItemWrapper}>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <div className={styles.circle}>
            <img src={checkIcon} className={styles.checkIcon} />
          </div>
          <input
            type="checkbox"
            name="checkbox-item"
            id="checkbox-item"
            checked={item.isChecked}
            onChange={() => onChangeCheckboxValue(item)}
          />
        </div>
        <p>{item.description}</p>
      </div>
      <button className={styles.deleteButton}>
        <Trash size="1rem" />
      </button>
    </div>
  );
}
