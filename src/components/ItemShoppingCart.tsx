import { Trash } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { CartContext } from '../App'
interface ItemShoppingCartProps {
    id: number,
    name: string,
    amount: number,
    value: number,
    image: string
}

export function ItemShoppingCart({ id, name, amount, value, image }: ItemShoppingCartProps) {

    const { removeProductOnCart, chageAmountOfProductOnCart } = useContext(CartContext)
    const [currentAmount, setCurrentAmount] = useState(amount)

    function removeItem() {

        removeProductOnCart(id)

    }

    function changeAmountOfItem(event: any) {

        const condition = event.target.dataset.name

        let atualAmount = 0

        let productToChange

        if (condition === 'more') {
            setCurrentAmount(state => state + 1)
            atualAmount = currentAmount + 1

            productToChange = {
                id: id,
                name: name,
                amount: amount,
                value: value,
                image: image
            }
        }

        if (condition === 'less') {
            setCurrentAmount(state => state - 1)
            atualAmount = currentAmount - 1

            productToChange = {
                id: id,
                name: name,
                amount: amount,
                value: value,
                image: image
            }
        }


        chageAmountOfProductOnCart(productToChange, atualAmount)
    }

    return (

        <div className="flex justify-between items-center border-b border-gray-300 pb-8 mb-5">

            <div className="flex gap-4 items-center">

                <div className="w-20">

                    <img src={image} alt="" />

                </div>

                <div className="flex flex-col gap-y-3">
                    <p className="font-bold">{name}</p>

                    <div className="flex items-center gap-2">

                        <div className='flex items-center gap-2 bg-gray-300 rounded px-2'>

                            <p onClick={changeAmountOfItem} data-name="less"
                                className='text-blue-700 text-2xl font-normal cursor-pointer'>-</p>

                            <p className='font-bold'>{currentAmount}</p>

                            <p onClick={changeAmountOfItem} data-name="more"
                                className='text-blue-700 text-2xl font-normal cursor-pointer'>+</p>

                        </div>

                        <div onClick={removeItem} className="flex bg-gray-300 rounded p-1 items-center gap-1 cursor-pointer">

                            <Trash size={18} className="text-blue-700" />
                            <p>Remover</p>

                        </div>
                    </div>

                </div>
            </div>

            <div className="flex gap-1 items-end">

                <small className="font-bold">R$</small><p className="font-bold text-3xl">{(value * currentAmount).toFixed(2)}</p>

            </div>


        </div>
    )
}