import { MapPinLine } from '@phosphor-icons/react'

export function AdressForm(){
    return (
        <div className='mt-8 bg-gray-200 rounded-r-3xl rounded-b-3xl p-8'>
            <div className='flex items-start gap-2 mb-8'>
                <MapPinLine className='text-orange-600' size={25} />
                <div>
                    <p className='font-bold'>Endereço de Entrega</p>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </div>
            <form className='flex flex-col gap-y-6 text-sm'>
                <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900' type="text" placeholder='CEP' />
                <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900' type="text" placeholder='Rua' />
                <div className='flex gap-2'>
                    <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900' type="text" placeholder='Número' />
                    <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900 flex-1' type="text" placeholder='Complemento' />
                </div>
                <div className='flex justify-between gap-2'>
                    <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900' type="text" placeholder='Bairro' />
                    <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900' type="text" placeholder='Cidade' />
                    <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900' type="text" placeholder='UF' />
                </div>
            </form>
        </div>
    )
}