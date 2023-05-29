import { ReactSVG } from "react-svg";
import { Trash } from '@phosphor-icons/react'

export function ItemShoppingCart() {
    return (
        <div className="flex justify-between items-center p-4 border-b border-gray-300 pb-8 mb-5">

            <div className="flex gap-4 items-center">

                <ReactSVG src='/src/assets/coffees/coffee1.svg' />

                <div className="flex flex-col gap-y-3">
                    <p className="font-bold">Expresso Tradicional</p>
                    <div className="flex items-center gap-2">
                        <div className='flex items-center gap-3 bg-gray-300 rounded px-2'>
                            <p className='text-blue-700 text-2xl font-normal cursor-pointer'>-</p>
                            <p className='font-bold'>0</p>
                            <p className='text-blue-700 text-2xl font-normal cursor-pointer'>+</p>
                        </div>

                        <div className="flex bg-gray-300 rounded p-1 items-center gap-1 cursor-pointer">

                            <Trash size={18} className="text-blue-700" />
                            <p>Remover</p>

                        </div>
                    </div>

                </div>
            </div>

            <div className="flex gap-1 items-end">
                <small className="font-bold">R$</small><p className="font-bold text-3xl">9,90</p>
            </div>


        </div>
    )
}