import styles from "./TaskForm.module.css";
import plus from "../assets/plus.svg";
import { FormEvent, useState } from "react";

interface Props {
  onCreateTask: (taskDescription: string) => void;
}

export default function TaskForm({ onCreateTask }: Props) {
  const [taskDescription, setTaskDescription] = useState("");

  function handleCreateTask(event: FormEvent) {
    event?.preventDefault();
    onCreateTask(taskDescription);
    setTaskDescription("");
  }

  return (
    <form className={styles.container}>
      <input
        name="taskDescription"
        placeholder="Adicione uma nova tarefa"
        className={styles.descriptionField}
        value={taskDescription}
        onChange={(description) => setTaskDescription(description.target.value)}
      />
      <button
        disabled={taskDescription.length === 0}
        onClick={handleCreateTask}
        className={styles.submitButton}
      >
        Criar
        <img src={plus} />
      </button>
    </form>
  );
}
