import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Trending from '../../pages/Trending';
import Navbar from '../Navbar'

const index = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/profile' exact element={<Profile />} />
        <Route path='/trending' exact element={<Trending />} />
        <Route path='*' element={<Navigate to={{ pathname: '/' }} />} />"
      </Routes>
    </Router>
  );
};

export default index;
