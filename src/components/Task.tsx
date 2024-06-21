import styles from "./Task.module.css";
import { Checkbox } from "pretty-checkbox-react";

import "@djthoms/pretty-checkbox";
import { Trash } from "@phosphor-icons/react";

interface Props {
  content: string;
  isCompleted?: boolean;
}

export default function Task({ content, isCompleted }: Props) {
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
          className={isCompleted ? styles.taskDone : ""}
          htmlFor="checkbox"
        >
          {content}
        </label>
        <button title="Deletar comentário">
          <Trash size={20} className={styles.trashIcon} />
        </button>
      </div>
    </div>
  );
}
