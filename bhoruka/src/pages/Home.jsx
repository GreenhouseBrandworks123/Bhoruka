import React, { Suspense } from 'react';

// 1. Eager Load: Above-the-fold components (Crucial for SEO and fast initial paint)
import HeroBanner from '../components/home/HeroBanner';
import CleanEnergyOverview from '../components/home/CleanEnergyOverview';
import Loader from '../components/common/Loader';

// 2. Lazy Load: Below-the-fold components (Saves initial bundle size)
const EnergyVerticals = React.lazy(() => import('../components/home/EnergyVerticals'));
const StatsCounter = React.lazy(() => import('../components/home/StatsCounter'));
const MagazineFeature = React.lazy(() => import('../components/home/MagazineFeature'));
const AwardsHighlights = React.lazy(() => import('../components/home/AwardsHighlights'));

const Home = () => {
  return (
    <main className="w-full font-sans overflow-x-hidden bg-white">
      
      {/* Renders immediately on page load */}
      <HeroBanner />
      <CleanEnergyOverview />
      
      {/* Suspends and fetches only when needed, showing the corporate loader in the meantime */}
      <Suspense fallback={<Loader />}>
        <EnergyVerticals /> 
        <StatsCounter />
        <MagazineFeature /> 
        <AwardsHighlights /> 
      </Suspense>
      
    </main>
  );
};

export default Home;