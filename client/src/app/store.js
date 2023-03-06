import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "../features/weatherSlice";
import todoSlice from "../features/todoSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    todoList: todoSlice,
  },
});
