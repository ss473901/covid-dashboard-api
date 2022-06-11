import React from "react";
import styles from "./Cards.module.css";
import { Line } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";
import { findAllByAltText } from "@testing-library/react";

const Chart: React.FC = () => {
  const daily = useSelector(selectDaily);
  const dates = daily.map(({ Date }) => Date);

  const lineChart = daily[0] && (
    <Line
      data={{
        labels: dates.map((date) => new Date(date).toDateString()),

        datasets: [
          {
            data: daily.map((data) => data.Confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            shoLIne: false,
          },
          {
            data: daily.map((data) => data.Recovered),
            label: "Recoverd",
            borderColor: "green",
            shoLine: false,
          },
          {
            data: daily.map((data) => data.Deaths),
            label: "Deaths",
            borderColor: "#ff3370",
            showLine: false,
          },
        ],
      }}
    />
  );

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
