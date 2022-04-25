import React from "react";
import Card from "../UI/Card";
import styles from "./AvailibleClothes.module.scss";
import PieceItem from "./PieceItem/PieceItem";

const DUMMY_CLOTHES = [
  {
    id: "c1",
    name: "T-shirt",
    description: "Good quality, white color",
    price: 19.99,
  },
  {
    id: "c2",
    name: "Hoodie",
    description: "Warm and soft",
    price: 48.0,
  },
  {
    id: "c3",
    name: "Jeans",
    description: "Dolor sit amet",
    price: 54.9,
  },
  {
    id: "c4",
    name: "Shorts",
    description: "Lorem, ipsum dolor sit amet consectetur",
    price: 28.0,
  },
];

const AvailibleClothes = () => {
  const clothesList = DUMMY_CLOTHES.map((piece) => (
    <PieceItem
      key={piece.id}
      id={piece.id}
      name={piece.name}
      description={piece.description}
      price={piece.price}
    />
  ));

  return (
    <section className={styles.clothes}>
      <Card>
        <ul>{clothesList}</ul>
      </Card>
    </section>
  );
};

export default AvailibleClothes;
