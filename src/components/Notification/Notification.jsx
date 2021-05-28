import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.defaultProps = {
  message: 'There is nothing to show',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
