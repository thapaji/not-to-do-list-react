import React from "react";
import { useState } from "react";

export const Form = () => {
  //local state
const [form,setForm] = useState({});

  //function that receives the form data and updates to the local state
  const handleOnChange = (e) =>{
    const {name,value} = e.target;
    setForm({
      ...form,
      [name] : value
    });
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault();
  }
  
  return (
    <form
      onSubmit="handleOnSubmit(this)"
      className="mt-5 border p-5 rounded shadow-lg bg-transparent"
    >
      <div className="row g-2">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Coding.."
            aria-label="First name"
            name="task"
            required
            //call the function on onchange event of the input field
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            min="1"
            className="form-control"
            placeholder="23"
            aria-label="Last name"
            name="hr"
            required
            //call the function on onchange event of the input field
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-3">
          <div className="d-grid">
            <button className="btn btn-primary">Add Task</button>
          </div>
        </div>
      </div>
    </form>
  );
};
