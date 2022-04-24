import React from "react";
import styles from "./PieceItem.module.scss";
import PieceItemForm from "./PieceItemForm";

const PieceItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div className={styles.piece}>
        <h3>{props.name}</h3>
        <div className={styles.pieceDescription}>{props.description}</div>
        <div className={styles.pieceContainer}>
          <div className={styles.piecePrice}>{price}</div>
          <div className={styles.pieceForm}>
            <PieceItemForm />
          </div>
        </div>
      </div>
    </li>
  );
};

export default PieceItem;
