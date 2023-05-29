import { ItemShoppingCart } from "../ItemShoppingCart";

export function ShoppingCartBox() {
    return (
        <div className='mt-8 bg-gray-200 rounded-r-3xl rounded-b-3xl p-8'>

            <ItemShoppingCart />

            <ItemShoppingCart />

            <div className="flex flex-col gap-y-6">
                <div className="flex justify-between">
                    <p>Total de itens</p>
                    <p>R$ 29,70</p>
                </div>
                <div className="flex justify-between">
                    <p>Entrega</p>
                    <p>R$ 3,50</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-bold text-lg">Total</p>
                    <p className="font-bold text-2xl">R$ 33,20</p>
                </div>

                <input className="bg-orange-500 text-gray-50 p-2 rounded w-full font-bold cursor-pointer" type="button" value="Confirmar Pedido" />

            </div>

        </div>
    )
}