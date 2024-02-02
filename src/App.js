// import statements for React and necessary components

// Update the import statement to use named imports for the necessary components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Product from "./components/product";
import Web from "./components/web";
import Iot from "./components/iot";
import Healthcare from "./components/healthcare";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="web" element={<Web/>} />
          <Route path="/iot" element={<Iot />} />
          <Route path="/healthcare" element={<Healthcare />} />
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
