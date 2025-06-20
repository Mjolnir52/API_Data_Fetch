import React, { useState } from 'react';

const NewData = () => {
  const [apiData, setApiData] = useState([]);

  const fetchData = () => {
    fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=10')
      .then((res) => res.json())
      .then((result) => {
        // ✅ result.data is the actual array of artworks
        setApiData(result.data);
      })
      .catch((err) => console.error('Error fetching data:', err));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-center mb-6">
        <button
          onClick={fetchData}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Load Artworks
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {apiData.map((art) => (
          <div key={art.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">{art.title}</h2>
            <p className="text-sm text-gray-600">Artist: {art.artist_title || 'Unknown'}</p>
            <p className="text-sm text-gray-500">Date: {art.date_display || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewData;
