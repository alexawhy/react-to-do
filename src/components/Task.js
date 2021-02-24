import React from 'react';
import { calcDaysLeft } from '../utilities/date';

export const Task = (props) => {
  const { toggleDone, deleteTask } = props;
  const { details, due, done, id } = props.task;
  const daysLeft = calcDaysLeft(due);

  const handleToggle = () => {
    toggleDone(id);
  }

  const handleDeleteTask = () => {
    deleteTask(id);
  }

  return (
    <li onClick={handleToggle} className={done ? "task done" : "task"}>
      <button class="close"><i class="fas fa-times" onClick={handleDeleteTask}></i></button>
      <p>{details}</p>
      <p>{due}</p>
      <p>{ done ? ""
        : !done && daysLeft > 1 ? `${daysLeft} days left` 
        : !done && daysLeft === 1 ? "1 day left!"
        : !done && daysLeft === 0 ? "Due Today!!"
        : "It's too late :("}</p>
    </li>
  )
}