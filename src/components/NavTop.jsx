import React, { useState } from "react";
import { Link } from "react-router-dom";
import cryptocurrency from "../images/cryptocurrency.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const NavTop = () => {
    const [toggle,setToggle]= useState(false);
    const {pathname:pathName} = useLocation();

  return (
    <div className="bg-black pt-4 px-4 text-cyan-600 h-[10vh] sticky top-0 z-50">
      <div className="flex w-[100%] mb-6">
        <img src={cryptocurrency} alt="cryptocurrency" className="w-8 h-8" />

        <Link to="/" className="text-white text-bold text-xl ml-2">
          CryptoMania
        </Link>
        <div className="ml-auto relative"><h2  onClick={()=>setToggle(!toggle)}><MenuOutlined className={!toggle?"text-white":""}
 /></h2>
        {toggle &&<div className="bg-black absolute -right-[17px] top-10 flex flex-col w-56 ml-auto">
        <Link
          to="/"
          
          className={`flex flex-wrap items-center py-2 px-4 hover:bg-sky-500 hover:text-white ${pathName=== "/"  ? "bg-sky-500 text-white":""}`}
          onClick={()=>{setToggle(false)}}
        >
          <HomeOutlined className="mr-2" />
          <p>Home</p>
        </Link>
        <Link
          to="/exchanges"
          className={`flex flex-wrap items-center py-2 px-4 hover:bg-sky-500 hover:text-white ${pathName=== "/exchanges" ? "bg-sky-500 text-white":""}`}
          onClick={()=>{setToggle(false)}}
        >
          <FundOutlined className="mr-2" />
          <p>Exchanges</p>
        </Link>
        <Link
          to="/cryptocurrencies"
          className={`flex flex-wrap items-center py-2 px-4 hover:bg-sky-500 hover:text-white ${pathName=== "/cryptocurrencies" ? "bg-sky-500 text-white":""}`}
          onClick={()=>{setToggle(false)}}
        >
          <MoneyCollectOutlined className="mr-2" />
          <p>CryptoCurrencies</p>
        </Link>
        <Link
          to="/news"
          className={`flex flex-wrap items-center py-2 px-4 hover:bg-sky-500 hover:text-white ${pathName=== "/news"? "bg-sky-500 text-white":""}`}
          onClick={()=>{setToggle(false)}}
        >
          <BulbOutlined className="mr-2" />
          <p>News</p>
        </Link>
      </div>}</div>
      </div>

      
    </div>
  );
};

export default NavTop;
