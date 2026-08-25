import React from 'react';
import EnergyPageTemplate from '../../components/common/EnergyPageTemplate';

// Import the data you just created
import { 
  solarHeroData, 
  solarAboutData, 
  solarStatsData, 
  solarBenefitsData 
} from '../../data/solarData';

import { solarProjects } from '../../data/projectsData';

// We will import solarProjects and the rest of the data later
const placeholderProjects = []; 

const SolarPower = () => {
  return (
    <EnergyPageTemplate 
      energyName="solar"
      hero={solarHeroData}
      about={solarAboutData}      // Placeholder for now
      stats={solarStatsData}      // Placeholder for now
      benefits={solarBenefitsData}   // Placeholder for now
      projects={solarProjects} 
    />
  );
};

export default SolarPower;