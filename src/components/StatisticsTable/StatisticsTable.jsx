// import PropTypes from 'prop-types';
import StatisticsTableItem from '../StatisticsTableItem/StatisticsTableItem';

const StatisticsTable = ({ rating }) => {
  const ratingArr = Object.entries(rating);

  return (
    <ul>
      {ratingArr.map(ratingBlock => (
        <StatisticsTableItem ratingBlock={ratingBlock} key={ratingBlock[0]} />
      ))}
    </ul>
  );
};

// StatisticsTable.propTypes = {
//   rating: PropTypes.arrayOf(PropTypes.string.isRequired),
// };

export default StatisticsTable;
