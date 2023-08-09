import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useGetExchangesQuery } from "../services/exchangesApi";
import Accordion from "./Accordion";


const Exchanges = () => {
  const { data: exchanges, isFetching } = useGetExchangesQuery();
  const [exchangesList, setExchangesList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!isFetching) {
      const filtered = _.sortBy(
        exchanges?.filter((val) => val.reported_rank),
        ["reported_rank"]
      );
      setExchangesList(filtered);
    }
  }, [isFetching, exchanges]);

  if (isFetching) return "loading...";

  console.log(exchangesList);
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        <h4>Exchanges</h4>
        <h4>24h Trade Volume</h4>
        <h4>Markets</h4>
        <h4>Changes</h4>
      </div>
      <Accordion items={exchangesList} active={activeIndex} setActive={setActiveIndex}/>
    </div>
  );
};

export default Exchanges;
