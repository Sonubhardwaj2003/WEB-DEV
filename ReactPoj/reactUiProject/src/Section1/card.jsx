import React from 'react';

const Card = () => {
  const segments = [
    {
      title: 'Satisfied',
      color: 'text-red-600',
      description:
        'Prime customers, that have access to bank credit and are satisfied with the current product',
      image: 'https://tse3.mm.bing.net/th/id/OIP.7WsfM47ADKisJ08BripDvwHaLH?pid=Api&P=0&h=180',
    },
    {
      title: 'Underserved',
      color: 'text-blue-600',
      description:
        'Prime customers, that have access to bank credit and are not satisfied with the current service',
      image: 'https://tse3.mm.bing.net/th/id/OIP.9r6dwmgay-Zja7-jX9y6lwHaLH?pid=Api&P=0&h=180',
    },
    {
      title: 'Underbanked',
      color: 'text-green-600',
      description:
        'Customers from near-prime and sub-prime segments with no access to bank credit',
      image: 'https://tse3.mm.bing.net/th/id/OIP.4UIXh-gKZDMy7vv6DeGMkAHaE7?pid=Api&P=0&h=180',
    },
    {
      title: 'Satisfied',
      color: 'text-red-600',
      description:
        'Prime customers, that have access to bank credit and are satisfied with the current product',
      image: 'https://tse3.mm.bing.net/th/id/OIP.7WsfM47ADKisJ08BripDvwHaLH?pid=Api&P=0&h=180',
    },
    {
      title: 'Underserved',
      color: 'text-blue-600',
      description:
        'Prime customers, that have access to bank credit and are not satisfied with the current service',
      image: 'https://tse3.mm.bing.net/th/id/OIP.9r6dwmgay-Zja7-jX9y6lwHaLH?pid=Api&P=0&h=180',
    },
    {
      title: 'Underbanked',
      color: 'text-green-600',
      description:
        'Customers from near-prime and sub-prime segments with no access to bank credit',
      image: 'https://tse3.mm.bing.net/th/id/OIP.4UIXh-gKZDMy7vv6DeGMkAHaE7?pid=Api&P=0&h=180',
    },
    
  ];

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex gap-6 p-6 bg-gray-50 min-w-max">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center space-y-4 w-64 shrink-0"
          >
            <img
              src={segment.image}
              alt={segment.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="text-gray-700 text-sm">{segment.description}</p>
            <span className={`font-semibold ${segment.color}`}>
              {segment.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;