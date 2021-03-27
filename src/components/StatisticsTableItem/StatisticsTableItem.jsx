import PropTypes from 'prop-types';

const StatisticsTableItem = ({ ratingBlock }) => {
  return (
    <li>
      <div>
        {ratingBlock[0]}
        <span>{ratingBlock[1]}</span>
      </div>
    </li>
  );
};

StatisticsTableItem.propTypes = {
  ratingBlock: PropTypes.array,
};

export default StatisticsTableItem;
