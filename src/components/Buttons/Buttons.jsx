import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Buttons = ({ buttonsNames, onClick }) => {
  return buttonsNames.map(btnName => (
    <Button key={btnName} btnText={btnName} onClick={onClick} />
  ));
};

Buttons.propTypes = {
  buttonsNames: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Buttons;
