// src/pages/user/listing.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton';
import SportsterX from '../../assets/2022_toyota_gr-supra_coupe_20_fq_oem_1_600.avif';
import LuxuryCruiser from '../../assets/2025_toyota_corolla-cross_4dr-suv_l_fq_oem_1_600.avif';
import EcoCompact from '../../assets/2924733.jpg';

const cars = [
  { id: 1, name: 'Sportster X', image: SportsterX },
  { id: 2, name: 'Luxury Cruiser', image: LuxuryCruiser },
  { id: 3, name: 'Eco Compact', image:  EcoCompact},
];

function Listing() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedIndex = location.state?.index;

  const handleOrder = (carId) => {
    navigate('/order', { state: { carId } });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold mb-8">Available Cars</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div key={car.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
              <PrimaryButton label="Order This Car" onClick={() => handleOrder(car.id)} type="primary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;
