import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './index.css';
import Mainpage from './Pages/Main_page.jsx';
import Pokemonpage from './Pages/Pokemon_page.jsx';
import StarPage from './Pages/Star_page.jsx';
import Resumepage from './Pages/Resume_page.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Pokemon_page" element={<Pokemonpage />} />
        <Route path="/Resume_page" element={<Resumepage />} />
        <Route path="/Star_page" element={<StarPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
