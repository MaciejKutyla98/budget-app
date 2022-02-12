import {ADD_EXPENSE, ADD_INCOME} from "./budgetTypes";

const initialBudget = {
    amountOfMoney: 0
}

const budgetReducer = (state = initialBudget, action) => {
    switch (action.type) {
        case ADD_INCOME: return {
            ...state,
            amountOfMoney: state.amountOfMoney + action.payload
        }
        case ADD_EXPENSE: return {
            ...state,
            amountOfMoney: state.amountOfMoney - action.payload
        }
        default: return state
    }
}

export default budgetReducer;