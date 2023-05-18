import { CardProduct } from "../CardProduct/CardProduct"

export function ProductsList({listProducts, setListCart, listCart}){
    
    return(
        <ul className="listProducts">
            {listProducts.map((product)=>{
                return (
                    <CardProduct key={product.id} product={product} setListCart={setListCart} listProducts={listProducts} listCart={listCart}/>
                )
            })}
        </ul>
    )
}