import React, { useEffect, useState } from 'react';

const Dependency_Array = () => {
  const [users, setUsers] = useState([]);
  const [inputdata, setInputdata] = useState('');

  // Fetch data only once on component mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
    console.log('Data Fetched');
  }, []); // empty dependency array => run once

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">User List</h2>

      <input
        type="text"
        value={inputdata}
        onChange={(e) => setInputdata(e.target.value)}
        placeholder="Type something..."
        className="border p-2 rounded mb-4 w-full max-w-md"
      />

      <ul className="list-disc pl-5 space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dependency_Array;
