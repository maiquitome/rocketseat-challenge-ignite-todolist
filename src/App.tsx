import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <Form />
        <TodoList />
      </div>
    </>
  );
}
