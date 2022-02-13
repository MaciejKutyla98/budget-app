import {ADD_EXPENSE, ADD_INCOME} from "./budgetTypes";

const initialBudget = {
    totalIncome: [
        {
            description: '',
            amount: 0
        }
    ],
    totalExpense: [
        {
            description: '',
            amount: 0
        }
    ]
}

const budgetReducer = (state = initialBudget, action) => {
    switch (action.type) {
        case ADD_INCOME: return {
            ...state,
            totalIncome: [
                ...state.totalIncome,
                {
                    description: action.payload.description,
                    amount: action.payload.amount
                }
            ]
        }
        case ADD_EXPENSE: return {
            ...state,
            totalExpense: [
                ...state.totalExpense,
                {
                    description: action.payload.description,
                    amount: action.payload.amount
                }
            ]
        }
        default: return state
    }
}

export default budgetReducer;