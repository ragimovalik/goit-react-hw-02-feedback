import PropTypes from 'prop-types';
import styles from './StatisticsTableItem.module.css';

const StatisticsTableItem = ({ ratingBlock }) => {
  console.log(ratingBlock);

  return (
    <li className={styles.Stats__item}>
      <div className={styles.Stats__name}>
        {ratingBlock[0] === 'positivePercentage'
          ? 'Positive Feedback (%)'
          : ratingBlock[0]}
        <span className={styles.Stats__digit}>{ratingBlock[1]}</span>
      </div>
    </li>
  );
};

StatisticsTableItem.propTypes = {
  ratingBlock: PropTypes.array.isRequired,
};

export default StatisticsTableItem;
