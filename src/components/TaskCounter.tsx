import styles from "./TaskCounter.module.css";

export default function TaskCounter() {
  return (
    <div className={styles.container}>
      <div className={styles.counterTitle}>
        <p>Tarefas criadas</p>
        <button>0</button>
      </div>
      <div className={styles.counterTitle}>
        <p>Concluídas</p> <button>1 de 4</button>
      </div>
    </div>
  );
}
