import { GlobalStyle } from "../common/styles/global.styled"
import AppHeaderComponent from "./AppHeaderComponent/AppHeaderComponent"
import ExpenseListComponent from "./ExpenseListComponent/ExpenseListComponent"
import SalaryInputComponent from "./SalaryInputComponent/SalaryInputComponent"

const App:React.FC = () => {

    return(
        <>
            <GlobalStyle/>
            <AppHeaderComponent/>
            <SalaryInputComponent/>          
            <ExpenseListComponent/>
        </>
    )
}

export default App