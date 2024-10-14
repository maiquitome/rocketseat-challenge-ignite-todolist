import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { TodoListItemType } from "./components/TodoListItem";
import { FormEvent, useState } from "react";

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

export interface CreateTodoItemProps {
  event: FormEvent;
  item: TodoListItemType;
}

export function App() {
  const [todoListItemsState, setTodoListItems] = useState(todoListItems);

  function createTodoItem({ event, item }: CreateTodoItemProps) {
    event.preventDefault();

    const newTodoListItemsState = [...todoListItemsState, item];

    setTodoListItems(newTodoListItemsState);
  }

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

  return (
    <>
      <Header />

      <div className={styles.container}>
        <main>
          <Form
            todoListItemsState={todoListItemsState}
            onCreateTodoItem={createTodoItem}
          />
          <TodoList
            onChangeCheckboxValue={changeCheckboxValue}
            onDeleteTodoListItem={deleteTodoListItem}
            todoListItemsState={todoListItemsState}
          />
        </main>
      </div>
    </>
  );
}
