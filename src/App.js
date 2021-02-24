import React, { useState, useEffect } from 'react';
import './App.css';
import { Greetings } from './components/Greetings';
import { AddTaskForm } from './components/AddTaskForm';
import { Task } from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  const addTask = (newTask) => {
    setTasks(prev => [newTask, ...prev]);
  }

  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  }

  const toggleDone = (taskId) => {
    setTasks(prev => prev.map(task => task.id === taskId ? {
      ...task,
      done: !task.done
    } : task))
  };

  useEffect(() => {
    setCount(() => tasks.filter(task => !task.done).length)  
  }, [tasks])

  return (
    <div className="App">
      <Greetings count={count}/>
      <AddTaskForm addTask={addTask} />
      <ul className="tasks">
        {tasks.map(task => (
          <Task 
            task={task} 
            key={task.id}
            toggleDone={toggleDone}
            deleteTask={deleteTask}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
