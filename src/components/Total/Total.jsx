import { TotalStyle } from "./TotalStyle"

export function Total ({listCart, total, setTotal, setListCart}){

    function getTotalFromListCart(){
        const totalList = listCart.reduce((accumulator, currentValue)=>{
            return accumulator + (currentValue.price * currentValue.amount)
        }, 0)

        setTotal(totalList)
    }

    getTotalFromListCart()

    function toEmptyListCart(){
        listCart.forEach((product)=>{
            return product.amount = 1
        })
        return setListCart([])
    }

    return (
        <TotalStyle>
            <div>
                <h4>Total</h4>
                <strong>R$ {total.toFixed(2)}</strong>
            </div>
            <button onClick={(e)=>{toEmptyListCart()}}>Remover todos</button>
        </TotalStyle>
    )
}