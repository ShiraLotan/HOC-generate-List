import { combineReducers } from "redux";
import usersReducers from "./Users/usersReducers";
import reviewersReducer from "./Reviewers/reviewersReducer";

export default combineReducers({ usersReducers, reviewersReducer });
