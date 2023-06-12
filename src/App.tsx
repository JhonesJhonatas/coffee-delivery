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
  removeProductOnCart: Function,
  chageAmountOfProductOnCart: Function
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

  function chageAmountOfProductOnCart(coffee: ProductsSchema, atualAmount: number) {

    if (atualAmount === 0) {

      const indexOfItemToChange = productsOnCart.findIndex(obj => obj.id === coffee.id)

      const newList = [...productsOnCart]

      newList.splice(indexOfItemToChange,1)

      console.log(newList)

      setProductsOnCart(newList)

    } else {
      const indexOfItemToChange = productsOnCart.findIndex(obj => obj.id === coffee.id)

      const newList = [...productsOnCart]

      newList[indexOfItemToChange].amount = atualAmount

      setProductsOnCart(newList)
    }

    
  }

  return (
    <div className='bg-gray-100'>

      <CartContext.Provider value={{
        productsOnCart,
        addProductOnCart,
        removeProductOnCart,
        chageAmountOfProductOnCart
      }}
      >

        <BrowserRouter>

          <Router />

        </BrowserRouter>

      </CartContext.Provider>

    </div>
  )

}
