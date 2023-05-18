import { useEffect, useState } from 'react';
import { api } from './services/api';

import { Global } from './styles/global';
import {Header} from './components/Header/Header';
import {ProductsList} from './components/ProductsList/ProductsList';
import {Cart} from './components/Cart/Cart';
import { Total } from './components/Total/Total';
import { ButtonCleanSearch } from './components/ButtonCleanSearch/ButtonCleanSearch';

function App() { 

  const [absolutelyListProducts, setAbsolutelyListProducts] = useState([])

  const [listProducts, setListProducts] = useState([])

  const [listCart, setListCart] = useState([])

  const [total, setTotal] = useState(0)

  const [statusFiltered, setStatusFiltered] = useState(false)

  const [valueInput, setValueInput] = useState("")

  const [inputValueToTagHTML, setInputValueToTagHTML] = useState("")

  useEffect(()=>{
    async function getProducts(){
      try{
        const request = await api.get()

        const listFromApi = request.data

        const arrayAux = listFromApi.map((product)=>{
          product.amount = 1
          return product
        })
        setAbsolutelyListProducts([...arrayAux])
        setListProducts([...arrayAux])
      }catch(err){
        console.log(err)
      }
    }

    getProducts()
  }, [])
  
  return (
    <div className="App">
      <Global/>
      <Header setListProducts={setListProducts} setStatusFiltered={setStatusFiltered} valueInput={valueInput} setValueInput={setValueInput} absolutelyListProducts={absolutelyListProducts} setInputValueToTagHTML={setInputValueToTagHTML}/>
      <main><div className='container'>
        {statusFiltered === false ? (
          <ProductsList listProducts={listProducts} setListCart={setListCart} listCart={listCart}/>
        ):(
          <div className='list-filtered'>
            <div>
              <h2>Resultados para: <span>{inputValueToTagHTML}</span></h2>
              <ButtonCleanSearch setStatusFiltered={setStatusFiltered} setListProducts={setListProducts} absolutelyListProducts={absolutelyListProducts}/>
            </div>
            <ProductsList listProducts={listProducts} setListCart={setListCart} listCart={listCart}/>
          </div>
        )}
        <div className='div-cart-total'>
          <Cart listCart={listCart} setListCart={setListCart}/>
          {listCart.length !== 0 ? (
            <Total listCart={listCart} total={total} setTotal={setTotal} setListCart={setListCart}/>
          ):(
            <div>

            </div>
          )}
        </div></div>
      </main>
    </div>
  );
}

export default App;
