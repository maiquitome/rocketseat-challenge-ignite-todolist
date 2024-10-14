import { Counter } from "./Counter";
import styles from "./TodoList.module.css";
import clipboardIcon from "../assets/clipboard.svg";
import { TodoListItem, TodoListItemType } from "./TodoListItem";

// const todoListItems: TodoListItemType[] = [];

interface TodoListProps {
  onChangeCheckboxValue: (item: TodoListItemType) => void;
  onDeleteTodoListItem: (item: TodoListItemType) => void;
  todoListItemsState: TodoListItemType[];
}

export function TodoList({
  onChangeCheckboxValue,
  onDeleteTodoListItem,
  todoListItemsState,
}: TodoListProps) {
  const areThereAnyItemsOnTheTodoList = todoListItemsState.length > 0;

  return (
    <div>
      <header className={styles.header}>
        <Counter title="Tarefas criadas" color="colorPrimaryLight" />
        <Counter title="Concluídas" color="colorSecondaryLight" />
      </header>
      {areThereAnyItemsOnTheTodoList ? (
        todoListItemsState.map((item) => (
          <TodoListItem
            key={item.id}
            item={item}
            onChangeCheckboxValue={onChangeCheckboxValue}
            onDeleteTodoListItem={onDeleteTodoListItem}
          />
        ))
      ) : (
        <div className={styles.emptyList}>
          <img src={clipboardIcon} alt="ilustração de uma prancheta" />
          <div>Você ainda não tem tarefas cadastradas</div>
          <div>Crie tarefas e organize seus itens a fazer</div>
        </div>
      )}
    </div>
  );
}
