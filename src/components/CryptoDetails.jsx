import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import millify from "millify";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import Loader from "./Loader";
import LineChart from "./LineChart";
import { Select } from "antd";

const CryptoDetails = () => {
  console.log(useParams())
  const { coinid } = useParams();
  const [timePeriod, setTimePeriod] = useState("3h");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinid);

  const cryptoDetails = data?.data?.coin;
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails?.["24hVolume"] && millify(cryptoDetails?.["24hVolume"])
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Approved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined className="text-lime-400"/>
      ) : (
        <StopOutlined className="text-red-600"/>
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  if (isFetching) return <Loader />;
  return (
    <div className="cryptoDetail__conatiner">
      <div className="my-8 text-center">
        <h2 className="my-4 text-2xl text-cyan-600">
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
        </h2>
        <p className="my-4">
          {cryptoDetails?.name} live price in US dollars.View value statistics,
          market cap and supply
        </p>
        <hr />
      </div>
      <Select
        defaultValue="7d"
        className="w-32 font-bold mb-3"
        placeholder="Select Timeperiod"
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => (
          <Select.Option key={date}>{date}</Select.Option>
        ))}
      </Select>
      <LineChart
        coinName={cryptoDetails?.name}
        currentPrice={millify(cryptoDetails?.price)}
        coinid={coinid}
        timePeriod={timePeriod}
      />
      <div className="grid grid-cols-1 xl:grid-cols-2 mt-10 gap-6">
        <div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg">{cryptoDetails?.name} Value Statistics</h3>
            <p>An overview showing the stats of {cryptoDetails?.name}</p>
          </div>
          {stats?.map((stat) => (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 px-4 py-8 border-b"
              
              key={stat.title}
            >
              <div className="flex">
                <p className="-mt-1">{stat.icon}</p>
                <span className="ml-4">{stat.title}</span>
              </div>
              <h4 className="sm:text-right font-bold">{stat.value}</h4>
            </div>
          ))}
        </div>
        <div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg">Other Statistics</h3>
            <p>An overview showing the stats of cryptocurrencies</p>
          </div>
          {genericStats?.map((stat) => (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 px-4 py-8 border-b"
             
              key={stat.title}
            >
              <div className="flex items-center">
                <p className="-mt-1">
                  {stat.icon}
                  
                </p><span className="ml-4">{stat.title}</span>
              </div>
              <h4 className="sm:text-right font-bold">{stat.value}</h4>
            </div>
          ))}
        </div>
      </div>
      
        <div className="my-8">
          <h3 className="font-semibold text-xl">What is {cryptoDetails?.name}?</h3>
          {HTMLReactParser(cryptoDetails?.description)}
        </div>
        <h2 className="font-semibold text-xl">{cryptoDetails.name} Links</h2>

        <div className="grid grid-cols-2 mt-4 gap-2">
          {cryptoDetails.links?.map((link) => (
            <div key={link.name}>
              <h3 >{link.type}</h3>
              <a href={link.url} target="_blank" rel="noreferrer" className="underline text-cyan-600">
                {link.name}
              </a>
            </div>
          ))}
        </div>
     
    </div>
  );
};

export default CryptoDetails;
