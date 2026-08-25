import React from 'react';

// Import your images
import hydroHeroImage from '../assets/images/hydro-hero.jpg';
import hydroDesImage from '../assets/images/hydro-des.jpg';

// Import your Icons
import { 
  HistoryIcon, FactoryIcon, PowerIcon, EcoIcon, 
  LightningIcon, GlobeEcoIcon, ShieldCheckIcon, RefreshCycleIcon 
} from '../components/common/Icons';

export const hydroHeroData = {
  title: "Hydropower",
  description: "Maximize your energy asset potential — from utilizing drops across existing anicuts to run-of-the-river designs — with proven technology trusted across Karnataka.",
  bgImage: hydroHeroImage
};

export const hydroAboutData = {
  title: "Harnessing the Power of Flowing Water",
  paragraph1: "Hydroelectric power is one of the most reliable and efficient forms of renewable energy available today. By capturing the kinetic energy of naturally flowing water, hydro plants convert water currents into clean, continuous electricity without consuming or polluting the water source.",
  paragraph2: "At Bhoruka Renewable Energy, we specialize in Run-of-the-River and Mini-Hydel schemes. Unlike traditional massive dam projects, our facilities utilize the natural flow and elevation drops of rivers and existing irrigation canals. This innovative approach ensures minimal ecological displacement while maintaining a robust, base-load power supply for the grid.",
  image: hydroDesImage
};

export const hydroStatsData = [
  {
    icon: <HistoryIcon className="w-6 h-6 text-[#0070c0]" />,
    tag: "Engineering Heritage",
    value: "40+ years",
    title: "A foundation built over generations",
    description: "40+ years of energy engineering — refined through generations of real-world application."
  },
  {
    icon: <FactoryIcon className="w-6 h-6 text-[#0070c0]" />,
    tag: "Operational Portfolio",
    value: "13+ plants",
    title: "Established across Karnataka",
    description: "Trusted by operators and the grid. Our extensive portfolio demonstrates our commitment to reliable energy generation."
  },
  {
    icon: <PowerIcon className="w-6 h-6 text-[#0070c0]" />,
    tag: "Power Capacity",
    value: "110+ MW",
    title: "Robust installed capacity",
    description: "Delivering substantial renewable energy to the national grid during both peak and off-peak seasons."
  },
  {
    icon: <EcoIcon className="w-6 h-6 text-[#0070c0]" />,
    tag: "Environmental Impact",
    value: "100%",
    title: "Ecological preservation",
    description: "Zero-emission, low-impact power generation utilizing existing natural river flows."
  }
];

export const hydroBenefitsData = [
  {
    icon: <LightningIcon className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Maximize Energy Output",
    description: "Proven turbine and generator technologies designed to maximize energy output from river flows and anicut drops."
  },
  {
    icon: <GlobeEcoIcon className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Low Ecological Impact",
    description: "By specializing in Run-of-the-River schemes, Bhoruka minimizes environmental footprint while providing robust power."
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Grid Stability & Security",
    description: "Hydropower provides excellent baseload reliability, stabilizing the regional grid and preventing downtimes."
  },
  {
    icon: <RefreshCycleIcon className="w-10 h-10 md:w-12 md:h-12" />,
    title: "Extend Plant Lifetime",
    description: "Targeted modernization and intelligent maintenance add decades to operational life."
  }
];