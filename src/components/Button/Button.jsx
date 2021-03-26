import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

console.dir(createUseStyles);

const Button = ({ btnText }) => <button>{btnText}</button>;

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
};

export default Button;
