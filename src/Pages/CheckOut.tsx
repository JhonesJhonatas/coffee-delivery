import { ItemShoppingCart } from "../components/ItemShoppingCart";
import { MapPinLine, CurrencyDollarSimple, CreditCard, Bank, Money, SmileySad } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../App'

export function CheckOut() {

    const { productsOnCart } = useContext(CartContext)

    let totalPrice = 0

    const deliveryPrice = productsOnCart.length === 0 ? 0 : 3.5

    productsOnCart.map(product => {
        totalPrice += product.amount * product.value
    })

    return (

        <div className='bg-gray-100 grid grid-cols-2 w-4/6 my-10 mx-auto h-screen gap-10'>

            {/* Left */}
            <div>

                <h1 className="font-bold text-lg">Complete seu pedido</h1>

                <div className='mt-8 bg-gray-200 rounded-r-3xl rounded-b-3xl p-8'>
                    <div className='flex items-start gap-2 mb-8'>
                        <MapPinLine className='text-orange-600' size={25} />
                        <div>
                            <p className='font-bold'>Endereço de Entrega</p>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>
                    <form className='flex flex-col gap-y-6 text-sm'>
                        <input
                            className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900'
                            type="text"
                            placeholder='CEP'
                        />
                        <input
                            className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900'
                            type="text"
                            placeholder='Rua'
                        />
                        <div className='flex gap-2'>
                            <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900'
                                type="text"
                                placeholder='Número' />
                            <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900 flex-1'
                                type="text"
                                placeholder='Complemento' />
                        </div>
                        <div className='flex justify-evenly gap-2'>
                            <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900 flex-1'
                                type="text"
                                placeholder='Bairro'
                            />
                            <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900'
                                type="text"
                                placeholder='Cidade' />
                        </div>
                        <input
                            className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900'
                            type="text"
                            placeholder='UF'
                        />
                    </form>
                </div>

                <div className='mt-8 bg-gray-200 rounded-r-3xl rounded-b-3xl p-8'>
                    <div className='flex items-start gap-2 mb-8'>
                        <CurrencyDollarSimple className='text-purple-700' size={25} />
                        <div>
                            <p className='font-bold'>Pagamento</p>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>

                    <div className='flex gap-4 justify-between'>
                        <div className='flex items-center gap-2 bg-gray-300 p-4 rounded cursor-pointer'>
                            <CreditCard className='text-purple-700' size={20} />
                            <p className='uppercase text-sm'>Cartão de crédito</p>
                        </div>
                        <div className='flex items-center gap-2 bg-gray-300 p-4 rounded cursor-pointer'>
                            <Bank className='text-purple-700' size={20} />
                            <p className='uppercase text-sm'>cartão de débito</p>
                        </div>
                        <div className='flex items-center gap-2 bg-gray-300 p-4 rounded flex-1 cursor-pointer'>
                            <Money className='text-purple-700' size={20} />
                            <p className='uppercase text-sm'>dinheiro</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* Right*/}
            <div>

                <h1 className="font-bold text-lg">Cafés selecionados</h1>

                <div className='mt-8 bg-gray-200 rounded-r-3xl rounded-b-3xl p-8'>

                    {productsOnCart.length === 0 ?

                        <div className="mb-8 flex gap-6 items-center bg-gray-300 rounded p-2 text-gray-500">
                            <SmileySad size={150} />
                            <div>
                                <h1 className="font-bold text-lg">Parece que você ainda não inseriu itens no seu carrinho.</h1>
                                <p>Volte para a Home e insira algum item ;D</p>
                            </div>
                        </div>

                        : productsOnCart.map(item => {

                            return (<ItemShoppingCart
                                key={item.id}
                                id={item.id}
                                name={item.title}
                                amount={item.amount}
                                value={item.value}
                                image={item.image}
                            />

                            )
                        })}

                    <div className="flex flex-col gap-y-6">

                        <div className="flex justify-between">

                            <p>Total de itens</p>
                            <p>R$ {totalPrice.toFixed(2)}</p>

                        </div>

                        <div className="flex justify-between">

                            <p>Entrega</p>
                            <p>R$ {deliveryPrice}</p>

                        </div>

                        <div className="flex justify-between">

                            <p className="font-bold text-lg">Total</p>
                            <p className="font-bold text-2xl">R$ {(totalPrice + deliveryPrice).toFixed(2)}</p>

                        </div>

                        <input className="bg-orange-500 text-gray-50 p-2 rounded w-full font-bold cursor-pointer" type="button" value="Confirmar Pedido" />

                    </div>

                </div>

            </div>

        </div>
    )

}