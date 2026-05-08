import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearAll } from '../Slice/ReduxSlicer';
import { 
  FiHome, 
  FiBook, 
  FiBriefcase, 
  FiZap, 
  FiEye, 
  FiTrash2,
  FiMenu,
  FiX
} from 'react-icons/fi';

export default function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      dispatch(clearAll());
      alert('All data has been cleared!');
    }
  };

  const navItems = [
    { path: '/', icon: FiHome, label: 'Personal', title: 'Personal Details' },
    { path: '/education', icon: FiBook, label: 'Education', title: 'Education Details' },
    { path: '/experience', icon: FiBriefcase, label: 'Experience', title: 'Work Experience' },
    { path: '/skill', icon: FiZap, label: 'Skills', title: 'Your Skills' },
    { path: '/View', icon: FiEye, label: 'View', title: 'View Resume' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg border-b-4 border-primary-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-4xl">📄</div>
            <div>
              <h1 className="text-2xl font-bold text-white">Resume Builder</h1>
              <p className="text-primary-100 text-xs">Create your professional resume</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map(({ path, icon: Icon, label, title }) => (
              <Link
                key={path}
                to={path}
                title={title}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  isActive(path)
                    ? 'bg-white text-primary-600 shadow-lg'
                    : 'text-white hover:bg-primary-500 hover:shadow-md'
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
            <button
              onClick={handleClearAll}
              title="Clear all data"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white hover:bg-red-500 transition-all duration-200 ml-2"
            >
              <FiTrash2 size={18} />
              Clear
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:bg-primary-500 p-2 rounded-lg"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 animate-slide-down">
            <div className="flex flex-col gap-2">
              {navItems.map(({ path, icon: Icon, label, title }) => (
                <Link
                  key={path}
                  to={path}
                  title={title}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    isActive(path)
                      ? 'bg-white text-primary-600'
                      : 'text-white hover:bg-primary-500'
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              ))}
              <button
                onClick={() => {
                  handleClearAll();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white hover:bg-red-500 transition-all duration-200"
              >
                <FiTrash2 size={18} />
                Clear All
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}