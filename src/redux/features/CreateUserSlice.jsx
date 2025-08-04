import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "createUser",
  initialState: {
    value: JSON.parse(localStorage.getItem("users")) || [],
  },
  reducers: {
    create: (state, action) => {
      state.value = [...state.value, action.payload];
      localStorage.setItem("users", JSON.stringify(state.value));
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("users", JSON.stringify(state.value));
    },
  },
});

export const { create, deleteUser } = counterSlice.actions;

export default counterSlice.reducer;
