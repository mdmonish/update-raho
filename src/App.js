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
    <div className="flex flex-row overflow-hidden">
      <div className="basis-1/5 relative">
        <Navbar />
      </div>
      <div className="basis-4/5 px-8 w-[100%]">
        <div style={{minHeight:"80vh"}}><Routes>
          <Route exact path="/" Component={Homepage} />
          <Route exact path="/cryptocurrencies" Component={Cryptocurrencies} />
          <Route exact path="/crypto/:coinid" Component={CryptoDetails} />
          <Route exact path="/exchanges" Component={Exchanges} />
          <Route exact path="/news" Component={News} />
        </Routes>
        </div>
        <div className="text-center py-10 mt-16 -mx-8 bg-black text-white">
          <h2>CopyRights @2023&nbsp;<span className="text-cyan-600">CryptoMania</span></h2>
          <h3>All rights reserved</h3>
          <div className="text-cyan-600">
            <Link to="/" className="underline">Home</Link>&nbsp;&nbsp;
            <Link to="/exchanges" className="underline">Exchanges</Link>&nbsp;&nbsp;
            <Link to="/news" className="underline">News</Link>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
