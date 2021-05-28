import PropTypes from 'prop-types';
import StatisticsTableItem from '../StatisticsTableItem/StatisticsTableItem';
import styles from './StatisticsTable.module.css';

const StatisticsTable = ({ good, bad, neutral, positivePercentage, total }) => {
  const ratingArr = Object.entries({
    good,
    bad,
    neutral,
    total,
    positivePercentage,
  });

  return (
    <ul className={styles['Stats__list']}>
      {ratingArr.map(ratingBlock => (
        <StatisticsTableItem ratingBlock={ratingBlock} key={ratingBlock[0]} />
      ))}
    </ul>
  );
};

StatisticsTable.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default StatisticsTable;
