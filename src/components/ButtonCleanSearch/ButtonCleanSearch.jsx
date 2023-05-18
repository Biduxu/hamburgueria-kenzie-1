
import { StyledButtonCleanSearch } from "./StyledButtonCleanSearch"

export function ButtonCleanSearch ({setStatusFiltered, setListProducts, absolutelyListProducts}){

    function actionButtonClick (){
        setListProducts([...absolutelyListProducts])
        setStatusFiltered(false)
    }

    return(
        <StyledButtonCleanSearch onClick={(e)=>{actionButtonClick()}}>
            Limpar busca
        </StyledButtonCleanSearch>
    )
}