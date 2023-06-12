import { toast  } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export function showMessage(message: string){

    toast(message)

}