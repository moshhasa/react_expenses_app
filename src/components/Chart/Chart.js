import React from "react";
import ChartBar from "./ChartBar";
import styles from "./Chart.module.css";

const Chart = ({ dataPoints }) => {
    const dataPoitsValues = dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPoitsValues);
  return (
    <div className={styles.chart}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
