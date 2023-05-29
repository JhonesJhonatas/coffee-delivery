import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './global.css'

export function App() {

  return (
    <div className='bg-gray-100'>

      <BrowserRouter>

        <Router />

      </BrowserRouter>

    </div>
  )

}
