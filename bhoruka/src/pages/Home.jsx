import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CleanEnergyOverview from '../components/home/CleanEnergyOverview';
import EnergyVerticals from '../components/home/EnergyVerticals';
import StatsCounter from '../components/home/StatsCounter';
import MagazineFeature from '../components/home/MagazineFeature';
import AwardsHighlights from '../components/home/AwardsHighlights';

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <CleanEnergyOverview />
      <AwardsHighlights />
      <EnergyVerticals />
      <StatsCounter />
      <MagazineFeature />
    </main>
  );
};

export default Home;