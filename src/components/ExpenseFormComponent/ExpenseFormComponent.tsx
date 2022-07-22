import React, { useState } from "react";
import { ButtonStyle } from "../../common/styles/buttons.styles";
import { useAppDispath, useAppSelector} from "../../store/hooks/store.hooks";
import { enterExpenseAction, updateTotalSalaryAction } from "../../store/slices/app_slice";
import { Input } from "../SalaryInputComponent/salaryinput.styled";

const ExpenseFormComponent = () =>{

    const state = useAppSelector(state => state.appstate);

    const dispath = useAppDispath();

    const [inputVal, setInputVal] = useState({
        type:"",
        cost:""
    })

    const handleOnChange = (e:React.KeyboardEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputVal({
            ...inputVal,
            [e.target.name]: value
        });
    }

    const handleOnSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispath(enterExpenseAction({type: inputVal.type, cost: inputVal.cost, timestamp:Date.now()}))
        setInputVal({
            type:"",
            cost:""
        });
    }

    const handleOnClickAdd = () => {
        dispath(updateTotalSalaryAction(inputVal.cost))
    }

    return(
    <>
        <form action="" onSubmit={handleOnSubmit}>
            <Input type="text" name="type" id="" placeholder="Enter type of expense" value={inputVal.type} onChange={handleOnChange} />
            <Input type="number" name="cost" id="" placeholder="Enter cost in Rs" value={inputVal.cost} onChange={handleOnChange}/>
            <ButtonStyle type="submit" onClick={handleOnClickAdd} disabled={parseInt(state.totalSalary) <= 0}>Add Expense</ButtonStyle>
        </form> 
    </>)
}

export default ExpenseFormComponent;