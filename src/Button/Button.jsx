import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button type="button" onClick={onClick} className={styles.Button}>
    Load more
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  clickHandler: PropTypes.func,
};
export default Button;
