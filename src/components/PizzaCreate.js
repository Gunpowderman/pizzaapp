import { useState } from "react";
import pizzaStore from "../pizzaStore";

const PizzaCreate = () => {
  const [data, setData] = useState({ name: "", price: 0, description: "" });
  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]:
        event.target.name === "price"
          ? +event.target.value
          : event.target.value,
    }));
  };
  /* anatomy of handleChange
1. Every onChange produces an "event object" see: https://developer.mozilla.org/en-US/docs/Web/API/Event
2. <input onChange={(event) => handleChange(event)} type="text" name="name" /> is also valid.
3. [event.target.name] (brackets included) translates into the key name of the object.
4. event.target.value translates into the value in the input that was typed in.
5. Inputs fields ALWAYS produce strings not integers even when type="number", to fix this
    the ternery operator event.target.name === "price" ? +event.target.value : event.target.value
    was used where +event.target.value will turn the value into an integer
6. Since the next value of the state is based on the old value of state, it's preferable to use
    prevState. SIMPLE EXAMPLE setState((prevState) => prevState + 1). This example takes the previous
    state whatever it's value is then adds 1 to it. However, in our function we are taking the
    previous object state and "mutating" it.
*/

  const handleSubmit = (event) => {
    event.preventDefault();
    pizzaStore.addPizza(data);
  };

  /* anatomy of handleSubmit
1. each <form> should have an onSubmit to handle submitted data.
2. Every onSubmit event creates an Event object
3. <form onSubmit={(event) => handleSubmit(event)}> is also valid
4. if event.preventDefault() is not called, a post request will be sent
    to the same page causing it to refresh without actually sending the data.
5. pizzaStore.addPizza(data) is a Pizza Store class method that adds a pizza object
    to the pizzas array in the mobx pizza store.
*/

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input onChange={handleChange} type="text" name="name" />

        <label>Price:</label>
        <input onChange={handleChange} type="number" name="price" />

        <label>Description:</label>
        <textarea onChange={handleChange} name="description" />

        <button type="submit">Add Pizza</button>
      </form>
    </div>
  );
};
export default PizzaCreate;
