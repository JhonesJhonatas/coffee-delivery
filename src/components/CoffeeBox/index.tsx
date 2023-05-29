import { ReactSVG } from 'react-svg'
import { ShoppingCart } from '@phosphor-icons/react'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'

interface CoffeeBoxProps {
  id?: number,
  image: string,
  caracteristics: string[],
  title: string,
  description: string,
  value: number,
}

export function CoffeeBox({ image, caracteristics, title, description, value} :CoffeeBoxProps) {

  const [countCoffee, setCountCoffee] = useState(0)

  function sumCountCoffee(){
    setCountCoffee(countCoffee + 1)
  }
  
  function subtractCountCoffee(){
    setCountCoffee(countCoffee - 1)
  }
  return (
    <div className='bg-gray-200 w-72 p-4 rounded-r-3xl rounded-b-3xl flex flex-col'>

      <ReactSVG className='-mt-16 mx-auto' src={image}/>

      <div className='flex justify-center items-center mt-3 mb-5 gap-3'>
        {caracteristics.map(caracteristic => {
          return <p key={uuid()} className='bg-orange-200 text-orange-800 font-bold text-xs py-2 px-3 rounded-full uppercase'>{caracteristic}</p>
        })}
      </div>

      <h2 className='text-center font-bold mb-5 text-2xl'>{title}</h2>

      <p className='text-center mb-5'>
        {description}
      </p>

      <div className='flex justify-between items-center px-4 py-2'>

        <div className='flex items-end gap-1'>
          <small className='font-bold'>R$</small>
          <p className='font-bold text-3xl'>{value}</p>
        </div>

        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-3 bg-gray-300 rounded px-2'>
            <p onClick={subtractCountCoffee} className='text-blue-700 text-2xl font-normal cursor-pointer'>-</p>
            <p className='font-bold'>{countCoffee}</p>
            <p onClick={sumCountCoffee} className='text-blue-700 text-2xl font-normal cursor-pointer'>+</p>
          </div>
          <ShoppingCart className='bg-blue-900 w-9 h-9 p-2 rounded text-gray-100 cursor-pointer' size={20} weight='fill' />
        </div>
      </div>

    </div>
  )
}