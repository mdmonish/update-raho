import React, { useEffect, useState } from "react";
import { useGetCryptoHistoryQuery } from "../services/cryptoApi";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import moment from "moment/moment";
Chart.register(...registerables);

const LineChart = ({ coinid, timePeriod, currentPrice, coinName }) => {
  const { data: coinHistory, isFetching } = useGetCryptoHistoryQuery({
    coinid,
    timePeriod,
  });
  const [coinTimestamp, setCoinTimestamp] = useState([]);
  const [coinPrice, setCoinPrice] = useState([]);
  const [change, setChange] = useState("");

  useEffect(() => {
    if (!isFetching) {
      setChange(coinHistory?.data?.change);
      const mapped = coinHistory?.data?.history?.map(d =>
        moment.unix(d.timestamp).format("DD-MMM-YYYY")
      );
      const mappedPrice = coinHistory?.data?.history?.map(data => data.price);
      setCoinPrice(mappedPrice);
      setCoinTimestamp(mapped);
    }
  }, [isFetching, coinHistory]);
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
    backgroundColor:"black"
  };

  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };
  return (
    <>
      <div className="flex md:items-center justify-between mb-6 flex-col md:flex-row">
        <h2 className="text-cyan-600 font-bold text-xl">{coinName} Price Chart</h2>
        <div className="flex justify-between">
          <h4 className="mr-6">Changes : <span className="font-bold">{change}%</span></h4>
          <h4>
            Current {coinName} Price: <span className="font-bold">$ {currentPrice}</span>
          </h4>
        </div>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
