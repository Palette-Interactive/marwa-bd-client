import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/main/HomePage";
import OrderPage from "./pages/order-page/main/OrderPage";

function App() {

  return (
    
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/order" element={<OrderPage/>} />
      </Routes>
    </div>
  
  );
}

export default App;
