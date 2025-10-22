
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton';
import FeatureCard from '../../components/card';

function LandingPage() {
  const navigate = useNavigate();

  const handleExplore = (index) => {
   
    navigate('/listing', { state: { index } });
  };

  const handleOrder = () => {
    navigate('/order');
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to CarCompany</h1>
        <p className="text-gray-700 mb-6">Discover your dream car today.</p>
        <PrimaryButton label="Explore Cars" onClick={() => handleExplore()} type="primary" />
        <span className="mx-2" />
        <PrimaryButton label="Order Now" onClick={handleOrder} type="secondary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon="🚗"
          title="Performance"
          description="High‑speed driving with top specs."
          onClick={() => handleExplore(0)}
        />
        <FeatureCard 
          icon="🎨"
          title="Design"
          description="Sleek designs and luxurious interiors."
          onClick={() => handleExplore(1)}
        />
        <FeatureCard 
          icon="⚙️"
          title="Customization"
          description="Make the car truly yours."
          onClick={() => handleExplore(2)}
        />
      </div>
    </div>
  );
}

export default LandingPage;
