import React  from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "./index";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "loading...";

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)",border:"1px solid black", margin: 10, padding: 8}}>
        <div>
          <h3>Total CryptoCurrencies</h3>
          <h4>{millify(globalStats?.totalCoins)}</h4>
        </div>
        <div>
          <h3>Total Exchanges</h3>
          <h4>{millify(globalStats?.totalExchanges)}</h4>
        </div>

        <div>
          <h3>Total Market Cap</h3>
          <h4>{millify(globalStats?.totalMarketCap)}</h4>
        </div>
        <div>
          <h3>Total 24h volume</h3>
          <h4>{millify(globalStats?.totalMarketCap)}</h4>
        </div>

        <div>
          <h3>Total Markets</h3>
          <h4>{millify(globalStats?.totalMarketCap)}</h4>
        </div>
      </div>
      <div className="crypto__top10" style={{ display: "flex",margin: 10,justifyContent:"space-between" }}>
        <h2 style={{ margin: 0 }}>Top 10 CryptoCurrencies in the World</h2>
        <button>
          <Link to="/cryptocurrencies" style={{textDecoration:"none"}}>Show More</Link>
        </button>
      </div>
      <Cryptocurrencies limited />
      <div className="crypto__news" style={{ display: "flex",margin: 10, justifyContent:"space-between" }}>
        <h2 style={{ margin: 0 }}>Latest Crypto News</h2>
        <button><Link to="/news" style={{textDecoration:"none"}}>Show More</Link></button>
      </div>
      <News limited />
    </div>
  );
};

export default Homepage;
