import { useAppSelector } from "../../store/hooks/store.hooks"
import { ContainerList, ListComponentStyle, ListStyle, UnorderedList } from "./expenselist.styled"

const ExpenseListComponent = () => {
    
    const state = useAppSelector(state => state.appstate.expense)

  return (
    <ContainerList>
    {
        state.map((exp) => 
        <UnorderedList>
          <ListStyle>
            <ListComponentStyle>
              {exp.type}
            </ListComponentStyle>
            <ListComponentStyle>
              {exp.cost}
            </ListComponentStyle>           
          </ListStyle>
        </UnorderedList>
        )
    }
</ContainerList>
  )
}

export default ExpenseListComponent