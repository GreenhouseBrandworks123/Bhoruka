import React from 'react';

// 1. Images & Video
import windHeroImage from '../assets/wind-imges/wind-bg.jpeg'; 
import windDesImage from '../assets/images/wind-des.avif'; // Make sure this image exists in your assets!

// 2. Icons
import { 
  HistoryIcon, FactoryIcon, PowerIcon, EcoIcon, 
  LightningIcon, GlobeEcoIcon, ShieldCheckIcon, RefreshCycleIcon 
} from '../components/common/Icons';

// ================= HERO DATA =================
export const windHeroData = {
  title: "Wind Power",
  description: "Harnessing the power of wind to deliver reliable, sustainable, and clean energy across India.",
  bgImage: windHeroImage,
  bgVideo: "/wind-turbine.mp4" 
};

// ================= ABOUT DATA =================
// 👉 This is the export your app was looking for!
export const windAboutData = {
  title: "Harnessing the Power of the Wind",
  paragraph1: "Wind energy is one of the fastest-growing and most cost-effective sources of renewable power globally. By capturing the kinetic energy of air currents using advanced aerodynamic turbines, we can generate massive amounts of electricity entirely free of emissions and resource depletion.",
  paragraph2: "At Bhoruka Renewable Energy, we locate, develop, and operate utility-scale wind farms in high-yield wind corridors. Our projects utilize cutting-edge turbine technology and smart-grid integration to ensure maximum energy capture. From steady baseload support to peak generation, our wind assets are engineered for resilience, longevity, and optimal performance.",
  image: windDesImage
};

// ================= STATS DATA =================
export const windStatsData = [
  {
    icon: <HistoryIcon className="w-6 h-6 text-[#0070c0]" />,
    tag: "Engineering Heritage",
    value: "Advanced",
    title: "Aerodynamic engineering",
    description: "Leveraging rigorous site assessments and micro-siting techniques to place turbines in the most optimal, high-yield wind corridors."
  },
  {
    icon: <FactoryIcon className="w-6 h-6 text-[#0070c0]" />,
    tag: "Operational Portfolio",
    value: "Scalable",
    title: "Utility-scale wind farms",
    description: "Developing robust wind parks that tie seamlessly into the national grid, delivering continuous and reliable power to millions."
  },
  {
    icon: <PowerIcon className="w-6 h-6 text-[#0070c0]" />,
    tag: "Power Generation",
    value: "High Yield",
    title: "Maximum kinetic capture",
    description: "Deploying next-generation turbines with enhanced rotor diameters and hub heights to capture low-speed winds with maximum efficiency."
  },
  {
    icon: <EcoIcon className="w-6 h-6 text-[#0070c0]" />,
    tag: "Environmental Impact",
    value: "Zero",
    title: "Clean, renewable generation",
    description: "Wind power requires virtually zero water for operation, preserving local resources while offsetting vast amounts of carbon emissions."
  }
];

// ================= BENEFITS DATA =================
export const windBenefitsData = [
  {
    icon: <LightningIcon className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Advanced Turbine Technology",
    description: "Utilizing modern, high-capacity wind turbines designed for maximum aerodynamic efficiency and energy yield."
  },
  {
    icon: <GlobeEcoIcon className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Dual Land Utilization",
    description: "Wind farms have a tiny physical footprint, allowing the vast majority of the land below to remain usable for agriculture or local ecology."
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Grid Stabilization",
    description: "Equipped with advanced power electronics to regulate voltage and frequency, ensuring smooth and secure grid integration."
  },
  {
    icon: <RefreshCycleIcon className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Predictive Maintenance",
    description: "24/7 intelligent monitoring and predictive O&M strategies minimize downtime and extend the operational lifespan of the turbines."
  }
];