import React from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from 'html-react-parser';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../services/cryptoApi";
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
import LineChart from "./LineChart";
const CryptoDetails = () => {
  const { coinid } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinid);
  const { data:coinHistory} = useGetCryptoHistoryQuery(coinid);
  

  const cryptoDetails = data?.data?.coin;

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
        <CheckOutlined />
      ) : (
        <StopOutlined />
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

  if (isFetching) return "loading...";
  return (
    <div className="cryptoDetail__conatiner">
      <div className="coin__heading__container">
        <h2>
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
        </h2>
        <p>
          {cryptoDetails?.name} live price in US dollars.View value statistics,
          market cap and supply
        </p>
        <hr />
      </div>
      {/* <LineChart coinHistroy={coinData} coinName={cryptoDetails?.name} currentPrice={millify(cryptoDetails?.price)}/> */}
      <div
        className="stats__container"
        style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
      >
        <div>
          <div>
            <h3>{cryptoDetails?.name} Value Statistics</h3>
            <p>An overview showing the stats of {cryptoDetails?.name}</p>
          </div>
          {stats?.map((stat) => (
            <div style={{marginRight:"150px"}} key={stat.title}> <div
              style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" ,paddingLeft:"10px",paddingRight:"10px"}}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p  style={{marginRight: "10px"}}>{stat.icon}</p>
                <p>{stat.title}</p>
              </div>
              <h4 style={{textAlign: "right"}}>{stat.value}</h4>
            </div>
            <hr />
            </div>
          ))}
        </div>
        <div>
          <div>
            <h3>Other Statistics</h3>
            <p>An overview showing the stats of app cryptocurrencies</p>
          </div>
          {genericStats?.map((stat) => (
            <div style={{marginRight:"150px"}} key={stat.title}><div
              style={{ display: "grid", justifyConntent:"space-between",gridTemplateColumns: "repeat(2,1fr)",paddingLeft:"10px",paddingRight:"10px"}}
            >
              <div style={{ display: "flex", alignItems: "center",}}>
                <p style={{marginRight: "10px"}}>{stat.icon}</p>
                <p>{stat.title}</p>
              </div>
              <h4 style={{textAlign: "right"}}>{stat.value}</h4>
            </div>
            <hr />
            </div>
          ))}
        </div>
      </div>
      <div  >
       <div> <h3>What is {cryptoDetails?.name}?</h3>
        {HTMLReactParser(cryptoDetails?.description)}
          </div>
          <h2 className="coin-details-heading">{cryptoDetails.name} Links</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)"}}>{cryptoDetails.links?.map((link) => (
            <div className="coin-link" key={link.name}>
             <h3 className="link-name">{link.type}</h3>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
