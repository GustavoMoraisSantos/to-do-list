import styles from "./Task.module.css";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import { Trash } from "@phosphor-icons/react";

export interface TaskEntity {
  id: string;
  content: string;
  isCompleted?: boolean;
}

interface TaskProps {
  task: TaskEntity;
  onDeleteTask: (id: string) => void;
}

export default function Task({ task, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskContent}>
        <Checkbox
          color="primary-o"
          className={styles.teste}
          name="checkbox"
          shape="round"
        ></Checkbox>
        <label
          className={task?.isCompleted ? styles.taskDone : ""}
          htmlFor="checkbox"
        >
          {task?.content}
        </label>
        <button onClick={handleDeleteTask} title="Deletar tarefa">
          <Trash size={20} className={styles.trashIcon} />
        </button>
      </div>
    </div>
  );
}
