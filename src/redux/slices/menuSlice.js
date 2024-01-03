const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  selectedMenuTool: null,
  isDownload: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setSelectedMenuTool: (state, { payload }) => {
      state.selectedMenuTool = payload.data;
    },
    setIsDownload: (state, { payload }) => {
      state.isDownload = payload.data;
    },
  },
});

export const { setSelectedMenuTool, setIsDownload } = menuSlice.actions;
export default menuSlice.reducer;
