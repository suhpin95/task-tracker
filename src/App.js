import './App.css';
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([ 
    {'id': 1, 'title': 'Title1' , 'description': 'Lorum Impsum'},
    {'id': 2, 'title': 'Title2' , 'description': 'Lorum Impsum'},
    {'id': 3, 'title': 'Title3' , 'description': 'Lorum Impsum'},
 ])
 const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id));
 }
  return (
    <div className="App">
      <Header title = {" Task Tracker "} />
      <Tasks tasks = { tasks } onDelete = {deleteTask}  />
    </div>
  );
}

export default App;
