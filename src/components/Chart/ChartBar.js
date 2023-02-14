import React from 'react';
import PropTypes from 'prop-types';
import './ChartBar.css';

const ChartBar = (props) => {
  const { value, label, maxValue } = props;

  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }} />
      </div>
      <div className="chat-bar__label">{label}</div>
    </div>
  );
};

ChartBar.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxValue: PropTypes.string.isRequired,
};
export default ChartBar;
