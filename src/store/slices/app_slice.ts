import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../models/app_state";
import { ExpenseType } from "../models/expense_type";

const salaryInputSlice = createSlice({
    name:"salaryInput",
    initialState:initialState,
    reducers:{
        addTotalSalaryAction: (state, action: PayloadAction<string>) => {
            return {...state,totalSalary: action.payload};
        },
        addExpenseAction: (state) => {
            return {...state,addExpense: !state.addExpense};
        },     
        enterExpenseAction: (state, action:PayloadAction<ExpenseType>) => {
            return {...state, expense: [...state.expense,action.payload]}    
        },
        isExpensedMaxedAction: (state, action:PayloadAction<boolean>) => {
            return {...state, isExpenseMaxed: action.payload}
        },
        updateTotalSalaryAction: (state, action: PayloadAction<string>) => {
            return {...state, totalSalary: (parseInt(state.totalSalary) - parseInt(action.payload)).toString()}
        }
             
    }
})

export const { addTotalSalaryAction, addExpenseAction, enterExpenseAction, updateTotalSalaryAction, isExpensedMaxedAction } = salaryInputSlice.actions;

export default salaryInputSlice.reducer;