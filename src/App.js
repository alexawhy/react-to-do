import React, { useState } from 'react';
import './App.css';
import { AddTaskForm } from './components/AddTaskForm';
import { Greetings } from './components/Greetings';

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  }

  return (
    <div className="App">
      <Greetings count={count}/>
      <AddTaskForm addTask={addTask} />
    </div>
  );
}

export default App;
