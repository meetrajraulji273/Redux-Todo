import React, { useState } from 'react'
import { addTodo } from "../features/todo/todoSlice";
import "../App.css";
import { useDispatch } from "react-redux";

const TodoForm = () => {
    const dispatch = useDispatch();
    let [value, setValue] = useState("");
  return (
    <>
    <form
        className="TodoForm"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(value));
          setValue('')
        }}
      >
        <input
          className="todo-input"
          type="text"
          placeholder="What is the task today?"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />

        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form></>
  )
}

export default TodoForm