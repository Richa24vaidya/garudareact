// import statements for React and necessary components

// Update the import statement to use named imports for the necessary components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
