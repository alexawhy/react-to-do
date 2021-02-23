import React from 'react';
import { today, parseDayOfWeek } from '../utilities/date'; 

export const Greetings = (props) => {
  return (
    <div className="greetings">
      <p>Hello!</p>
      <p>Today is {parseDayOfWeek()} {today.getMonth() + 1}/{today.getDate()}.</p>
      <p>You have {props.count} unfinished {props.count > 1 ? "tasks" : "task"}.</p>
    </div>
  )
}
