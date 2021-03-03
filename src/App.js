import PizzaList from "./components/PizzaList";

import pizzaStore from "./pizzaStore";
import PizzaCreate from "./components/PizzaCreate";
import { observer } from "mobx-react";
function App() {
  return (
    <div className="App">
      <PizzaCreate />

      <PizzaList pizzas={pizzaStore.pizzas} />
    </div>
  );
}

export default observer(App);
