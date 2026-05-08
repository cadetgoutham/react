import { useState } from 'react';
import { Languages } from './Languages';
import { WithContext as ReactTags } from 'react-tag-input';
import { AddSkills } from '../Slice/ReduxSlicer';
import { useDispatch } from 'react-redux';
import { FiCheckCircle, FiX, FiZap } from 'react-icons/fi';

const suggestions = Languages.map((language) => ({
  id: language,
  text: language,
}));

const KeyCodes = {
  enter: 13,
  comma: 188
};

const delimiters = [KeyCodes.enter, KeyCodes.comma];

export default function Skills() {
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const MAX_SKILLS = 10;

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    if (tags.length < MAX_SKILLS) {
      setTags([...tags, tag]);
    } else {
      alert(`Maximum ${MAX_SKILLS} skills allowed`);
    }
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags];
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  const handleSave = () => {
    if (tags.length === 0) {
      alert('Please add at least one skill');
      return;
    }
    dispatch(AddSkills(tags));
    setSubmitted(true);
    setTags([]);
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
              <p className="text-green-600 text-sm">Skills saved successfully</p>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="card overflow-hidden">
          <div className="card-header">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <FiZap size={32} />
              Your Skills & Expertise
            </h2>
            <p className="text-primary-100 mt-2">
              Add your professional skills (Max {MAX_SKILLS})
            </p>
          </div>

          <div className="p-8">
            {/* Skills Input Section */}
            <div className="mb-8">
              <label className="form-label">Enter Skills</label>
              <p className="text-gray-500 text-sm mb-4">
                Type a skill and press Enter or comma to add. Select from suggestions or type custom skills.
              </p>

              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
                <ReactTags
                  tags={tags}
                  suggestions={suggestions}
                  delimiters={delimiters}
                  handleDelete={handleDelete}
                  handleAddition={handleAddition}
                  handleDrag={handleDrag}
                  inputFieldPosition="bottom"
                  autocomplete
                  editable
                  placeholder="Type a skill and press Enter..."
                  name="Skills"
                  classNames={{
                    tags: 'flex flex-wrap gap-2',
                    tagInput: 'w-full',
                    tagInputField: 'w-full px-3 py-2 border-none outline-none bg-transparent text-gray-700 font-medium',
                    selected: 'flex flex-wrap gap-2',
                    tag: 'inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-sm shadow-md',
                    remove: 'ml-2 cursor-pointer hover:opacity-70',
                    suggestions: 'absolute top-full left-0 right-0 mt-2 z-50',
                    suggestionsList: 'bg-white border-2 border-primary-300 rounded-xl shadow-lg max-h-48 overflow-y-auto',
                    suggestionItem: 'px-4 py-3 border-b border-gray-100 cursor-pointer hover:bg-primary-50 text-gray-700 font-medium',
                    activeSuggestion: 'bg-primary-100 text-primary-700',
                  }}
                />
              </div>
            </div>

            {/* Skills Display */}
            {tags.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Added Skills ({tags.length}/{MAX_SKILLS})
                </h3>
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-glow transition-shadow"
                    >
                      <span className="font-semibold">{tag.text}</span>
                      <button
                        onClick={() => handleDelete(index)}
                        className="hover:bg-primary-700 p-1 rounded-full transition-colors"
                      >
                        <FiX size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {tags.length === 0 && (
              <div className="text-center py-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border-2 border-dashed border-primary-300 mb-8">
                <FiZap className="text-6xl mx-auto text-primary-300 mb-4" size={80} />
                <p className="text-gray-600 text-lg font-medium">No skills added yet</p>
                <p className="text-gray-500 text-sm mt-2">Add your professional skills above</p>
              </div>
            )}

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Progress</span>
                <span className="text-sm font-bold text-primary-600">
                  {tags.length}/{MAX_SKILLS}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${(tags.length / MAX_SKILLS) * 100}%` }}
                />
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={tags.length === 0}
              className={`btn-primary w-full flex items-center justify-center gap-2 text-lg ${
                tags.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <FiCheckCircle size={20} />
              Save Skills
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
          <p className="text-blue-800 font-semibold flex items-center gap-2">
            💡 Pro Tip:
          </p>
          <p className="text-blue-700 text-sm mt-2">
            Add relevant technical and soft skills. Include programming languages, tools, frameworks, and any certifications you have.
          </p>
        </div>
      </div>
    </div>
  );
}