import { MapPin, Clock, CurrencyDollarSimple } from '@phosphor-icons/react'
import { ReactSVG } from 'react-svg'

import deliveryVector from '../../assets/deliveryVector.svg'

export function Sucess() {
    return (
        <div className="mt-16 w-4/6 my-0 mx-auto flex justify-between items-top h-screen">
            <div>

                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>

                <div className='flex flex-col gap-y-4 mt-8 border border-orange-500 p-8  rounded-bl-3xl rounded-tr-3xl'>

                    <div className='flex items-center gap-2'>
                        <MapPin className='bg-purple-700 text-gray-50 p-2 h-8 w-8 rounded-full' size={20} weight='fill' />
                        <div>
                            <p>Entrega em Rua João Daniel Martinelli, 102</p>
                            <p>Farrapos - Porto Alegre, RS</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Clock className='bg-orange-500 text-gray-50 p-2 h-8 w-8 rounded-full' size={20} weight='fill' />
                        <div>
                            <p>Previsão de entrega</p>
                            <p>20 min - 30 min </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CurrencyDollarSimple className='bg-orange-700 text-gray-50 p-2 h-8 w-8 rounded-full' size={20} />
                        <div>
                            <p>Pagamento na entrega</p>
                            <p>Cartão de Crédito</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <ReactSVG src={deliveryVector} />

            </div>

        </div>
    )
}