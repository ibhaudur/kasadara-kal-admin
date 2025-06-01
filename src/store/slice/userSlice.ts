import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/store.types";

const initialState: UserState = {
  userDetails: {
    fullName: "",
    role: "",
     permission: []
  },
  csrfToken:''
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userDetails = action.payload;
    },
    addToken: (state, action) => {
      state.csrfToken = action.payload;
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const { addUser, clearUser } = UserSlice.actions;

export default UserSlice.reducer;
