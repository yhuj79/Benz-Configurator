import { configureStore } from "@reduxjs/toolkit";
import optionsReducer from "../features/optionsSlice";

// Redux 스토어 구성
export const store = configureStore({
  reducer: {
    options: optionsReducer,
  },
});
