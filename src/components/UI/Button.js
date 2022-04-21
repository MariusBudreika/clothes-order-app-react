import React from "react";
import styles from "./Button.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Button = ({ counter = 0 }) => {
  return (
    <button className={styles.button}>
      <span className={styles.buttonIconContainer}>
        <AiOutlineShoppingCart className={styles.buttonIcon} />
      </span>
      <span>Your Cart</span>
      <span className={styles.buttonCounter}>({counter})</span>
    </button>
  );
};

export default Button;
