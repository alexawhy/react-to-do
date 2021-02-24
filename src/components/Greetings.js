import React from 'react';
import { today, parseDayOfWeek } from '../utilities/date'; 

export const Greetings = (props) => {
  return (
    <div className="greetings">
      <h1>Hello!</h1>
      <p>Today is {parseDayOfWeek()} {today.getMonth() + 1}/{today.getDate()}.</p>
      <p>You have {props.count} unfinished {props.count > 1 ? "tasks" : "task"}.</p>
      <p id="prompt">Click each task to mark it as done.</p>
    </div>
  )
}
