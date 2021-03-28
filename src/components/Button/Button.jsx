import PropTypes from 'prop-types';
import styles from './Button.module.css';

const bgcSetter = name => {
  switch (name) {
    case 'good':
      return '#1496bb';

    case 'neutral':
      return '#f26d21';

    case 'bad':
      return '#cd594a';

    default:
      return 'ligthgray';
  }
};

const Button = ({ btnText, onLeaveFeedback }) => (
  <button
    style={{ backgroundColor: bgcSetter(btnText) }}
    className={styles.Button}
    onClick={onLeaveFeedback}
  >
    {btnText}
  </button>
);

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
};

export default Button;
