import { createSlice } from "@reduxjs/toolkit";

import { StrokeColors } from "@/utils";

const initialState = {
  strokeColors: StrokeColors,
  activeStrokeColor: "#fff-0",
  eraserSize: "10",
};

const menuToolboxSlice = createSlice({
  name: "menuToolbox",
  initialState,
  reducers: {
    setActiveStrokeColor: (state, { payload }) => {
      state.activeStrokeColor = payload.data;
    },
    setEraserSize: (state, { payload }) => {
      state.eraserSize = payload.data;
    },
  },
});

export const { setActiveStrokeColor, setEraserSize } = menuToolboxSlice.actions;
export default menuToolboxSlice.reducer;
