import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import NoContent from "./components/NoContent";
import Task, { TaskEntity } from "./components/Task";
import TaskCounter from "./components/TaskCounter";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState<Array<TaskEntity>>([]);

  function handleCreateTask(task: TaskEntity) {
    setTasks([...tasks, task]);
  }
  function handleDeleteTask(id: string) {
    const newTaskList = tasks.filter((t) => t.id !== id);
    setTasks(newTaskList);
  }

  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <div>
          <TaskForm onCreateTask={handleCreateTask} />
          <TaskCounter />
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return <Task task={task} onDeleteTask={handleDeleteTask} />;
            })
          ) : (
            <NoContent />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
