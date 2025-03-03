import PropTypes from "prop-types";
import styles from "./FooterListComponent.module.css";

function FooterlistComponent(props) {
  return (
    <>
      <ul className={styles.list}>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

FooterlistComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FooterlistComponent;
