

export function ButtonAdd({id, setListCart, listProducts, listCart}){
    
    function sendProductToCart(button){
        const productSelected = listProducts.find((product)=>{
            
            return product.id === parseInt(button.id)
        })

        if(listCart.lenght === 0){
            setListCart([...listCart, ...productSelected])
        } else{
            const duplicateProduct = listCart.find((product)=>{
                return product.id === parseInt(button.id)
            })

            if(duplicateProduct){
                let arrayAux = listCart.map((product)=>{
                    if(product.name === duplicateProduct.name){
                        product.amount ++
                    }
                    return product
                })

                setListCart(arrayAux)

            }else{
                setListCart([...listCart, productSelected])
            }
        }
        
    }

    return (
        <button id={id} onClick={(e)=>{sendProductToCart(e.target)}}>
            Adicionar
        </button>
    )
}