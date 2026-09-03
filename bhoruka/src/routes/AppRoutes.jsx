import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/common/Loader';

const Home = lazy(() => import('../pages/Home'));
const HydroPower = lazy(() => import('../pages/operations/HydroPower'));
const SolarPower = lazy(() => import('../pages/operations/SolarPower'));
const WindPower = lazy(() => import('../pages/operations/WindPower'));
const Marketing = lazy(()=> import('../pages/Marketing'))
const Clients = lazy(()=> import('../pages/Clients'))
const CorporateOverview = lazy(() => import('../pages/company/CorporateOverview'));
const Leadership = lazy(() => import('../pages/company/Leadership'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hydro" element={<HydroPower />} />
        <Route path="/solar" element={<SolarPower />} />
        <Route path="/wind" element={<WindPower />} />
        <Route path="/company/corporate-overview" element={<CorporateOverview />} />
        <Route path="/marketing" element= {<Marketing/>}/>
        <Route path="clients" element = {<Clients/>}/>
        <Route path="/company/leadership" element={<Leadership />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;