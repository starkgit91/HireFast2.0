// frontend/src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    experience: '',
    skills: '',
    location: '',
    resume: null,
    diversityTags: '',
  });

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submission = { ...formData, skills: formData.skills.split(','), diversityTags: formData.diversityTags.split(',') };
    await axios.post('http://localhost:5000/api/candidates', submission);
    alert('Candidate registered!');
    setFormData({
      name: '',
      email: '',
      education: '',
      experience: '',
      skills: '',
      location: '',
      resume: null,
      diversityTags: '',
    });
  };

  return (
   <div className="max-w-3xl mx-auto mt-12 p-8 bg-gradient-to-br from-white to-blue-100 rounded-2xl shadow-2xl">
  <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-8 tracking-wide">
    🚀 Register a New Candidate
  </h2>
  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Full Name"
      className="col-span-1 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      required
    />
    <input
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email Address"
      className="col-span-1 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      required
    />
    <input
      name="education"
      value={formData.education}
      onChange={handleChange}
      placeholder="Education"
      className="col-span-1 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      required
    />
    <input
      name="experience"
      type="number"
      value={formData.experience}
      onChange={handleChange}
      placeholder="Experience (in years)"
      className="col-span-1 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      required
    />
    <input
      name="skills"
      value={formData.skills}
      onChange={handleChange}
      placeholder="Skills (comma separated)"
      className="col-span-1 md:col-span-2 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      required
    />
    <input
      name="location"
      value={formData.location}
      onChange={handleChange}
      placeholder="Location"
      className="col-span-1 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      required
    />
    <input
      name="diversityTags"
      value={formData.diversityTags}
      onChange={handleChange}
      placeholder="Diversity Tags (comma separated)"
      className="col-span-1 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
    <div className="col-span-1 md:col-span-2">
      <label className="block mb-1 font-medium text-gray-700">Upload Resume (PDF)</label>
      <input
        name="resume"
        type="file"
        accept="application/pdf"
        onChange={handleChange}
        className="w-full border border-dashed border-gray-400 p-3 rounded-lg bg-white text-sm text-gray-700 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
      />
    </div>

    <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
      <button
        type="submit"
        className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
      >
        ✍️ Submit Candidate
      </button>
    </div>
  </form>
</div>

  );
};
export default Register;