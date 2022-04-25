import React from "react";
import styles from "./Input.module.scss";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} className={styles.input} {...props.input} />
    </div>
  );
});

export default Input;
