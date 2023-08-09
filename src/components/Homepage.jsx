import React  from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "./index";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader/>;

  return (
    <div>
    <h1 className="my-8">Global Crypto Stats</h1>
      <div className="grid grid-cols-2 my-4">
        <div>
          <h3>Total CryptoCurrencies</h3>
          <h1 className="font-xxl">{millify(globalStats?.totalCoins)}</h1>
        </div>
        <div>
          <h3>Total Exchanges</h3>
          <h1>{millify(globalStats?.totalExchanges)}</h1>
        </div>

        <div>
          <h3>Total Market Cap</h3>
          <h1>{millify(globalStats?.totalMarketCap)}</h1>
        </div>
        <div>
          <h3>Total 24h volume</h3>
          <h1>{millify(globalStats?.totalMarketCap)}</h1>
        </div>

        <div>
          <h3>Total Markets</h3>
          <h1>{millify(globalStats?.totalMarketCap)}</h1>
        </div>
      </div>
      <div className="flex justify-between mt-6 mb-4">
        <h2>Top 10 CryptoCurrencies in the World</h2>
        <button>
          <Link to="/cryptocurrencies">Show More</Link>
        </button>
      </div>
      <Cryptocurrencies limited />
      <div className="flex justify-between mt-6 mb-4">
        <h2>Latest Crypto News</h2>
        <button><Link to="/news">Show More</Link></button>
      </div>
      <News limited />
    </div>
  );
};

export default Homepage;
