import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Buttons = ({ buttonsNames }) => {
  return (
    <>
      {buttonsNames.map(btnName => (
        <Button
          key={btnName}
          btnText={btnName}
          onClick={() => console.log('clicked on button: ', btnName)}
        />
      ))}
    </>
  );
};

Buttons.propTypes = {
  buttonsNames: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Buttons;
