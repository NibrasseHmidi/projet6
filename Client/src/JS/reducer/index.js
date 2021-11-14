import { combineReducers } from "redux";
import authReducer from "./authReducer";
import annonceReducer from "./annonceReducer";

const rootReducer = combineReducers({
  authReducer,annonceReducer
});

export default rootReducer;