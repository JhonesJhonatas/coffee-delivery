import coffeCover from '../assets/coffe-cover.svg'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

export function Header() {
  return (
    <header className='w-4/6 my-0 mx-auto flex items-center justify-between mt-8'>

      <div className='flex flex-col gap-16'>

        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-5xl leading-snug'>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className='font-normal text-xl'>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </p>
        </div>

        <div className='flex gap-10 justify-start'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <ShoppingCart className='bg-orange-400 text-gray-50 rounded-full w-9 h-9 p-2' size={20} weight='fill' />
              <p>Compra simples e segura</p>
            </div>
            <div className='flex items-center gap-2'>
              <Package className='bg-gray-600 text-gray-50 rounded-full w-9 h-9 p-2' size={20} weight='fill' />
              <p>Embalagem mantém o café intacto</p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <Timer className='bg-yellow-500 text-gray-50 rounded-full w-9 h-9 p-2' size={20} weight='fill' />
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className='flex items-center gap-2'>
              <Coffee className='bg-purple-800 text-gray-50 rounded-full w-9 h-9 p-2' size={20} weight='fill' />
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>

      </div>

      <div className='flex flex-wrap'>


      </div>

      <img src={coffeCover} alt="" />

    </header>
  )
}