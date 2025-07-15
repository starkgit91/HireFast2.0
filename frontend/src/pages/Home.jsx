import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-red-100 to-indigo-100 px-40">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-14 text-center drop-shadow">Welcome to HireFast</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        <Link to="/register" className="bg-white border border-blue-200 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-8 text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-2">📝 Register Candidate</h2>
          <p className="text-gray-600">Submit a new candidate profile quickly and easily.</p>
        </Link>
        <Link to="dashboard" className="bg-white border border-green-200 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-8 text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-2">🔍 Filter Candidates</h2>
          <p className="text-gray-600">Search, filter, and select the top 5 candidates for hiring.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;