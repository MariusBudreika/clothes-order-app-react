import clothesImage from "../../assets/clothes.jpg";
import Button from "../UI/Button";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Clothes Market</h1>
        <Button />
      </header>
      <div className={styles.headerImgBox}>
        <img className={styles.headerImg} src={clothesImage} alt="" />
      </div>
    </>
  );
};

export default Header;
