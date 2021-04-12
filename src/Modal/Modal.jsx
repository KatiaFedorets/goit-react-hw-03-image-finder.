import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ onCloseModal, children }) => {
  return (
    <div className={styles.Overlay} onClick={onCloseModal}>
      <div className={styles.Modal}>{children}</div>
    </div>
  );
};

Modal.defaultProps = {
  onCloseModal: () => {},
};

Modal.propTypes = {
  onCloseModal: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default Modal;
