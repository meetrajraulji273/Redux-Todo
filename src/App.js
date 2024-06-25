import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import EditTodoForm from "./components/EditTodoForm";

const App = () => {
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  console.log("Meetraj");

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!!</h1>
      <TodoForm />
      <ul>
        {todos.map((item, key) => {
          return item.isEditing ? (
            <EditTodoForm item={item} />
          ) : (
            <Todo item={item} />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
