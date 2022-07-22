import { ExpenseType } from "./expense_type"

export type AppState = {
    totalSalary: string,
    addExpense: boolean,
    expense: ExpenseType[],
    isExpenseMaxed: boolean,
}

export const initialState:AppState = {
    totalSalary: "",
    addExpense: false,
    expense: [],
    isExpenseMaxed: false
}