const { configureStore } = require("@reduxjs/toolkit");

import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});
