
import { HeaderStyled } from "./styleHeader"
import { InputSearch } from "../InputSearch/InputSearch"

export function Header({setListProducts, setStatusFiltered, valueInput, setValueInput, absolutelyListProducts, setInputValueToTagHTML}){
    
    return (
        <HeaderStyled>
            <div className="div-header">
                <h1>Burguer <span>Kenzie</span></h1>
                <InputSearch setListProducts={setListProducts} setStatusFiltered={setStatusFiltered} valueInput={valueInput} setValueInput={setValueInput} absolutelyListProducts={absolutelyListProducts} setInputValueToTagHTML={setInputValueToTagHTML}/>
            </div>
        </HeaderStyled>
    )
}