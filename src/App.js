import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './pages/Error';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        {/* path="*" fonctionne si rien de connu */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;