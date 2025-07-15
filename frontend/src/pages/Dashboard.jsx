import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateList from '../component/CandidateList';
import Filters from '../component/Filter';

const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [topFive, setTopFive] = useState([]);
  const [filters, setFilters] = useState({});
  const [showTopFive, setShowTopFive] = useState(false);
  const [showCandidates, setShowCandidates] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/candidates').then((res) => setCandidates(res.data));
  }, []);

  const applyFilters = () => {
    return candidates.filter((c) => {
      const skillMatch = filters.skill ? c.skills?.includes(filters.skill) : true;
      const locationMatch = filters.location ? c.location?.toLowerCase().includes(filters.location.toLowerCase()) : true;
      const experienceMatch = filters.minExp ? c.experience >= parseInt(filters.minExp) : true;
      return skillMatch && locationMatch && experienceMatch;
    });
  };

  const handleTopFive = () => {
    axios.get('http://localhost:5000/api/candidates/top5').then((res) => {
      setTopFive(res.data);
      setShowTopFive(true);
      setShowCandidates(true);
    });
  };

  const visibleCandidates = showTopFive ? topFive : applyFilters();

  return (
    <div className="p-10 min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100 flex flex-col items-center">
      <h1 className="text-5xl font-black text-center text-indigo-800 mb-10 drop-shadow-lg tracking-wide">
        🎯 Candidate Dashboard
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-5xl mb-10 transition-all">
        <Filters filters={filters} setFilters={setFilters} />
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={handleTopFive}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all duration-300 font-bold text-lg shadow-md hover:scale-105"
          >
            Show Top 5 Candidates
          </button>
        </div>
      </div>

      {showCandidates && (
        <div className="w-full max-w-6xl">
          <CandidateList candidates={visibleCandidates} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
