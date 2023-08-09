import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ limited }) => {
  const count = limited ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptoData, setCryptoData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const filtered = cryptoList?.data?.coins?.filter((obj) =>
      obj.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setCryptoData(filtered);
  }, [inputValue, cryptoList]);
  
  if (isFetching) return "loading...";
  return (
    <>
      {!limited && (
        <div>
          <input
            type="text"
            value={inputValue}
            placeholder="search here"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {cryptoData?.map((currency, i) => (
          <div
            key={i}
            style={{ border: "1px solid black", margin: 10, padding: 8 }}
          >
            <Link to={`/crypto/${currency.uuid}`} style={{textDecoration:"none"}}>
              <div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  <h2 style={{margin:0}}>
                    {currency.rank}. {currency.name}
                  </h2>
                  <img
                    src={currency.iconUrl}
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <h3>Price: {millify(currency.price)}</h3>
                <h3>Market: {millify(currency.marketCap)}</h3>
                <h3>Daily: {millify(currency.change)}%</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cryptocurrencies;
