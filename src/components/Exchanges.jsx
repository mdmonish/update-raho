import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useGetExchangesQuery } from "../services/exchangesApi";
import Accordion from "./Accordion";
import Loader from "./Loader";


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

  if (isFetching) return <Loader />;

  return (
    <div>
      <Accordion items={exchangesList} active={activeIndex} setActive={setActiveIndex}/>
    </div>
  );
};

export default Exchanges;
