import styled from "styled-components";
import pizzaStore from "../pizzaStore";

const StyledDiv = styled.div`
  width: 30%;
  height: 500px;
  float: left;
  display: block;
`;
const StyledImg = styled.img`
  height: 100%;
  display: block;
`;
const PizzaItem = ({ pizza }) => {
  return (
    <StyledDiv onClick={() => pizzaStore.removePizza(pizza.id)}>
      <h2 style={{ backgroundColor: "red" }}>{pizza.name}</h2>
      <h3>{pizza.description}</h3>
    </StyledDiv>
  );
};
export default PizzaItem;
