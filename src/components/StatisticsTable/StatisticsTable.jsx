import PropTypes from 'prop-types';
import StatisticsTableItem from '../StatisticsTableItem/StatisticsTableItem';
import styles from './StatisticsTable.module.css';

const StatisticsTable = ({
  good,
  bad,
  neutral,
  positivePercentage = 0,
  total,
}) => {
  const ratingArr = Object.entries({
    good,
    bad,
    neutral,
    total,
    positivePercentage,
  });
  const sectionShow = total ? 1 : 0;

  return (
    <ul style={{ opacity: sectionShow }} className={styles['Stats__list']}>
      {ratingArr.map(ratingBlock => (
        <StatisticsTableItem ratingBlock={ratingBlock} key={ratingBlock[0]} />
      ))}
    </ul>
  );
};

StatisticsTable.propTypes = {
  rating: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default StatisticsTable;
