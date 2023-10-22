const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  selectedMenuTool: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setSelectedMenuTool: (state, { payload }) => {
      state.selectedMenuTool = payload.data;
    },
  },
});

export const { setSelectedMenuTool } = menuSlice.actions;
export default menuSlice.reducer;
