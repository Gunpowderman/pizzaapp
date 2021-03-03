import { observer } from "mobx-react";
import PizzaItem from "./PizzaItem";

const PizzaList = ({ pizzas }) => {
  return (
    <div>
      {pizzas.map((cv) => (
        <PizzaItem pizza={cv} />
      ))}
      <div style={{ clear: "both" }}></div>
    </div>
  );
};

export default observer(PizzaList);
