import { ReactSVG } from "react-svg";
import { Trash } from '@phosphor-icons/react'
import { useContext} from 'react'
import { CartContext } from '../../App'
interface ItemShoppingCartProps{
    id: number,
    name: string,
    amount: number,
    value: number,
    image: string
}

export function ItemShoppingCart({id, name, amount, value, image} : ItemShoppingCartProps) {

    const { removeProductOnCart } = useContext(CartContext)

    function removeItem(){
        removeProductOnCart(id)
    }

    return (

        <div className="flex justify-between items-center p-4 border-b border-gray-300 pb-8 mb-5">

            <div className="flex gap-4 items-center">

                <ReactSVG src={image} />

                <div className="flex flex-col gap-y-3">
                    <p className="font-bold">{name}</p>
                    <div className="flex items-center gap-2">
                        <div className='flex items-center gap-3 bg-gray-300 rounded px-2'>
                            <p className='text-blue-700 text-2xl font-normal cursor-pointer'>-</p>
                            <p className='font-bold'>{amount}</p>
                            <p className='text-blue-700 text-2xl font-normal cursor-pointer'>+</p>
                        </div>

                        <div onClick={removeItem} className="flex bg-gray-300 rounded p-1 items-center gap-1 cursor-pointer">

                            <Trash size={18} className="text-blue-700" />
                            <p>Remover</p>

                        </div>
                    </div>

                </div>
            </div>

            <div className="flex gap-1 items-end">

                <small className="font-bold">R$</small><p className="font-bold text-3xl">{(value * amount).toFixed(2)}</p>

            </div>


        </div>
    )
}