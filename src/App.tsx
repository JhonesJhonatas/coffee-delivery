import { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './global.css'

import { ToastContainer } from 'react-toastify'
import { showMessage } from './Notfications'

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

interface CoffeeBoxProps {
  cep: string,
  rua: string,
  numero: number,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string,
  paymentMethod: string,
  selectedProducts: []
}

interface PurchaseContext {
  purchaseData: CoffeeBoxProps,
  chageStateOfPurchaseData: Function
}

export const CartContext = createContext({} as CartContextSchema)
export const AllPurchaseData = createContext({} as PurchaseContext)

export function App() {

  const [productsOnCart, setProductsOnCart] = useState<ProductsSchema[]>([])
  const [purchaseData, setPurchaseData] = useState<CoffeeBoxProps>({
    cep: '',
    rua: '',
    numero: 0,
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    paymentMethod: '',
    selectedProducts: []
  })

  function addProductOnCart(product: ProductsSchema) {

    if (product.amount !== 0) {
      setProductsOnCart([...productsOnCart, product])

      showMessage("Produto(s) inseridos no carrinho.")
    }

  }

  function removeProductOnCart(id: number) {

    const newListWithoudDeletedOne = productsOnCart.filter(item => item.id !== id)

    setProductsOnCart(newListWithoudDeletedOne)

    showMessage("Produto(s) removido do carrinho.")

  }

  function chageAmountOfProductOnCart(coffee: ProductsSchema, atualAmount: number) {

    if (atualAmount === 0) {

      const indexOfItemToChange = productsOnCart.findIndex(obj => obj.id === coffee.id)

      const newList = [...productsOnCart]

      newList.splice(indexOfItemToChange, 1)

      console.log(newList)

      setProductsOnCart(newList)

    } else {
      const indexOfItemToChange = productsOnCart.findIndex(obj => obj.id === coffee.id)

      const newList = [...productsOnCart]

      newList[indexOfItemToChange].amount = atualAmount

      setProductsOnCart(newList)
    }


  }

  function chageStateOfPurchaseData(data: CoffeeBoxProps) {

    setPurchaseData(data)

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
        <AllPurchaseData.Provider value={{ purchaseData, chageStateOfPurchaseData }}>

          <BrowserRouter>

            <Router />

          </BrowserRouter>

        </AllPurchaseData.Provider>

      </CartContext.Provider>

      <ToastContainer />

    </div>
  )

}
