import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  texts: JSON.parse(localStorage.getItem("texts")) || [],
};

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    addText: (state, action) => {
      state.texts.push(action.payload);
      localStorage.setItem("texts", JSON.stringify(state.texts));
    },
  },
});

export const { addText } = textSlice.actions;

export default textSlice.reducer;
