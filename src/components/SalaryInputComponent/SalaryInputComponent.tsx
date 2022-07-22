import React, { useState } from "react"
import { ButtonStyle } from "../../common/styles/buttons.styles";
import { useAppDispath, useAppSelector } from "../../store/hooks/store.hooks"
import { addExpenseAction, addTotalSalaryAction } from "../../store/slices/app_slice";
import ExpenseFormComponent from "../ExpenseFormComponent/ExpenseFormComponent";
import { ContainerAddExpense, Input, SalaryInputBox, ShowSalaryTag } from "./salaryinput.styled"

const SalaryInputComponent:React.FC = () => {

    const state = useAppSelector(state => state.appstate);

    const dispath = useAppDispath();

    const [inputValue, setInputValue] = useState<string>("")

    const handleOnChanged = (e:React.KeyboardEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleOnSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispath(addTotalSalaryAction(inputValue));
        setInputValue("");
    }


    const handleOnClickAddExp = () => {
        dispath(addExpenseAction());
    }

    return(
        <>
            <SalaryInputBox>
                <form action="" onSubmit={handleOnSubmit}>
                    <Input type="number" name="" value={inputValue} id="" placeholder="Enter total Salary in Rs" onChange={handleOnChanged}/>
                    <ButtonStyle type="submit">Add</ButtonStyle>
                </form>
                <ShowSalaryTag>
                    {
                        parseInt(state.totalSalary) <= 0 
                        ?
                        0
                        :
                        state.totalSalary
                    }
                    <div>Total Amount</div>
                </ShowSalaryTag>            
            </SalaryInputBox>
            {
                state.totalSalary !== ""
                ?
                <ContainerAddExpense>
                    <ButtonStyle onClick={handleOnClickAddExp}>Enter Expense</ButtonStyle>
                    {
                        state.isExpenseMaxed
                        ?
                        <div>Not enough salary to expense</div>
                        :
                        <></>
                    }
                    {
                        state.addExpense 
                        ?
                            <ExpenseFormComponent/>
                        :
                        <></>
                    }
                </ContainerAddExpense>
                :
                <></>
            }
            
        </>
        
    )
}

export default SalaryInputComponent