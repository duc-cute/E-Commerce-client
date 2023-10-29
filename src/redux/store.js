/** @format */

import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../redux/app/appSlice";
import productReducer from "../redux/products/productsSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
  },
});
