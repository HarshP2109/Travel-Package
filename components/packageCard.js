import React from 'react';
import axios from 'axios';

const PackageCard = ({ id, name, location, descip, price }) => {
  // Function to handle the booking
  const handleBooking = async () => {
    try {
      const response = await axios.post('https://travel-package-fbk7.onrender.com/api/booked');

      if (response.status === 200) {
        console.log('Booking logged successfully!');
        alert('Booking confirmed!');
      } else {
        console.error('Failed to log booking');
        alert(response.status);
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Error while booking. Please try again.');
    }
  };

  return (
    <div
      key={id}
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500 text-sm mt-2">Location: {location}</p>
        <p className="text-gray-600 mt-4">{descip}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-blue-600">${price}</span>
          <button
            onClick={handleBooking}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
