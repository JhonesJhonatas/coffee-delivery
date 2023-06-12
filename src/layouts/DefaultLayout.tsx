import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar' 

export function DefaultLayout(){
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}