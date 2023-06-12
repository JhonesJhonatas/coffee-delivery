import { useEffect, useState } from "react";
import { CoffeeBox } from "../CoffeeBox";

interface ListOfCoffesPattern {
  id: number,
  image: string,
  caracteristics: [],
  title: string,
  description: string,
  value: number,
}

export function CoffesList() {

  const [listOfCoffes, setListOfCoffes] = useState<ListOfCoffesPattern[]>([])

  useEffect(() => {
    async function captureCoffesList(){
      try {
        const response = await fetch('/src/db/listOfCoffees.json')
        const data = await response.json()
        setListOfCoffes(data)
      } catch(error) {
        console.log(error)
      }
    }

    captureCoffesList()
  }, [])


  return (
    <section className="w-4/6 my-0 mx-auto mt-10 pb-10">
      <h1 className="text-3xl font-bold mb-20">Nossos cafés</h1>

      <div className="flex flex-wrap gap-y-28 gap-x-8">
        {listOfCoffes.map(coffe => {
          return <CoffeeBox id={coffe.id} image={coffe.image} caracteristics={coffe.caracteristics} title={coffe.title} description={coffe.description} value={coffe.value} key={coffe.id} />
        })}
      </div>
    </section>
  )
}