import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

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

  if (isFetching) return <Loader/>;
  return (
    <>
      {!limited && (
        <div className="text-center my-8">
          <input
            type="text"
            className="border px-2 py-1 w-96 rounded-sm shadow-lg"
            value={inputValue}
            placeholder="Search here"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      )}
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {cryptoData?.map((currency, i) => (
          <div
            key={i}
            className="border-2 shadow-lg rounded-md p-6 hover:scale-105"
            
          >
            <Link to={`/crypto/${currency.uuid}`}>
            
                <div className="flex justify-between">
                  <h2 className="font-bold text-lg">
                    {currency.rank}. {currency.name}
                  </h2>
                  <img
                    src={currency.iconUrl}
                    alt=""
                    className="w-8 h-8"
                  />
                </div>
                <div className="mt-10">
                <h3 className="py-1.5">Price: {millify(currency.price)}</h3>
                <h3 className="py-1.5">Market: {millify(currency.marketCap)}</h3>
                <h3 className="py-1.5">Daily: {millify(currency.change)}%</h3>
              </div>

            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cryptocurrencies;
