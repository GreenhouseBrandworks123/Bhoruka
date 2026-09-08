import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/common/Loader';

/* ================= GENERAL PAGES ================= */
const Home = lazy(() => import('../pages/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Clients = lazy(() => import('../pages/Clients'));
const Sustainability = lazy(() => import('../pages/Sustainability'));

/* ================= OPERATIONS ================= */
const HydroPower = lazy(() => import('../pages/operations/HydroPower'));
const SolarPower = lazy(() => import('../pages/operations/SolarPower'));
const WindPower = lazy(() => import('../pages/operations/WindPower'));

/* ================= COMPANY ================= */
const CorporateOverview = lazy(() => import('../pages/company/CorporateOverview'));
const Leadership = lazy(() => import('../pages/company/Leadership'));
const MissionStatement = lazy(() => import('../pages/company/MissionStatement'));
const VisionValuesQuality = lazy(() => import('../pages/company/VisionValuesQuality'));
const People = lazy(() => import('../pages/company/People'));

/* ================= CSR PAGES ================= */
const CSRPhilosophy = lazy(() => import('../pages/csr/CSRPhilosophy'));
const CSRImpact = lazy(() => import('../pages/csr/CSRImpact'));
const CSREducation = lazy(() => import('../pages/csr/CSREducation'));
const CSRCommunity = lazy(() => import('../pages/csr/CSRCommunity'));
const CSRWomenEmpowerment = lazy(() => import('../pages/csr/CSRWomenEmpowerment'));
const CSRHealthEnvironment = lazy(() => import('../pages/csr/CSRHealthEnvironment'));
const CSRSkillDevelopment = lazy(() => import('../pages/csr/CSRSkillDevelopment'));
const CSRMicroCredit = lazy(() => import('../pages/csr/CSRMicroCredit'));
const CSRGallery = lazy(() => import('../pages/csr/CSRGallery'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* ================= HOME & GENERAL ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/clients" element={<Clients />} />

        {/* ================= OPERATIONS ================= */}
        <Route path="/hydro" element={<HydroPower />} />
        <Route path="/solar" element={<SolarPower />} />
        <Route path="/wind" element={<WindPower />} />

        {/* ================= COMPANY ================= */}
        <Route path="/company/corporate-overview" element={<CorporateOverview />} />
        <Route path="/company/leadership" element={<Leadership />} />
        <Route path="/company/mission-statement" element={<MissionStatement />} />
        <Route path="/company/vision-values-quality-policy" element={<VisionValuesQuality />} />
        <Route path="/company/people" element={<People />} />

        {/* ================= CSR ================= */}
        <Route path="/csr" element={<Sustainability />} />
        <Route path="/csr/philosophy" element={<CSRPhilosophy />} />
        <Route path="/csr/impact" element={<CSRImpact />} />
        <Route path="/csr/education" element={<CSREducation />} />
        <Route path="/csr/community" element={<CSRCommunity />} />
        <Route path="/csr/women-empowerment" element={<CSRWomenEmpowerment />} />
        <Route path="/csr/health-environment" element={<CSRHealthEnvironment />} />
        <Route path="/csr/skill-development" element={<CSRSkillDevelopment />} />
        <Route path="/csr/micro-credit" element={<CSRMicroCredit />} />
        <Route path="/csr/gallery" element={<CSRGallery />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;