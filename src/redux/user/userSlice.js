/** @format */

import { createSlice } from "@reduxjs/toolkit";
export const usersSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userData: null,
    token: null,
  },
  reducers: {
    register: (state, action) => {
      console.log("action", action);
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userData = action.payload.userData;
      state.token = action.payload.token;
    },
  },
});
export const { register } = usersSlice.actions;

export default usersSlice.reducer;
