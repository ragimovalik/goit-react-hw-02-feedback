import PropTypes from 'prop-types';

const TitleOfSection = ({ text }) => {
  return <h3>{text}</h3>;
};

TitleOfSection.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleOfSection;
