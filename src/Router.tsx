import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { CheckOut } from './Pages/CheckOut'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
    return (
        <Routes>

            <Route path='/' element={<DefaultLayout />}>

                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<CheckOut />} />

            </Route>

        </Routes>
    )
}