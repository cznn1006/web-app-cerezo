// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import LandingPage from './pages/user/Landingpage';
import Listing from './pages/user/listing';
import Order from './pages/user/order';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
