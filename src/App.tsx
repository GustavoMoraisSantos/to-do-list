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
  function handleChangeTaskStatus(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <div>
          <TaskForm onCreateTask={handleCreateTask} />
          <TaskCounter tasks={tasks} />
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onDeleteTask={handleDeleteTask}
                  onStatusChange={handleChangeTaskStatus}
                />
              );
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
