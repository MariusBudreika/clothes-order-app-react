import React from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input className={styles.input} {...props.input} />
    </div>
  );
};

export default Input;
