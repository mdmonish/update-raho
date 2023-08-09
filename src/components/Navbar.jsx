import React from "react";
import { Link } from "react-router-dom";
import cryptocurrency from "../images/cryptocurrency.png";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined} from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className="navabr__container"  style={{background:"lightgray",minWidht:"100%",minHeight: "100%",position:"fixed"}}>
      <div className="avatar" style={{display:"flex", alignItems: "center",justifyContent:"space-between"}}>
        <img
          src={cryptocurrency}
          alt="cryptocurrency"
          style={{ background: "black",width:"60px",height:"60px" }}
        />
         <div className="logo" >
        <Link to="/" style={{textDecoration:"none"}}>CryptoMania</Link>
      </div>
      </div>
     
      <div className="menu" style={{display:"flex",flexDirection:"column"}}>
        <Link to="/" style={{textDecoration:"none"}}><HomeOutlined/>Home</Link>
        <Link to="/exchanges" style={{textDecoration:"none"}}><FundOutlined/>Exchanges</Link>
        <Link to="/cryptoCurrencies" style={{textDecoration:"none"}}><MoneyCollectOutlined/>CryptoCurrencies</Link>
        <Link to="/news" style={{textDecoration:"none"}}><BulbOutlined/>News</Link>
      </div>
    </div>
  );
};

export default Navbar;
