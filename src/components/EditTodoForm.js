import { useEffect, useState } from "react";
import { editTask } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function EditTodoForm({ item }) {
  const dispatch = useDispatch();

  let [value, setValue] = useState(item.task);

  let handleSubmit = (e) => {
    e.preventDefault();
    const editData = { id: item.id, task: value };
    dispatch(editTask(editData));
    console.log("Task updated:", editData);
  }

  return (
    <>
      <form
        className="TodoForm"
        onSubmit={handleSubmit}
      >
        <input
          className="todo-input"
          type="text"
          placeholder="Update Task"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />

        <button type="submit" className="todo-btn">
          Update Task
        </button>
      </form>
    </>
  );
}
