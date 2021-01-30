import './App.css';
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([ 
    {'id': 1, 'title': 'Title1' , 'description': 'Lorum Impsum' , 'reminder' : true},
    {'id': 2, 'title': 'Title2' , 'description': 'Lorum Impsum' , 'reminder' : true},
    {'id': 3, 'title': 'Title3' , 'description': 'Lorum Impsum' , 'reminder' : false},
 ])
 const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id));
 }

 const toggleReminder = (id) => {
  setTasks(tasks.map( task => task.id === id ? {...task,reminder:!task.reminder} : task) )
 }
  return (
    <div className="container">
      <Header title = {" Task Tracker "} />
      {
        tasks.length > 0 ? ( <Tasks tasks = { tasks } onDelete = {deleteTask} onToggle = {toggleReminder}  />) 
        : 'No Tasks'
      }
    </div>
  );
}

export default App;
