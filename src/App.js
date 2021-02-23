import React, { useState } from 'react';
import './App.css';
import { Greetings } from './components/Greetings';
import { AddTaskForm } from './components/AddTaskForm';
import { Task } from './components/Task'

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks(prev => [newTask, ...prev]);
    setCount(prev => prev + 1);
  }

  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
    setCount(prev => prev - 1);
  }

  const toggleDone = (taskId) => {
    
  }

  return (
    <div className="App">
      <Greetings count={count}/>
      <AddTaskForm addTask={addTask} />
      <ul className="tasks">
        {tasks.map(task => (
          <Task 
            task={task} 
            key={task.id}
            deleteTask={deleteTask}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
