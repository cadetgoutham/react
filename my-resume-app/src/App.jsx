import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPersonal } from './Slice/ReduxSlicer';
import { FiUser, FiMail, FiMapPin, FiPhone, FiBriefcase, FiLink, FiGithub, FiLinkedin, FiFileText, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

// FormField component moved outside of App to prevent recreation on each render
const FormField = ({ icon: Icon, label, name, type = 'text', placeholder, error, value, onChange, multiline = false, optional = false }) => (
  <div className="space-y-2">
    <label htmlFor={name} className="form-label flex items-center gap-2">
      <Icon size={18} className="text-primary-600" />
      {label}{optional && <span className="text-gray-400 text-sm font-normal">(optional)</span>}
    </label>
    {React.createElement(multiline ? 'textarea' : 'input', {
      ...(multiline ? { rows: 4, maxLength: 500 } : { type }),
      id: name, name, value, onChange, placeholder,
      'aria-invalid': !!error,
      className: `form-input ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`,
    })}
    {error && (
      <div className="flex items-center gap-1 text-red-500 text-sm">
        <FiAlertCircle size={16} />
        {error}
      </div>
    )}
  </div>
);

const emptyForm = { Name: '', email: '', addr: '', phone: '', title: '', summary: '', linkedin: '', github: '', website: '' };
const isUrl = (v) => { try { return ['http:', 'https:'].includes(new URL(v).protocol); } catch { return false; } };

function App() {
  const dispatch = useDispatch();
  const saved = useSelector((state) => state.Details.myList.personalDetails[0]);
  const [formData, setFormData] = useState(() => {
    const { id, ...rest } = saved || {}; // eslint-disable-line no-unused-vars
    return { ...emptyForm, ...rest };
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.Name.trim()) {
      newErrors.Name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.addr.trim()) {
      newErrors.addr = 'Address is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    ['linkedin', 'github', 'website'].forEach((k) => {
      if (formData[k].trim() && !isUrl(formData[k].trim())) {
        newErrors[k] = 'Enter a full URL starting with http:// or https://';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const trimmed = Object.fromEntries(Object.entries(formData).map(([k, v]) => [k, v.trim()]));
      dispatch(addPersonal(trimmed));
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Success Message */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-center gap-3 animate-slide-down">
            <FiCheckCircle className="text-green-500" size={24} />
            <div>
              <p className="font-semibold text-green-700">Success!</p>
              <p className="text-green-600 text-sm">Personal details saved successfully</p>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="card overflow-hidden">
          <div className="card-header">
            <h2 className="text-3xl font-bold">Personal Information</h2>
            <p className="text-primary-100 mt-2">Let's start with your basic details</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="p-8 space-y-6">
            {/* Name Field */}
            <FormField
              icon={FiUser}
              label="Full Name"
              name="Name"
              placeholder="John Doe"
              value={formData.Name}
              onChange={handleChange}
              error={errors.Name}
            />

            {/* Email Field */}
            <FormField
              icon={FiMail}
              label="Email Address"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            {/* Address Field */}
            <FormField
              icon={FiMapPin}
              label="Address"
              name="addr"
              placeholder="123 Main St, City, State"
              value={formData.addr}
              onChange={handleChange}
              error={errors.addr}
            />

            {/* Phone Field */}
            <FormField
              icon={FiPhone}
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="1234567890"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            <FormField icon={FiBriefcase} label="Professional Title" name="title" placeholder="Frontend Developer" optional value={formData.title} onChange={handleChange} error={errors.title} />
            <FormField icon={FiFileText} label="Summary" name="summary" placeholder="A short professional summary" multiline optional value={formData.summary} onChange={handleChange} error={errors.summary} />
            <FormField icon={FiLinkedin} label="LinkedIn" name="linkedin" type="url" placeholder="https://linkedin.com/in/you" optional value={formData.linkedin} onChange={handleChange} error={errors.linkedin} />
            <FormField icon={FiGithub} label="GitHub" name="github" type="url" placeholder="https://github.com/you" optional value={formData.github} onChange={handleChange} error={errors.github} />
            <FormField icon={FiLink} label="Website / Portfolio" name="website" type="url" placeholder="https://yoursite.com" optional value={formData.website} onChange={handleChange} error={errors.website} />

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2 text-lg mt-8"
            >
              <FiCheckCircle size={20} />
              Save Personal Details
            </button>
          </form>
        </div>

        {/* Tip Section */}
        <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
          <p className="text-blue-800 font-semibold flex items-center gap-2">
            💡 Tip:
          </p>
          <p className="text-blue-700 text-sm mt-2">
            Your email and phone number will be displayed in your resume, so make sure they are correct and professional.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;