import { configureStore } from "@reduxjs/toolkit";
import optionsReducer from "../features/optionsSlice";

export const store = configureStore({
  reducer: {
    options: optionsReducer,
  },
});
