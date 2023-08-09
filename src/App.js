import { Link, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  Exchanges,
  News,
  CryptoDetails,
} from "./components";

function App() {
  return (
    <div className="App" style={{ width: "100%",display:"flex" }}>
      <div className="navbar" style={{ width: "20%" }}>
        <Navbar />
      </div>
      <div className="main" style={{ width: "80%",overflowY:"scroll" }}>
        <div style={{minHeight:"80vh"}}><Routes>
          <Route exact path="/" Component={Homepage} />
          <Route exact path="/cryptocurrencies" Component={Cryptocurrencies} />
          <Route exact path="/crypto/:coinid" Component={CryptoDetails} />
          <Route exact path="/exchanges" Component={Exchanges} />
          <Route exact path="/news" Component={News} />
        </Routes>
        </div>
        <div className="footer" style={{textAlign:"center",display:"block",bottom:0}}>
          <h2>CryptoMania</h2>
          <h3>All rights reserved</h3>
          <div>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>

            <Link to="/news">News</Link>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
