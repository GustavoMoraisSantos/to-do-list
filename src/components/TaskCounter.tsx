import { TaskEntity } from "./Task";
import styles from "./TaskCounter.module.css";

interface TaskCounterProps {
  tasks: Array<TaskEntity>;
}

export default function TaskCounter({ tasks }: TaskCounterProps) {
  let completedTasks = tasks.filter((task) => task.isCompleted === true);

  return (
    <div className={styles.container}>
      <div className={styles.counterTitle}>
        <p>Tarefas criadas</p>
        <button>{tasks.length}</button>
      </div>
      <div className={styles.counterTitle}>
        <p>Concluídas</p>{" "}
        <button>
          {completedTasks.length} de {tasks.length}
        </button>
      </div>
    </div>
  );
}
