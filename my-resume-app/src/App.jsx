import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPersonal } from './Slice/ReduxSlicer';
import { FiUser, FiMail, FiMapPin, FiPhone, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

// FormField component moved outside of App to prevent recreation on each render
const FormField = ({ icon: Icon, label, name, type = 'text', placeholder, error, value, onChange }) => (
  <div className="space-y-2">
    <label htmlFor={name} className="form-label flex items-center gap-2">
      <Icon size={18} className="text-primary-600" />
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`form-input ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
    />
    {error && (
      <div className="flex items-center gap-1 text-red-500 text-sm">
        <FiAlertCircle size={16} />
        {error}
      </div>
    )}
  </div>
);

function App() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    addr: '',
    phone: ''
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
      dispatch(addPersonal(formData));
      setSubmitted(true);
      setFormData({ Name: '', email: '', addr: '', phone: '' });
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

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
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