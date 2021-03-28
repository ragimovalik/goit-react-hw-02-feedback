import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.Buttons}>
      {options.map(btnName => (
        <Button
          key={btnName}
          btnText={btnName}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  buttonsNames: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
