import {ADD_EXPENSE, ADD_INCOME} from "./budgetTypes";

const initialBudget = {
    amountOfMoney: 0,
    totalIncome: 0,
    totalExpense: 0
}

const budgetReducer = (state = initialBudget, action) => {
    switch (action.type) {
        case ADD_INCOME: return {
            ...state,
            amountOfMoney: state.amountOfMoney + action.payload.amount,
            totalIncome: state.totalIncome + action.payload.amount
        }
        case ADD_EXPENSE: return {
            ...state,
            amountOfMoney: state.amountOfMoney - action.payload.amount,
            totalExpense: state.totalExpense + action.payload.amount
        }
        default: return state
    }
}

export default budgetReducer;