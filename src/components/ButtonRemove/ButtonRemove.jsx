

export function ButtonRemove({id, listCart, setListCart}){

    function removeProductFromCart (button){
        const listCartFiltered = listCart.filter((product)=>{
            if(product.id === parseInt(button.id)){
                product.amount = 1
            }
            return product.id !== parseInt(button.id)
        })

        setListCart([...listCartFiltered])
    }

    return (
        <button id={id} onClick={(e)=>{removeProductFromCart(e.target)}}>
            Remover
        </button>
    )
}