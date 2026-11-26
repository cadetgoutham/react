import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import ResumeView from './components/ResumeView';
import Educations from './components/Education';
import Experiences from './components/Experience';
import Skills from './components/Skills';

export default function AppRoutes() {
  // Remount pages after a clear so forms don't keep stale local state
  const clearCount = useSelector((state) => state.Details.clearCount);
  return (
    <Routes key={clearCount}>
      <Route path="/" element={<App />} />
      <Route path="/education" element={<Educations />} />
      <Route path="/experience" element={<Experiences />} />
      <Route path="/skill" element={<Skills />} />
      <Route path="/View" element={<ResumeView />} />
      <Route path="*" element={<App />} />
    </Routes>
  );
}
