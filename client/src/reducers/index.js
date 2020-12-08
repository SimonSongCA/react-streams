import { combineReducers } from "redux";
import authReducer from "./authReducer";

// import redux-form. Make an acronym of reducer as formReducer
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  // redux form
  form: formReducer,
});
