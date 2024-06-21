import styles from "./NoContent.module.css";
import Clipboard from "../assets/Clipboard.svg";

export default function NoContent() {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="" />
      <h4>Você ainda não tem tarefas cadastradas</h4>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
