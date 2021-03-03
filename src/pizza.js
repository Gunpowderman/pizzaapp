import kharabeetImage from "./images/kharabeet.jpg";
import margarettaImage from "./images/margaretta.jpg";
import peppImage from "./images/pepperoni.jpg";
import weirdImage from "./images/weird-pizza.jpg";
import truffleImage from "./images/truffle-sauce.jpg";

const pizza = [
  {
    id: 0,
    name: "Kharabeet Pizza",
    image: kharabeetImage,
    description: "this pizza contains kharabeets inside it.",
    price: 4.5,
  },
  {
    id: 1,
    name: "El Perperoni",
    image: peppImage,
    description: "This is a classic pep.",
    price: 3.5,
  },
  {
    id: 2,
    name: "El Weirdo",
    image: weirdImage,
    description: "This pizza contains stuff normal people wont touch",
    price: 10,
  },
  {
    id: 3,
    name: "Margaretta",
    image: margarettaImage,
    description: "Classic Marge",
    price: 3.3,
  },
  {
    id: 4,
    name: "Truffle Sauce",
    image: truffleImage,
    description: "Smells like blah.",
    price: 0.5,
  },
];

export default pizza;
