import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/store.types";

const initialState: UserState = {
  userDetails: {
    email: "",
    name: "",
    role: "",
  },
  token: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userDetails = action.payload?.admin;
      state.token = action.payload?.token;
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const { addUser, clearUser } = UserSlice.actions;

export default UserSlice.reducer;
