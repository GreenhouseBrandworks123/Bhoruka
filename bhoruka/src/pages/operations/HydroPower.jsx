import React from 'react';
import EnergyPageTemplate from '../../components/common/EnergyPageTemplate';
import { hydroProjects } from '../../data/projectsData';
import { 
  hydroHeroData, 
  hydroAboutData, 
  hydroStatsData, 
  hydroBenefitsData 
} from '../../data/hydroData';

const HydroPower = () => {
  return (
    <EnergyPageTemplate 
      energyName="hydro"
      hero={hydroHeroData}
      about={hydroAboutData}
      stats={hydroStatsData}
      benefits={hydroBenefitsData}
      projects={hydroProjects} 
    />
  );
};

export default HydroPower;