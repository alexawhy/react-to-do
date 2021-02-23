import React from 'react';
import { calcDaysLeft } from '../utilities/date';

export const Task = (props) => {
  const { deleteTask } = props;
  const { details, due, done, id } = props.task;
  const daysLeft = calcDaysLeft(due);

  const handleToggle = () => {
    toggleDone(id);
  }

  const handleDeleteTask = () => {
    deleteTask(id);
  }

  return (
    <li>
      <button onClick={toggleDone}>toggle</button>
      <p>{details}</p>
      <p>{due}</p>
      <p>{ !done && daysLeft > 1 ? `${daysLeft} days left` 
        : daysLeft === 1 ? "1 day left!"
        : daysLeft === 0 ? "Due Today!!"
        : "It's too late :("}</p>
      <button onClick={handleDeleteTask}>Delete Task</button>
    </li>
  )
}