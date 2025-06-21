import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App_DataFetch from './App_DataFetch';
import NewData from './NewData';
import PostList from './PostList';
import Dependency_Array from './Dependency_Array';

function App() {
  return (
    <Router>
      <div className="p-4 space-y-4">
        {/* Navbar Links */}
        <nav className="space-x-4 bg-gray-100 p-2 rounded">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/new-data" className="text-blue-600 hover:underline">New Data</Link>
          <Link to="/posts" className="text-blue-600 hover:underline">Post List</Link>
          <Link to="/dependency" className="text-blue-600 hover:underline">Dependency_Array_Example</Link>
        </nav>

        {/* Route Pages */}
        <Routes>
          <Route path="/" element={<App_DataFetch />} />
          <Route path="/new-data" element={<NewData />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/dependency" element={<Dependency_Array />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
