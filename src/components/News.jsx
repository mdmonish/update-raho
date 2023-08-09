import React, { useState } from "react";
import moment from "moment";
import { useGetNewsQuery } from "../services/newsApi";
import { Select } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";


const News = ({ limited }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews, isFetching } = useGetNewsQuery({
    newsCategory,
    count: limited ? 6 : 100,
  });
  const { data } = useGetCryptosQuery(100);


  if (isFetching) return "loading...";
  return (
    <div>
    {!limited && (
        
          <Select
            showSearch
            value={newsCategory}
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Select.Option key="Cryptocurrency">Cryptocurrency</Select.Option>
            {data?.data?.coins?.map((currency) => <Select.Option key={currency.name}>{currency.name}</Select.Option>)}
          </Select>
        
      )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {cryptoNews?.value?.map((news, i) => (
          <div
            key={i}
            style={{ border: "1px solid black", margin: 10, padding: 8 }}
          >
            <a
              href={news.url}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div style={{display:"flex"}}>
                <h3 style={{margin:0}}>{news.name}</h3>
                <img
                  src={
                    news.image?.thumbnail?.contentUrl ||
                    "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg"
                  }
                  style={{ width: "80px", height: "80px" }}
                  alt=""
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.subString(0, 100)}`
                  : news.description}
              </p>
              <div style={{display:"flex",justifyContent:"space-between"}} >
              <div style={{display:"flex", alignItems:"center"}}>
                <img
                  src={news?.provider[0]?.image?.thumbnail?.contentUrl}
                  alt=""
                  style={{ width: "40px", height: "40px", opacity: 1 }}
                />

                <p style={{margin:0}}>{news?.provider[0]?.name}</p>
                </div>
                
                <p>{moment(news.datePublished).startOf("ss").fromNow()}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
