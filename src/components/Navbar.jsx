
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-semibold cursor-pointer" onClick={() => navigate('/')}>
          CarCompany
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/listing" className="hover:text-blue-600">Listing</Link>
          <Link to="/order" className="hover:text-blue-600">Order</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
