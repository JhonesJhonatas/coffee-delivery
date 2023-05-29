import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import coffeLogo from '../../assets/coffee-delivery-logo.svg'

export function NavBar() {
  return (
    <nav className='flex w-4/6 items-center justify-between my-0 mx-auto py-5'>

      <NavLink to="/">
        <img src={coffeLogo} alt="coffee-delivery-logo" />
      </NavLink>

      <div className='flex gap-3 items-center'>

        <div className='flex gap-1 items-center bg-purple-200 text-purple-700 py-2 px-3 rounded'>

          <MapPin size={20} weight='fill' />
          <p className='font-normal text-sm'>Ceilândia, DF</p>

        </div>
        <NavLink to="/checkout">
          <div className='bg-orange-200 p-2 rounded text-orange-700'>
            <ShoppingCart size={20} weight='fill' />
          </div>
        </NavLink>

      </div>
    </nav>
  )
}