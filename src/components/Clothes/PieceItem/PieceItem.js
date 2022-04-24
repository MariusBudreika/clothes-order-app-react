import React from "react";
import styles from "./PieceItem.module.scss";

const PieceItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div className={styles.piece}>
        <h3>{props.name}</h3>
        <div className={styles.pieceDescription}>{props.description}</div>
        <div className={styles.piecePrice}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default PieceItem;
