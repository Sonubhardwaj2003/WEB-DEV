// Card.jsx
import React from 'react';
// here i.e title ,description ... all the the props 
const Card = ({ title, description, imageUrl, buttonText }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;