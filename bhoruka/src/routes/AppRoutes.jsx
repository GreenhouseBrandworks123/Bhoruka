import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/common/Loader';

const Home = lazy(() => import('../pages/Home'));
const HydroPower = lazy(() => import('../pages/operations/HydroPower'));
const SolarPower = lazy(() => import('../pages/operations/SolarPower'));
const WindPower = lazy(() => import('../pages/operations/WindPower'));
const Clients = lazy(()=> import('../pages/Clients'))
const CorporateOverview = lazy(() => import('../pages/company/CorporateOverview'));
const Leadership = lazy(() => import('../pages/company/Leadership'));
const AboutUs = lazy(()=> import('../pages/AboutUs') )
const MissionStatement = lazy(() => import('../pages/company/MissionStatement'));
const VisionValuesQuality = lazy(() => import('../pages/company/VisionValuesQuality'));
const People = lazy(() => import('../pages/company/People'));
const Clients = lazy(() => import('../pages/Clients'));

const CorporateOverview = lazy(
  () => import('../pages/company/CorporateOverview')
);

const Leadership = lazy(
  () => import('../pages/company/Leadership')
);

const AboutUs = lazy(
  () => import('../pages/AboutUs')
);

const MissionStatement = lazy(
  () => import('../pages/company/MissionStatement')
);

const VisionValuesQuality = lazy(
  () => import('../pages/company/VisionValuesQuality')
);


/* ================= CSR PAGES ================= */

const Sustainability = lazy(
  () => import('../pages/Sustainability')
);

const CSRPhilosophy = lazy(
  () => import('../pages/csr/CSRPhilosophy')
);

const CSRImpact = lazy(
  () => import('../pages/csr/CSRImpact')
);

const CSREducation = lazy(
  () => import('../pages/csr/CSREducation')
);

const CSRCommunity = lazy(
  () => import('../pages/csr/CSRCommunity')
);

const CSRWomenEmpowerment = lazy(
  () => import('../pages/csr/CSRWomenEmpowerment')
);

const CSRHealthEnvironment = lazy(
  () => import('../pages/csr/CSRHealthEnvironment')
);

const CSRSkillDevelopment = lazy(
  () => import('../pages/csr/CSRSkillDevelopment')
);

const CSRMicroCredit = lazy(
  () => import('../pages/csr/CSRMicroCredit')
);

const CSRGallery = lazy(
  () => import('../pages/csr/CSRGallery')
);


const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hydro" element={<HydroPower />} />
        <Route path="/solar" element={<SolarPower />} />
        <Route path="/wind" element={<WindPower />} />
        <Route path="/company/corporate-overview" element={<CorporateOverview />} />
        <Route path="clients" element = {<Clients/>}/>
        <Route path="/company/leadership" element={<Leadership />} />
        <Route path="about" element = {<AboutUs/>}/>
        <Route path="/company/mission-statement" element={<MissionStatement />} />
        <Route path="/company/vision-values-quality-policy" element={<VisionValuesQuality />} />
        <Route path="/company/people" element={<People />} />

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================= PROJECTS ================= */}

        <Route
          path="/hydro"
          element={<HydroPower />}
        />

        <Route
          path="/solar"
          element={<SolarPower />}
        />

        <Route
          path="/wind"
          element={<WindPower />}
        />


        {/* ================= COMPANY ================= */}

        <Route
          path="/company/corporate-overview"
          element={<CorporateOverview />}
        />

        <Route
          path="clients"
          element={<Clients />}
        />

        <Route
          path="/company/leadership"
          element={<Leadership />}
        />

        <Route
          path="about"
          element={<AboutUs />}
        />

        <Route
          path="/company/mission-statement"
          element={<MissionStatement />}
        />

        <Route
          path="/company/vision-values-quality-policy"
          element={<VisionValuesQuality />}
        />


        {/* =====================================================
            CSR
        ===================================================== */}

        {/* CSR Overview */}
        <Route
          path="/csr"
          element={<Sustainability />}
        />

        {/* Our CSR Philosophy */}
        <Route
          path="/csr/philosophy"
          element={<CSRPhilosophy />}
        />

        {/* Our Impact at a Glance */}
        <Route
          path="/csr/impact"
          element={<CSRImpact />}
        />

        {/* Education */}
        <Route
          path="/csr/education"
          element={<CSREducation />}
        />

        {/* Community Development */}
        <Route
          path="/csr/community"
          element={<CSRCommunity />}
        />

        {/* Women Empowerment */}
        <Route
          path="/csr/women-empowerment"
          element={<CSRWomenEmpowerment />}
        />

        {/* Health & Environment */}
        <Route
          path="/csr/health-environment"
          element={<CSRHealthEnvironment />}
        />

        {/* Skill Development */}
        <Route
          path="/csr/skill-development"
          element={<CSRSkillDevelopment />}
        />

        {/* Micro-Credit & Livelihood */}
        <Route
          path="/csr/micro-credit"
          element={<CSRMicroCredit />}
        />

        {/* CSR Gallery */}
        <Route
          path="/csr/gallery"
          element={<CSRGallery />}
        />

      </Routes>

    </Suspense>
  );
};

export default AppRoutes;