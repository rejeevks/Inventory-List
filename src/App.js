import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
import AddProducts from "./components/AddProducts";
import RemoveProducts from "./components/RemoveProducts";
import ListProducts from "./components/ListProducts";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/removeproducts" element={<RemoveProducts />} />
          <Route path="/listproducts" element={<ListProducts />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
