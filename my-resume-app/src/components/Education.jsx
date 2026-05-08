import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddEducation } from '../Slice/ReduxSlicer';
import { FiPlus, FiTrash2, FiCheckCircle} from 'react-icons/fi';

export default function Educations() {
  const dispatch = useDispatch();
  const [education, setEducation] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const MAX_ENTRIES = 3;

  const handleEducation = (index, field, value) => {
    const updated = [...education];
    updated[index] = { ...updated[index], [field]: value };
    setEducation(updated);
  };

  const addEducationField = () => {
    if (education.length < MAX_ENTRIES) {
      setEducation([...education, { CollegeName: '', PassedYear: '', Degree: '' }]);
    }
  };

  const removeEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (education.length === 0) {
      alert('Please add at least one education entry');
      return;
    }
    if (education.some(edu => !edu.CollegeName || !edu.PassedYear || !edu.Degree)) {
      alert('Please fill all fields');
      return;
    }
    dispatch(AddEducation(education));
    setSubmitted(true);
    setEducation([]);
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
              <p className="text-green-600 text-sm">Education details saved successfully</p>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="card overflow-hidden">
          <div className="card-header">
            <h2 className="text-3xl font-bold">Education Details</h2>
            <p className="text-primary-100 mt-2">
              Add your academic qualifications ({education.length}/{MAX_ENTRIES})
            </p>
          </div>

          <div className="p-8">
            {education.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎓</div>
                <p className="text-gray-500 text-lg">No education details added yet</p>
                <p className="text-gray-400 text-sm mt-2">Click "Add Education" to get started</p>
              </div>
            ) : (
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">Education Entry</h3>
                      </div>
                      <button
                        onClick={() => removeEducation(index)}
                        className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                        title="Remove entry"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Institute/College Name</label>
                        <input
                          type="text"
                          value={edu.CollegeName}
                          onChange={(e) => handleEducation(index, 'CollegeName', e.target.value)}
                          placeholder="e.g., Harvard University"
                          className="form-input"
                        />
                      </div>

                      <div>
                        <label className="form-label">Graduation Year</label>
                        <input
                          type="number"
                          value={edu.PassedYear}
                          onChange={(e) => handleEducation(index, 'PassedYear', e.target.value)}
                          placeholder="e.g., 2023"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="form-label">Degree</label>
                      <input
                        type="text"
                        value={edu.Degree}
                        onChange={(e) => handleEducation(index, 'Degree', e.target.value)}
                        placeholder="e.g., Bachelor of Science in Computer Science"
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
                onClick={addEducationField}
                disabled={education.length >= MAX_ENTRIES}
                className={`btn-secondary flex-1 flex items-center justify-center gap-2 ${
                  education.length >= MAX_ENTRIES ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FiPlus size={20} />
                Add Education
              </button>
              <button
                onClick={handleSubmit}
                disabled={education.length === 0}
                className={`btn-primary flex-1 flex items-center justify-center gap-2 ${
                  education.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
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
            ℹ️ Note:
          </p>
          <p className="text-blue-700 text-sm mt-2">
            You can add up to {MAX_ENTRIES} education entries. Add your most recent education first.
          </p>
        </div>
      </div>
    </div>
  );
}