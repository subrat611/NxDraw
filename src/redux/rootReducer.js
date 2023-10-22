import menuReducer from "./slices/menuSlice";
import menuToolboxReducer from "./slices/menuToolboxSlice";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  menu: menuReducer,
  menuToolbox: menuToolboxReducer,
});

export default rootReducer;
