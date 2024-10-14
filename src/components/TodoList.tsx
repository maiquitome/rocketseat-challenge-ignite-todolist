import { Counter } from "./Counter";
import styles from "./TodoList.module.css";
import clipboardIcon from "../assets/clipboard.svg";
import { TodoListItem, TodoListItemType } from "./TodoListItem";
import { useState } from "react";

const todoListItems: TodoListItemType[] = [
  {
    id: 1,
    isChecked: false,
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    id: 2,
    isChecked: true,
    description: "Descrição do item 2",
  },
];

// const todoListItems: TodoListItemType[] = [];

export function TodoList() {
  const [todoListItemsState, setTodoListItems] = useState(todoListItems);

  function changeCheckboxValue({ id }: TodoListItemType) {
    const newTodoListItemsState = todoListItemsState.map((item) => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });

    setTodoListItems(newTodoListItemsState);

    console.log(todoListItemsState);
  }

  function deleteTodoListItem({ id }: TodoListItemType) {
    const newTodoListItemsState = todoListItemsState.filter(
      (item) => item.id !== id
    );

    setTodoListItems(newTodoListItemsState);
  }

  const areThereAnyItemsOnTheTodoList = todoListItems.length > 0;

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
            onChangeCheckboxValue={changeCheckboxValue}
            onDeleteTodoListItem={deleteTodoListItem}
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
