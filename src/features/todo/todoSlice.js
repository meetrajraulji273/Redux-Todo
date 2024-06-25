import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "123", task: "sleep", isDone: false, isEditing: false }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
        isEditing: false,
      };
      state.todos.push(newTodo);
      //   return {
      //     ...state,
      //     todos: [...state.todos, newTodo],
      //   };
    },
    markAsDone: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    editItem: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isEditing = !todo.isEditing;
      }
    },
    deleteItem: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTask: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.task = action.payload.task;
        todo.isEditing = false;
      }
    },
  },
});

export const { addTodo, markAsDone, editItem, deleteItem, editTask } =
  todoSlice.actions;
export default todoSlice.reducer;
