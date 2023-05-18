
import { CartProduct } from "../CartProduct/CartProduct"

export function Cart({listCart, setListCart}){
    
    return (
        <div className="cart">
            <div className="cart-title">
                <h2>Carrinho de compras</h2>
            </div>
            {listCart.length === 0 ? (
                <div className="empty-cart">
                    <h3>Sua sacola está vazia</h3>
                    <span>Adicione itens</span>
                </div>
            ):(
                <div>
                    <ul className="listCart">
                    {listCart.map((product)=>{
                            return (
                                <CartProduct key={product.id} product={product} listCart={listCart} setListCart={setListCart}/>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}