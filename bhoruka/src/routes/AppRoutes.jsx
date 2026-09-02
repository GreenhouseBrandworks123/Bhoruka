import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/common/Loader';

const Home = lazy(() => import('../pages/Home'));
const HydroPower = lazy(() => import('../pages/operations/HydroPower'));
const SolarPower = lazy(() => import('../pages/operations/SolarPower'));
const WindPower = lazy(() => import('../pages/operations/WindPower'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hydro" element={<HydroPower />} />
        <Route path="/solar" element={<SolarPower />} />
        <Route path="/wind" element={<WindPower />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;