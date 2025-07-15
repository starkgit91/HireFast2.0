import React from 'react';

const Filter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-xl mt-50 mb-4 flex flex-col md:flex-row gap-4 items-center justify-between">
      <input
        type="text"
        name="skill"
        placeholder="Filter by Skill"
        value={filters.skill || ''}
        onChange={handleChange}
        className="p-2 border rounded-md w-full md:w-1/3"
      />

      <input
        type="text"
        name="location"
        placeholder="Filter by Location"
        value={filters.location || ''}
        onChange={handleChange}
        className="p-2 border rounded-md w-full md:w-1/3"
      />

      <input
        type="number"
        name="minExp"
        placeholder="Min Experience"
        value={filters.minExp || ''}
        onChange={handleChange}
        className="p-2 border rounded-md w-full md:w-1/3"
      />
    </div>
  );
};

export default Filter;
