import PropTypes from 'prop-types';
import styles from './PageTitle.module.css';

const PageTitle = ({ title }) => {
  return <h1 className={styles.PageTitle}>{title}</h1>;
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
