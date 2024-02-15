import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import reservSlice from "./reservslice/reservslice"

export const store = configureStore({
  reducer: {
    user: userSlice,
    reserve:reservSlice
  },
});
