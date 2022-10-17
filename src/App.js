

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bitcoin from "./pages/Bitcoin";
import Commodities from "./pages/Commodities";
import Crypto from "./pages/Crypto";
import Currencies from "./pages/Currencies";
import Indices from "./pages/Indices";
import Stocks from "./pages/Stocks";










function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="bitcoin" element={<Bitcoin />} />
          <Route path="commodities" element={<Commodities />} />
          <Route path="crypto" element={<Crypto />} />
          <Route path="currencies" element={<Currencies />} />
          <Route path="indices" element={<Indices />} />
          <Route path="stocks" element={<Stocks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
