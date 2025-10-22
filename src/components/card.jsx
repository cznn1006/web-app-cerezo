
import React from 'react';

function FeatureCard({ icon, title, description, onClick }) {
  return (
    <div 
      className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;
