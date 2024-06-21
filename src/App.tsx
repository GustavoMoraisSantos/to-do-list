import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import NoContent from "./components/NoContent";
import Task from "./components/Task";
import TaskCounter from "./components/TaskCounter";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState<Array<string>>([]);

  console.log("tasks", tasks);

  function handleCreateTask(task: string) {
    setTasks([...tasks, task]);
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
              return <Task content={task} />;
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
