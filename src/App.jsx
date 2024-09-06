import Layout from './components/Layout';
import Homepage from './components/Pages/Homepage/Homepage';
import About from './components/Pages/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Pages/Products/Products';

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
