import "./App.css";
import Products from "./components/Products/Products.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";

function App() {
  return (
<<<<<<< HEAD
    <div>
      <Router>
=======
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
>>>>>>> e83cacb839a10aaea67099533c41f8ba6e85d756
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element="Not Found" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
