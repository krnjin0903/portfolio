import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export default weatherSlice.reducer;
export const { getWeather } = weatherSlice.actions;
