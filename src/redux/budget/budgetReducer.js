import {ADD_EXPENSE, ADD_INCOME} from "./budgetTypes";

const initialBudget = {
    totalIncome: [],
    totalExpense: []
}

const budgetReducer = (state = initialBudget, action) => {
    switch (action.type) {
        case ADD_INCOME: return {
            ...state,
            totalIncome: [...state.totalIncome, action.payload.amount]
        }
        case ADD_EXPENSE: return {
            ...state,
            totalExpense: [...state.totalExpense, action.payload.amount]
        }
        default: return state
    }
}

export default budgetReducer;