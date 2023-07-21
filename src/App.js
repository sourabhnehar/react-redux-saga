import "./App.css";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
import Cart from "./component/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
