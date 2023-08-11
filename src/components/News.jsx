import React, { useState } from "react";
import moment from "moment";
import { useGetNewsQuery } from "../services/newsApi";
import { Select } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";


const News = ({ limited }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews, isFetching } = useGetNewsQuery({
    newsCategory,
    count: limited ? 6 : 100,
  });
  const { data } = useGetCryptosQuery(100);


  if (isFetching) return <Loader />;
  return (
    <div className={!limited ? "min-h-[84vh]":""}>
    {!limited && (
        
          <Select
            showSearch
            value={newsCategory}
            className="my-8 font-bold w-72"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Select.Option key="Cryptocurrency">Cryptocurrency</Select.Option>
            {data?.data?.coins?.map((currency) => <Select.Option key={currency.name}>{currency.name}</Select.Option>)}
          </Select>
        
      )}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {cryptoNews?.value?.map((news, i) => (
          <div
            key={i}
            className="border-2 shadow-lg rounded-md p-6 hover:scale-105"
          >
            <a
              href={news.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex">
                <h2 className="font-bold text-lg">{news.name}</h2>
                <img
                  src={
                    news.image?.thumbnail?.contentUrl ||
                    "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg"
                  }
                  className="w-20 h-20 ml-2"
                  alt=""
                />
              </div>
              <p className="my-4 text-sm">
                {news.description > 100
                  ? `${news.description.subString(0, 100)}`
                  : news.description}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 items-center mt-6" >
              <div className="col-span-2 flex items-center">
                <img
                  src={news?.provider[0]?.image?.thumbnail?.contentUrl}
                  alt=""
                  className="w-7 h-7 opacity-1 mr-2"
                />

                <p>{news?.provider[0]?.name}</p>
                </div>
                <div className="col-span-1 text-left  mt-2 lg:mt-0 lg:text-right">
                <p>{moment(news.datePublished).startOf("ss").fromNow()}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
