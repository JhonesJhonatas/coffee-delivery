import { CoffeeBox } from "../CoffeeBox";

export function CoffesList() {
  return (
    <section className="w-4/6 my-0 mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-20">Nossos cafés</h1>

      <div className="flex flex-wrap gap-y-28 justify-between">
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
      </div>
    </section>
  )
}