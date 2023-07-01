import { configureStore } from "@reduxjs/toolkit";
import profileListSlice from "./profileListSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    profileList: profileListSlice,
  },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
