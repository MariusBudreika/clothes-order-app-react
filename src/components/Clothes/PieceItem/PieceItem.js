import React, { useContext } from "react";

import styles from "./PieceItem.module.scss";
import PieceItemForm from "./PieceItemForm";
import CartContext from "../../../assets/store/cart-context";

const PieceItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li>
      <div className={styles.piece}>
        <h3>{props.name}</h3>
        <div className={styles.pieceDescription}>{props.description}</div>
        <div className={styles.pieceContainer}>
          <div className={styles.piecePrice}>{price}</div>
          <div className={styles.pieceForm}>
            <PieceItemForm onAddToCart={addToCartHandler} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default PieceItem;
