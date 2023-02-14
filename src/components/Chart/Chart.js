import React from 'react';
import PropTypes from 'prop-types';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const { dataPoints } = props;
  const dataPointValue = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {dataPoints.map((p) => (
        <ChartBar
          key={p.label}
          value={p.value}
          maxValue={totalMaximum}
          label={p.label}
        />
      ))}
    </div>
  );
};

Chart.propTypes = {
  dataPoints: PropTypes.string.isRequired,
};
export default Chart;
