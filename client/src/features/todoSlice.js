import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: "",
  listName: "",
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    setListName: (state, action) => {
      state.listName = action.payload;
    },
    setTodoItems: (state, action) => {
      state.todoList = action.payload;
    },
    addTodoItem: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    updateItem: (state, action) => {
      state.todoList[action.payload.index].completed =
        action.payload.data.completed;
    },
    deleteTodoItem: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo._id !== action.payload.id
      );
    },
    resetTodoList: (state) => {
      state.todoList = "";
      state.listName = "";
    },
  },
});

export default todoSlice.reducer;
export const {
  setListName,
  setTodoItems,
  addTodoItem,
  updateItem,
  deleteTodoItem,
  resetTodoList,
} = todoSlice.actions;
