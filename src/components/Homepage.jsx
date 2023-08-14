import React, { useEffect }  from "react";
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
    <h1 className="my-8 text-xl sm:text-3xl font-bold">Global Crypto Stats</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-4 gap-3 leading-8">
        <div>
          <h3>Total CryptoCurrencies</h3>
          <h1 className="text-xl font-bold">{millify(globalStats?.totalCoins)}</h1>
        </div>
        <div>
          <h3>Total Exchanges</h3>
          <h1 className="text-xl font-bold">{millify(globalStats?.totalExchanges)}</h1>
        </div>

        <div>
          <h3>Total Market Cap</h3>
          <h1 className="text-xl font-bold">{millify(globalStats?.totalMarketCap)}</h1>
        </div>
        <div>
          <h3>Total 24h volume</h3>
          <h1 className="text-xl font-bold">{millify(globalStats?.totalMarketCap)}</h1>
        </div>

        <div>
          <h3>Total Markets</h3>
          <h1 className="text-xl font-bold">{millify(globalStats?.totalMarketCap)}</h1>
        </div>
      </div>
      <div className="sm:flex justify-between mt-6 mb-4 text-lg md:text-2xl font-bold">
        <h2 >Top 10 CryptoCurrencies in the World</h2>
        <button className="text-sky-600 text-sm lg:text-lg hidden md:block">
          <Link to="/cryptocurrencies">Show More</Link>
        </button>
      </div>
      <Cryptocurrencies limited />
      <button className="text-sky-600 text-md md:hidden mt-2 flex ml-auto">
          <Link to="/cryptocurrencies">Show More</Link>
        </button>
      <div className="sm:flex justify-between mt-6 mb-4 text-lg md:text-2xl font-bold">
        <h2>Latest Crypto News</h2>
        <button className="text-sky-600 text-sm lg:text-lg hidden md:block"><Link to="/news">Show More</Link></button>
      </div>
      <News limited />
      <button className="text-sky-600 text-md md:hidden mt-2 flex ml-auto">
          <Link to="/news">Show More</Link>
        </button>
    </div>
  );
};

export default Homepage;
