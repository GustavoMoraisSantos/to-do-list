import styles from "./Header.module.css";
import Logo from "../assets/Logo.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <img src={Logo} />
    </div>
  );
}
