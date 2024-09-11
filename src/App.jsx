import Layout from "./Layout";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Pages/Products/Products";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
