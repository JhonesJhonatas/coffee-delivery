import { useState } from "react";
import { CoffeeBox } from "../CoffeeBox";

interface ListOfCoffesPattern {
  id: number,
  caracteristics: string[],
  title: string,
  description: string,
  value: number,
}



export function CoffesList() {

  const [listOfCoffes, setListOfCoffes] = useState<ListOfCoffesPattern[]>([])

  async function captureCoffesList() {

    let coffesList :ListOfCoffesPattern[]= []

    await fetch('/src/db/listOfCoffes.json')
      .then(response => response.json())
      .then(data => coffesList = data)
      .catch(error => console.log(error))

    return setListOfCoffes(coffesList)
  }

  captureCoffesList()

  return (
    <section className="w-4/6 my-0 mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-20">Nossos cafés</h1>

      <div className="flex flex-wrap gap-y-28 justify-between">
        {listOfCoffes.map(coffe => {
          return <CoffeeBox caracteristics={coffe.caracteristics} title={coffe.title} description={coffe.description} value={coffe.value} key={coffe.id} />
        })}
      </div>
    </section>
  )
}