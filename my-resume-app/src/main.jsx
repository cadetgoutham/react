import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './Store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResumeView from './components/ResumeView';
import Educations from './components/Education';
import Experiences from './components/Experience';
import Skills from './components/Skills';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/education" element={<Educations />} />
          <Route path="/experience" element={<Experiences />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/View" element={<ResumeView />} />
          <Route path="*" element={<App />} /> {/* Fallback route */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
