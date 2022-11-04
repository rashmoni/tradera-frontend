// Node modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NewAd from "./pages/NewAd";
import SingleProduct from "./pages/SingleProduct";
import "./styles/style.css"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/selling/new" element={<NewAd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
