/** @format */

import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../redux/app/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
