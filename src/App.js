

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bitcoin from "./pages/Bitcoin";
import Commodities from "./pages/Commodities";
import Crypto from "./pages/Crypto";
import Currencies from "./pages/Currencies";
import Indices from "./pages/Indices";
import Stocks from "./pages/Stocks";
import Notfound from "./pages/Notfound";


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="bitcoin" element={<Bitcoin itemsPerPage={5} />} />
          <Route path="commodities" element={<Commodities itemsPerPage={5}/>} />
          <Route path="crypto" element={<Crypto itemsPerPage={5} />} />
          <Route path="currencies" element={<Currencies itemsPerPage={5} />} />
          <Route path="indices" element={<Indices itemsPerPage={5} />} />
          <Route path="stocks" element={<Stocks itemsPerPage={5} />} />
          <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
