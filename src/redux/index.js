import { configureStore } from "@reduxjs/toolkit";
import createUser from './features/CreateUserSlice'

export default configureStore({
  reducer: {
    createUser,
  },
});
