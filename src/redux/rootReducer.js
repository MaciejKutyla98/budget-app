import {combineReducers} from "redux";
import budgetReducer from "./budget/budgetReducer";

const rootReducer = combineReducers({
    budget: budgetReducer
})

export default rootReducer;