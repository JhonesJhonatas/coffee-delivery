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
  removeProductOnCart: Function
}

export const CartContext = createContext({} as CartContextSchema)

export function App() {

  const [productsOnCart, setProductsOnCart] = useState<ProductsSchema[]>([])

  function addProductOnCart(product: ProductsSchema) {

    if (product.amount !== 0) {
      setProductsOnCart([...productsOnCart, product])
    }

  }

  function removeProductOnCart(id: number) {

    const newListWithoudDeletedOne = productsOnCart.filter(item => item.id !== id)

    setProductsOnCart(newListWithoudDeletedOne)

  }

  return (
    <div className='bg-gray-100'>

      <CartContext.Provider value={{ productsOnCart, addProductOnCart, removeProductOnCart}}>

        <BrowserRouter>

          <Router />

        </BrowserRouter>

      </CartContext.Provider>

    </div>
  )

}
