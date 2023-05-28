import { CoffesList } from './components/CoffesList'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import './global.css'

export function App() {

  return (
    <div className='bg-gray-100'>
        <NavBar />

        <Header />

        <CoffesList />

    </div>
  )

}
