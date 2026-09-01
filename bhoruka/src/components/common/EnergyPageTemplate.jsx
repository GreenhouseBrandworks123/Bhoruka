import React, { Suspense } from 'react';
import Loader from './Loader';
import EnergyHero from './sections/EnergyHero';

const EnergyAbout = React.lazy(() => import('./sections/EnergyAbout'));
const EnergyProjects = React.lazy(() => import('./sections/EnergyProjects'));
const EnergyStats = React.lazy(() => import('./sections/EnergyStats'));
const EnergyBenefits = React.lazy(() => import('./sections/EnergyBenefits'));

const EnergyPageTemplate = ({ hero, about, stats, benefits, projects, energyName }) => {
  return (
    <div className="w-full font-sans text-slate-800">
      
      {/* Renders instantly for LCP optimization */}
      <EnergyHero hero={hero} />
      
      <Suspense fallback={<Loader />}>
        {about && <EnergyAbout about={about} energyName={energyName} />}
        {projects && <EnergyProjects projects={projects} energyName={energyName} />}
        {stats && <EnergyStats stats={stats} />}
        {benefits && <EnergyBenefits benefits={benefits} />}
      </Suspense>

    </div>
  );
};

export default EnergyPageTemplate;