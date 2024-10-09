import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="ilustração de um foguete e ao lado escrito todo" />
      </div>
    </header>
  );
}
