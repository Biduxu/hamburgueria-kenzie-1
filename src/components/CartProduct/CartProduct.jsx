
import { ButtonRemove } from "../ButtonRemove/ButtonRemove"
import { StyledCartProduct } from "./StyledCartProduct"

export function CartProduct({product, listCart, setListCart}){
    return(
        <StyledCartProduct>
            <div>
                <img src={product.img} alt="" />
            </div>
            <div className="div-cart-description">
                <div>
                    <h4>{product.name}</h4>
                    <span>{product.category}</span>
                    <p>{product.amount}x</p>
                </div>
                <ButtonRemove id={product.id} listCart={listCart} setListCart={setListCart}/>
            </div>
        </StyledCartProduct>
    )
}