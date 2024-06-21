import { TaskEntity } from "./Task";
import styles from "./TaskCounter.module.css";

interface TaskCounterProps {
  tasks: Array<TaskEntity>;
}

export default function TaskCounter({ tasks }: TaskCounterProps) {
  return (
    <div className={styles.container}>
      <div className={styles.counterTitle}>
        <p>Tarefas criadas</p>
        <button>{tasks.length}</button>
      </div>
      <div className={styles.counterTitle}>
        <p>Concluídas</p> <button>1 de 4</button>
      </div>
    </div>
  );
}
