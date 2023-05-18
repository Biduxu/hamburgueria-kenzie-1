import { StyledCardProduct } from "./StyleCardProduct"
import { ButtonAdd } from "../ButtonAdd/ButtonAdd"

export function CardProduct({product, setListCart, listProducts, listCart}){
    
    return (
        <StyledCardProduct>
            <img src={product.img} alt="" />
            <div>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <p>R$ {product.price.toFixed(2)}</p>
                <ButtonAdd id={product.id} setListCart={setListCart} listProducts={listProducts} listCart={listCart}/>
            </div>
        </StyledCardProduct>    
    )
}