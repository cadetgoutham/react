import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './Store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResumeView from './ResumeView';
import Educations from './Education';
import Experiences from './Experience';
import Skills from './Skills';
import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<App />} />
          <Route path="View" element={<ResumeView />} />
          <Route path="education" element={<Educations />} />
          <Route path="experience" element={<Experiences />} />
          <Route path="skill" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
