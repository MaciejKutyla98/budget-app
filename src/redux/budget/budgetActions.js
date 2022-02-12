import {ADD_EXPENSE, ADD_INCOME} from "./budgetTypes";

export const addIncome = (description, amount) => {
    return {
        type: ADD_INCOME,
        payload: {
            description,
            amount
        }
    };
}

export const addExpense = (description,amount) => {
    return {
        type: ADD_EXPENSE,
        payload: {
            description,
            amount
        }
    }
}