import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counterSlice"

export default configureStore({
  reducer: {
    counter,
    // wishlist,
    // cart
  },
});
