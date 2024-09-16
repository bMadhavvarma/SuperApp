import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registerpage from './Pages/RegisterPage/Registerpage.jsx';
import Genrepage from './Pages/GenrePage/Genrepage.jsx';
import Homepage from './Pages/HomePage/Homepage.jsx';
import Moviespage from './Pages/MoviesPage/Moviespage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registerpage />} />
        <Route path="/genre" element={<Genrepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/movie" element={<Moviespage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
