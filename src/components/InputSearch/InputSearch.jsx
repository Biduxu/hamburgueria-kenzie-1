
import { StyleInputSearch } from "./styleInputSearch"
import { ButtonSearch } from "../ButtonSearch/ButtonSearch"

export function InputSearch({setListProducts, setStatusFiltered, valueInput, setValueInput, absolutelyListProducts, setInputValueToTagHTML}){
    
    function getValue(e){
        e.preventDefault()
        let auxArray = absolutelyListProducts.filter((product)=>{
            return product.name.toLowerCase().includes(valueInput.toLowerCase()) || product.category.toLowerCase().includes(valueInput.toLowerCase())
        })
        setInputValueToTagHTML(valueInput)
        setListProducts([...auxArray])
        setStatusFiltered(true)
    }
    
    return (
        <StyleInputSearch>
            <form onSubmit={(e)=>{getValue(e)}}>
                <input type="text" placeholder="Digitar Pesquisa" value={valueInput} onChange={(e)=>{setValueInput(e.target.value)}}/>
                <ButtonSearch type="submit">Pesquisar</ButtonSearch>
            </form>
        </StyleInputSearch>
    )
}