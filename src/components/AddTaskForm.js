import React, { useState } from 'react';

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
        due
      };
      console.log(newTask);
      props.addTask(newTask);
    }
    setDetails("");
    setDue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={details}
        placeholder="Anything to do?"
        name="details"
        onChange={handleDetailsChange}
        />
      <input
        type="date"
        value={due}
        name="due"
        onChange={handleDueChange}
        />
      <input type="submit" disabled={!details || !due}/>
    </form>
  )
}