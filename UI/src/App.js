// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Volunteers from './pages/Volunteers';
import Pets from './pages/Pets';
import ReportPet from './pages/ReportPet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/reportpet" element={<ReportPet />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
