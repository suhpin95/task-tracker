import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [showTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: "Title1", description: "Lorum Impsum", reminder: true },
    { id: 2, title: "Title2", description: "Lorum Impsum", reminder: true },
    { id: 3, title: "Title3", description: "Lorum Impsum", reminder: false },
  ]);

  const addTask = (task) => {
    const id = uuidv4();
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showTask)}
        title={" Task Tracker "}
        showAdd={showTask}
      />
      {showTask && <AddTasks onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
