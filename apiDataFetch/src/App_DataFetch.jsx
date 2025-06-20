import React, { useState } from 'react';

const App_DataFetch = () => {
  const [apiData, setApiData] = useState([]);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-center mb-6">
        <button
          onClick={fetchUsers}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Load All Users
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {apiData.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl p-4 shadow hover:shadow-md transition duration-300"
          >
            <h2 className="text-lg font-bold text-gray-800 mb-2">{user.name}</h2>
            <p className="text-sm text-gray-600">Username: {user.username}</p>
            <p className="text-sm text-gray-600">Street: {user.address.street}</p>
            <p className="text-sm text-gray-600">Company: {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App_DataFetch;
