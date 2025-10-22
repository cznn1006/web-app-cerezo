
import React from 'react';

const BUTTON_TYPES = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white',
  secondary: 'bg-green-500 hover:bg-green-600 text-white',
  outline: 'border border-gray-500 text-gray-500 hover:bg-gray-100',
};

function PrimaryButton({ label, onClick, type = 'primary' }) {
  const className = `${BUTTON_TYPES[type] || BUTTON_TYPES.primary} font-bold py-2 px-4 rounded transition-colors`;
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}

export default PrimaryButton;
