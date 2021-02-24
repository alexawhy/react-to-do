import React, { useState } from 'react';
import { generateId } from '../utilities/generateId';

export const AddTaskForm = (props) => {
  const [details, setDetails] = useState("");
  const [due, setDue] = useState("");

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  }

  const handleDueChange = (event) => {
    setDue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (details && due) {
      const newTask = {
        details,
        due,
        done: false,
        id: generateId()
      };
      console.log(newTask);
      props.addTask(newTask);
    }
    setDetails("");
    setDue("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        value={details}
        placeholder="Anything to do?"
        name="details"
        onChange={handleDetailsChange}
        />
      <div className="add-task-bottom">
        <input
          type="date"
          value={due}
          name="due"
          onChange={handleDueChange}
          />
        <input type="submit" disabled={!details || !due}/>
      </div>
    </form>
  )
}