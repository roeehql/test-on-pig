import { createSlice } from "@reduxjs/toolkit";
import { USERNAME } from "../browserStorage/keys.constant";
import { getStorage, setStorage } from "../browserStorage/localStorages";

const profileListSlice = createSlice({
  name: "profileList",
  initialState: [],
  reducers: {
    signUpUser: (state, action) => {
      state.push({ ...action.payload });
    },
    getUserList: (state) => {
      state = [];
      if (getStorage(USERNAME) !== undefined) {
        const parsedUserList = JSON.parse(getStorage(USERNAME));
        JSON.parse(parsedUserList).forEach((user) => {
          state.push({ ...user });
        });
      }
      return state;
    },
    saveUser: (state) => {
      setStorage(USERNAME, JSON.stringify(state));
    },
    removeUser: (state, action) => {
      state.value = state.filter((user) => user.name !== action.payload);
      return state;
    },
    editUser: (state, action) => {
      let index = state.findIndex((user) => user.name === action.payload.name);
      state.splice(index, 1, action.payload);
      return state;
    },
  },
});
export const selectProfileList = (state) => state.profileList;
export default profileListSlice.reducer;
export const { signUpUser, getUserList, saveUser, removeUser, editUser } =
  profileListSlice.actions;
