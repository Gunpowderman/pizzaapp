import { action, makeObservable, observable } from "mobx";
import pizzas from "./pizza";

class PizzaStore {
  pizzas = pizzas;

  addPizza = (data) => {
    let newPizza = data;
    newPizza.id = this.pizzas.length + 1;
    console.log(newPizza);
    this.pizzas.push(newPizza);
    console.log(this.pizzas);
  };

  removePizza = (id) => {
    this.pizzas = this.pizzas.filter((cv) => cv.id !== id);
  };

  constructor() {
    makeObservable(this, {
      pizzas: observable,
      removePizza: action,
      addPizza: action,
    });
  }
}

const pizzaStore = new PizzaStore();

export default pizzaStore;
