import Hero from './Component/Hero/Hero';
import Landing from './Component/Landing/Landing';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Code from './Component/Code/Code'
import Account from './Component/Acount/Account'

export default function App() {
  return (
      <Router>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/code" element={<Code />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      {/* <Account/> */}
      </div>
    </Router>
  );
}
