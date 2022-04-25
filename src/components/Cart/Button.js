import React, { useContext } from "react";
import styles from "./Button.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../../assets/store/cart-context";

const Button = (props, { counter = 0 }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.buttonIconContainer}>
        <AiOutlineShoppingCart className={styles.buttonIcon} />
      </span>
      <span>Your Cart</span>
      <span className={styles.buttonCounter}>({numberOfCartItems})</span>
    </button>
  );
};

export default Button;
