import { combineReducers } from "redux";
import dataReducer from "../slices/dataSlice";
import uiSlice from "../slices/uiSlice";

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiSlice,
});

export default rootReducer;
