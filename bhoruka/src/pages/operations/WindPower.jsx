import React from 'react';

// 1. Import your unified template
import EnergyPageTemplate from '../../components/common/EnergyPageTemplate';

// 2. Import all the wind data (which now includes the video link!)
import { 
  windHeroData, 
  windAboutData, 
  windStatsData, 
  windBenefitsData 
} from '../../data/windData';

// 3. Import the Wind Projects array
import { windProjects } from '../../data/projectsData';

export default function WindPowerPro() {
  return (
    <EnergyPageTemplate 
      energyName="wind"
      hero={windHeroData}
      about={windAboutData}
      stats={windStatsData}
      benefits={windBenefitsData}
      projects={windProjects} 
    />
  );
}