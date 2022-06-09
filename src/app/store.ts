import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../features/covid/covidSlice";

export const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
