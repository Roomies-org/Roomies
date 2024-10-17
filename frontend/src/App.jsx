import Hero from './Component/Hero/Hero';
import Landing from './Component/Landing/Landing';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
      <Router>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </Router>
  );
}
