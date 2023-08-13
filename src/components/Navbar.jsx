import React from "react";
import { Link } from "react-router-dom";
import cryptocurrency from "../images/cryptocurrency.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";

const Navbar = ({tab,setTab}) => {
  

  const handleTab = (index) =>{
    setTab(index);
  }
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
          className={`flex flex-wrap items-center py-2 px-4 hover:bg-sky-500 hover:text-white ${tab ===0 ? "bg-sky-500 text-white":""}`}
          onClick={()=>handleTab(0)}
        >
          <HomeOutlined className="mr-2" />
          <p>Home</p>
        </Link>
        <Link
          to="/exchanges"
          className={`flex flex-wrap items-center py-2 px-4 hover:bg-sky-500 hover:text-white ${tab ===1 ? "bg-sky-500 text-white":""}`}
          onClick={()=>handleTab(1)}
        >
          <FundOutlined className="mr-2" />
          <p>Exchanges</p>
        </Link>
        <Link
          to="/cryptoCurrencies"
          className={`flex flex-wrap items-center py-2 px-4 hover:bg-sky-500 hover:text-white ${tab ===2 ? "bg-sky-500 text-white":""}`}
          onClick={()=>handleTab(2)}
        >
          <MoneyCollectOutlined className="mr-2" />
          <p>CryptoCurrencies</p>
        </Link>
        <Link
          to="/news"
          className={`flex flex-wrap items-center py-2 px-4 hover:bg-sky-500 hover:text-white ${tab ===3 ? "bg-sky-500 text-white":""}`}
          onClick={()=>handleTab(3)}
        >
          <BulbOutlined className="mr-2" />
          <p>News</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
