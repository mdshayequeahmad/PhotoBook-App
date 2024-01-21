import { configureStore } from '@reduxjs/toolkit';
import photoBookReducer from "./photoBookSlice";

export const store = configureStore({
  reducer: {
    photobook: photoBookReducer,
  },
})