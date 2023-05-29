import { AdressForm } from "../../components/AdressForm";
import { PaymentMethodBox } from "../../components/PaymentMethodBox";
import { ShoppingCartBox } from "../../components/ShoppingCartBox";

export function CheckOut() {

    return (
        <div className='bg-gray-100 grid grid-cols-2 w-4/6 my-10 mx-auto h-screen gap-10'>

            {/* Left */}
            <div>

                <h1 className="font-bold text-lg">Complete seu pedido</h1>

                <AdressForm />

                <PaymentMethodBox />

            </div>

            {/* Right*/}
            <div>

                <h1 className="font-bold text-lg">Cafés selecionados</h1>

                <ShoppingCartBox />

            </div>

        </div>
    )

}
