import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import DefaultLayout from '../config/layout/DefaultLayout';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout component={Home} />} />
        <Route path="/detail/:id" element={<DefaultLayout component={Detail} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
