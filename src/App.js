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
    <div className="flex overflow-hidden">
      <div className="border border-black hidden sm:block">
        <Navbar />
      </div>
      <div className="px-8 flex-1 h-[99.8vh] overflow-y-auto">
        <div><Routes>
          <Route exact path="/" Component={Homepage} />
          <Route exact path="/cryptocurrencies" Component={Cryptocurrencies} />
          <Route exact path="/crypto/:coinid" Component={CryptoDetails} />
          <Route exact path="/exchanges" Component={Exchanges} />
          <Route exact path="/news" Component={News} />
        </Routes>
        </div>
        <div className="flex justify-between text-center py-4 mt-16 -mx-8 px-8 bg-black text-white">
          <div>CopyRights @2023&nbsp;<span className="text-cyan-600">CryptoMania</span>.&nbsp;
          All rights reserved
          </div>
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
