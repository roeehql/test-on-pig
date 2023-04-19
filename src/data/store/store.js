import { configureStore } from "@reduxjs/toolkit";
import profileListSlice from "./profileListSlice";

export const store = configureStore({
  reducer: {
    profileList: profileListSlice,
  },
});
