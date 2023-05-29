import { CurrencyDollarSimple, CreditCard, Bank, Money } from '@phosphor-icons/react'

export function PaymentMethodBox(){
    return (
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
                    <CreditCard className='text-purple-700' size={20}/>
                    <p className='uppercase text-sm'>Cartão de crédito</p>
                </div>
                <div className='flex items-center gap-2 bg-gray-300 p-4 rounded cursor-pointer'>
                    <Bank className='text-purple-700' size={20}/>
                    <p className='uppercase text-sm'>cartão de débito</p>
                </div>
                <div className='flex items-center gap-2 bg-gray-300 p-4 rounded flex-1 cursor-pointer'>
                    <Money className='text-purple-700' size={20}/>
                    <p className='uppercase text-sm'>dinheiro</p>
                </div>
            </div>

        </div>
    )
}