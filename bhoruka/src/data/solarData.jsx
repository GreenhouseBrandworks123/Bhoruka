import React from 'react';


import solarHeroImage from '../assets/images/solar-hero.avif'; // Change filename if needed
import solarDesImage from '../assets/images/solar-des.webp';
import { 
  HistoryIcon, FactoryIcon, PowerIcon, EcoIcon, 
  LightningIcon, GlobeEcoIcon, ShieldCheckIcon, RefreshCycleIcon 
} from '../components/common/Icons';


// ================= HERO DATA =================
export const solarHeroData = {
  title: "Solar Power",
  description: "Harnessing the power of the sun to build a carbon-free future. Bhoruka Renewable Energy is committed to developing innovative, high-efficiency solar parks across the nation.",
  bgImage: solarHeroImage
};

// ================= ABOUT DATA =================
export const solarAboutData = {
  title: "Harnessing the Power of the Sun",
  paragraph1: "Solar power is one of the most abundant, scalable, and rapidly advancing renewable energy resources on the planet. By utilizing state-of-the-art photovoltaic (PV) technology, solar plants silently convert sunlight directly into clean, sustainable electricity, significantly reducing carbon emissions and dependence on fossil fuels.",
  paragraph2: "At Bhoruka Renewable Energy, we develop high-efficiency, utility-scale solar parks and distributed generation systems. Our solar installations are strategically designed to maximize energy yield and seamlessly integrate with the national grid. By combining cutting-edge solar modules with intelligent monitoring systems, we ensure resilient, long-term performance and sustainable power generation.",
  image: solarDesImage
};
// ================= STATS DATA =================
export const solarStatsData = [
  {
    icon: <HistoryIcon className="w-6 h-6 text-[#0070c0]" />,
    tag: "Engineering Heritage",
    value: "Proven",
    title: "A legacy of energy excellence",
    description: "Leveraging our decades of background in renewable energy to deliver world-class, utility-scale solar projects with uncompromising quality."
  },
  {
    icon: <FactoryIcon className="w-6 h-6 text-[#0070c0]" />,
    tag: "Operational Portfolio",
    value: "Rapid",
    title: "Expanding solar footprint",
    description: "Continuously expanding our portfolio of high-efficiency solar parks, delivering reliable and scalable clean energy directly to the grid."
  },
  {
    icon: <PowerIcon className="w-6 h-6 text-[#0070c0]" />,
    tag: "Power Generation",
    value: "High Yield",
    title: "Maximum generation efficiency",
    description: "Deploying advanced photovoltaic modules that ensure optimal energy capture and high performance, even in diverse weather conditions."
  },
  {
    icon: <EcoIcon className="w-6 h-6 text-[#0070c0]" />,
    tag: "Environmental Impact",
    value: "Zero",
    title: "Carbon-free energy",
    description: "Offsetting thousands of tons of CO2 annually by replacing traditional fossil fuels with pure, unadulterated sunlight."
  }
];

// ================= BENEFITS =================
export const solarBenefitsData = [
  {
    icon: <LightningIcon className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Advanced PV Technology",
    description: "Utilizing cutting-edge solar panels and smart inverter technologies to capture maximum sunlight and ensure the highest possible energy yields."
  },
  {
    icon: <GlobeEcoIcon className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Sustainable Land Use",
    description: "Designed to co-exist with local ecosystems, our solar parks require minimal water for operation and produce zero noise or chemical emissions."
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Smart Grid Integration",
    description: "Equipped with advanced energy forecasting and control systems, our solar facilities provide smooth, reliable power to stabilize the regional grid."
  },
  {
    icon: <RefreshCycleIcon className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Robust Asset Management",
    description: "Comprehensive O&M (Operations & Maintenance) protocols and real-time monitoring ensure our solar arrays operate at peak efficiency for decades."
  }
];
