import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddExperience } from '../Slice/ReduxSlicer';
import { FiPlus, FiTrash2, FiCheckCircle, FiBriefcase } from 'react-icons/fi';

export default function Experiences() {
  const dispatch = useDispatch();
  const [experience, setExperience] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const MAX_ENTRIES = 3;

  const handleExperience = (index, field, value) => {
    const updated = [...experience];
    updated[index] = { ...updated[index], [field]: value };
    setExperience(updated);
  };

  const addExperienceField = () => {
    if (experience.length < MAX_ENTRIES) {
      setExperience([...experience, { CompanyName: '', Year: '', designation: '' }]);
    }
  };

  const removeExperience = (index) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (experience.length === 0) {
      alert('Please add at least one experience entry');
      return;
    }
    if (experience.some(exp => !exp.CompanyName || !exp.Year || !exp.designation)) {
      alert('Please fill all fields');
      return;
    }
    dispatch(AddExperience(experience));
    setSubmitted(true);
    setExperience([]);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Success Message */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-center gap-3 animate-slide-down">
            <FiCheckCircle className="text-green-500" size={24} />
            <div>
              <p className="font-semibold text-green-700">Success!</p>
              <p className="text-green-600 text-sm">Experience details saved successfully</p>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="card overflow-hidden">
          <div className="card-header">
            <h2 className="text-3xl font-bold">Work Experience</h2>
            <p className="text-primary-100 mt-2">
              Add your professional experience ({experience.length}/{MAX_ENTRIES})
            </p>
          </div>

          <div className="p-8">
            {experience.length === 0 ? (
              <div className="text-center py-12">
                <FiBriefcase className="text-6xl mb-4 mx-auto text-primary-300" size={80} />
                <p className="text-gray-500 text-lg">No experience details added yet</p>
                <p className="text-gray-400 text-sm mt-2">Click "Add Experience" to get started</p>
              </div>
            ) : (
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">Experience Entry</h3>
                      </div>
                      <button
                        onClick={() => removeExperience(index)}
                        className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                        title="Remove entry"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className='gap-2'>
                        <label className="form-label">Company Name</label>
                        <input
                          type="text"
                          value={exp.CompanyName}
                          onChange={(e) => handleExperience(index, 'CompanyName', e.target.value)}
                          placeholder="e.g., Google Inc."
                          className="form-input"
                        />
                      </div>

                      <div className='gap-2'>
                        <label className="form-label">Duration/Year</label>
                        <input
                          type="text"
                          value={exp.Year}
                          onChange={(e) => handleExperience(index, 'Year', e.target.value)}
                          placeholder="e.g., 2020-2023"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="form-label">Designation/Position</label>
                      <input
                        type="text"
                        value={exp.designation}
                        onChange={(e) => handleExperience(index, 'designation', e.target.value)}
                        placeholder="e.g., Senior Software Engineer"
                        className="form-input"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={addExperienceField}
                disabled={experience.length >= MAX_ENTRIES}
                className={`btn-secondary flex-1 flex items-center justify-center gap-2 ${
                  experience.length >= MAX_ENTRIES ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FiPlus size={20} />
                Add Experience
              </button>
              <button
                onClick={handleSubmit}
                disabled={experience.length === 0}
                className={`btn-primary flex-1 flex items-center justify-center gap-2 ${
                  experience.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FiCheckCircle size={20} />
                Save All
              </button>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
          <p className="text-blue-800 font-semibold flex items-center gap-2">
            ℹ️ Tip:
          </p>
          <p className="text-blue-700 text-sm mt-2">
            List your most recent job experience first. Include the company name, duration, and your job title/designation.
          </p>
        </div>
      </div>
    </div>
  );
}