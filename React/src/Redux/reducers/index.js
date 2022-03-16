import Cars from "./Cars/Cars.js"
import Users from "./Users/Users.js"
import Companies from "./Companies/Companies.js"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    Cars,
    Companies,
    Users
});

export default rootReducer;