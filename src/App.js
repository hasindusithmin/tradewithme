

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bitcoin from "./pages/Bitcoin";
import Commodities from "./pages/Commodities";
import Crypto from "./pages/Crypto";
import Currencies from "./pages/Currencies";
import Indices from "./pages/Indices";
import Stocks from "./pages/Stocks";
import Notfound from "./pages/Notfound";
import About from "./pages/About";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="bitcoin" element={<Bitcoin itemsPerPage={6} />} />
          <Route path="commodities" element={<Commodities itemsPerPage={6}/>} />
          <Route path="crypto" element={<Crypto itemsPerPage={6} />} />
          <Route path="currencies" element={<Currencies itemsPerPage={6} />} />
          <Route path="indices" element={<Indices itemsPerPage={6} />} />
          <Route path="stocks" element={<Stocks itemsPerPage={6} />} />
          <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
