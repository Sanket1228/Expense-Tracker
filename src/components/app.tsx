import { GlobalStyle } from "../common/styles/global.styled"
import ExpenseListComponent from "./ExpenseListComponent/ExpenseListComponent"
import SalaryInputComponent from "./SalaryInputComponent/SalaryInputComponent"

const App:React.FC = () => {

    return(
        <>
            <GlobalStyle/>
            <SalaryInputComponent/>          
            <ExpenseListComponent/>
        </>
    )
}

export default App