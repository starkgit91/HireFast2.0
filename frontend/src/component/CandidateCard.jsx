import React from 'react';

const CandidateCard = ({ candidate }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300 ">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{candidate.name}</h2>
      <p className="text-gray-600"><strong>Email:</strong> {candidate.email}</p>
      <p className="text-gray-600"><strong>Experience:</strong> {candidate.experience} years</p>
      <p className="text-gray-600"><strong>Skills:</strong> {candidate.skills?.join(', ')}</p>
      <p className="text-gray-600"><strong>Location:</strong> {candidate.location}</p>
      <p className="text-gray-600"><strong>Diversity:</strong> {candidate.diversityTags?.join(', ')}</p>
    </div>
  );
};

export default CandidateCard;