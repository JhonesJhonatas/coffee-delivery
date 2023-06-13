import { ItemShoppingCart } from "../components/ItemShoppingCart";
import { MapPinLine, CurrencyDollarSimple, CreditCard, Bank, Money, SmileySad } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { CartContext } from '../App'
import { AllPurchaseData } from '../App'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import { showMessage } from '../Notfications'

type Inputs = {
    cep: string,
    rua: string,
    numero: number,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string    
}

export function CheckOut() {

    const navigate = useNavigate()
     
    const { register, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => submitWithAllData(data)

    const { productsOnCart } = useContext(CartContext)
    const { chageStateOfPurchaseData } = useContext(AllPurchaseData)

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')


    function selectPaymentMethod(event: any) {

        setSelectedPaymentMethod(event.target.dataset.method)

    }

    function submitWithAllData({cep, rua, numero, complemento, bairro, cidade, uf} : Inputs){

        if(selectedPaymentMethod === ''){
            
            showMessage('Defina uma forma de pagamento')

        }else if(productsOnCart.length === 0){

            showMessage('Você precisa escolher ao menos um produto para efetuar a compra')

        }else{
            const completeFormsData =  {
                cep,
                rua,
                numero,
                complemento,
                bairro,
                cidade,
                uf,
                paymentMethod: selectedPaymentMethod,
                selectedProducts: productsOnCart
            }
    
            chageStateOfPurchaseData(completeFormsData)

            navigate('/sucess')

        }

    }

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
                            {...register('cep', {required: true})}
                            placeholder='CEP'
                        />
                        <input
                            className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900'
                            type="text"
                            {...register('rua')}
                            placeholder='Rua'
                        />
                        <div className='flex gap-2'>
                            <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900'
                                type="number"
                                {...register('numero', {required: true})}
                                placeholder='Número' />
                            <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900 flex-1'
                                type="text"
                                {...register('complemento', {required: true})}
                                placeholder='Complemento' />
                        </div>
                        <div className='flex justify-evenly gap-2'>
                            <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900 flex-1'
                                type="text"
                                {...register('bairro', {required: true})}
                                placeholder='Bairro'
                            />
                            <input className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900'
                                type="text"
                                {...register('cidade', {required: true})}
                                placeholder='Cidade' />
                        </div>
                        <input
                            className='border border-gray-300 bg-gray-200 p-2 rounded text-gray-900'
                            type="text"
                            {...register('uf', {required: true})}
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

                    <div className="flex gap-6">

                        <div
                            className={`flex border-2 items-center gap-2 bg-slate-300 p-4 rounded cursor-pointer ease-in-out duration-200 ${selectedPaymentMethod === 'credit' ? 'border-2 border-purple-500' : ''}`}
                            data-method='credit'
                            onClick={selectPaymentMethod}
                        >

                            <CreditCard size={30} data-method='credit' />
                            <p data-method='credit' >Cartão de Crédito</p>

                        </div>

                        <div
                            className={`flex border-2 items-center gap-2 bg-slate-300 p-4 rounded cursor-pointer ease-in-out duration-200 ${selectedPaymentMethod === 'debit' ? 'border-2 border-purple-500' : ''}`}
                            data-method='debit'
                            onClick={selectPaymentMethod}
                        >

                            <Bank size={30} data-method='debit' />
                            <p data-method='debit' >Cartão de Débito</p>

                        </div>

                        <div
                            className={`flex border-2 items-center gap-2 bg-slate-300 p-4 rounded cursor-pointer ease-in-out duration-200 ${selectedPaymentMethod === 'money' ? 'border-2 border-purple-500' : ''}`}
                            data-method='money'
                            onClick={selectPaymentMethod}
                        >

                            <Money size={30} data-method='money' />
                            <p data-method='money' >Dinheiro</p>

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

                        <input
                        onClick={handleSubmit(onSubmit)}
                            className="bg-orange-500 text-gray-50 p-2 rounded w-full font-bold cursor-pointer ease-in-out duration-150 hover:scale-105"
                            type="button"
                            value="Confirmar Pedido"
                        />

                    </div>

                </div>

            </div>

            <ToastContainer />

        </div>
    )

}
