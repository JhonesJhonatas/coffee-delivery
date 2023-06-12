import { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './global.css'

interface ProductsSchema {
  id: number,
  image: string,
  caracteristcs: [],
  title: string,
  description: string,
  value: number,
  amount: number
}

interface CartContextSchema {
  productsOnCart: ProductsSchema[],
  addProductOnCart: Function,
}

export const CartContext = createContext({} as CartContextSchema)

export function App() {

  const [productsOnCart, setproductsOnCart] = useState<ProductsSchema[]>([])

  function addProductOnCart(product: ProductsSchema) {

    setproductsOnCart([...productsOnCart, product])

    console.log(productsOnCart)

  }

  return (
    <div className='bg-gray-100'>

      <CartContext.Provider value={{productsOnCart, addProductOnCart}}>

        <BrowserRouter>

          <Router />

        </BrowserRouter>

      </CartContext.Provider>

    </div>
  )

}
