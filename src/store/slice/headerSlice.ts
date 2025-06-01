import { createSlice } from "@reduxjs/toolkit";
import { header } from "../../types/store.types";

const initialState: header = {
  pageName: "",
};

const HeaderSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    changeHeader: (state, action) => {
      state.pageName = action.payload;
    },
  },
});
export const { changeHeader } = HeaderSlice.actions;

export default HeaderSlice.reducer;
