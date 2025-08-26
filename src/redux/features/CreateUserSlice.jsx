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
    updateUser: (state, action) => {
      state.value = state.value.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
      localStorage.setItem("users", JSON.stringify(state.value));
    },
  },
});

export const { create, deleteUser } = counterSlice.actions;

export default counterSlice.reducer;
