import React from "react";
import { Link } from "react-router-dom";
import cryptocurrency from "../images/cryptocurrency.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname: pathName } = useLocation();

  return (
    <div className="bg-black pt-8 px-4 text-cyan-600 h-[99.8vh] w-56">
      <div className="flex w-[100%] mb-6">
        <img src={cryptocurrency} alt="cryptocurrency" className="w-10 h-10" />

        <Link to="/" className="text-white text-bold text-2xl ml-2">
          CryptoMania
        </Link>
      </div>

      <div>
        <Link
          to="/"
          className={`flex flex-wrap items-center py-2 px-4 ${
            pathName === "/" ? "bg-sky-500 text-white" : ""
          }`}
        >
          <HomeOutlined className="mr-2" />
          <p>Home</p>
        </Link>
        <Link
          to="/exchanges"
          className={`flex flex-wrap items-center py-2 px-4 ${
            pathName === "/exchanges" ? "bg-sky-500 text-white" : ""
          }`}
        >
          <FundOutlined className="mr-2" />
          <p>Exchanges</p>
        </Link>
        <Link
          to="/cryptocurrencies"
          className={`flex flex-wrap items-center py-2 px-4 ${
            pathName === "/cryptocurrencies" ? "bg-sky-500 text-white" : ""
          }`}
        >
          <MoneyCollectOutlined className="mr-2" />
          <p>CryptoCurrencies</p>
        </Link>
        <Link
          to="/news"
          className={`flex flex-wrap items-center py-2 px-4 ${
            pathName === "/news" ? "bg-sky-500 text-white" : ""
          }`}
        >
          <BulbOutlined className="mr-2" />
          <p>News</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
