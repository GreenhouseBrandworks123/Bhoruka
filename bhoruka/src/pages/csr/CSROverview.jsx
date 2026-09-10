// src/pages/csr/CSROverview.jsx
import React, { Suspense, lazy } from 'react';

// Static Imports
import OverviewHero from './overview-sections/OverviewHero';

// Lazy Loaded Sections
const CommitmentIntro = lazy(() => import('./overview-sections/CommitmentIntro'));
const CorePillarsOverview = lazy(() => import('./overview-sections/CorePillarsOverview'));
const OrganisationOverview = lazy(() => import('./overview-sections/OrganisationOverview'));
const FactSheetOverview = lazy(() => import('./overview-sections/FactSheetOverview'));
const GalleryOverview = lazy(() => import('./overview-sections/GalleryOverview'));
const NewsEventsOverview = lazy(() => import('./overview-sections/NewsEventsOverview'));
const NewslettersOverview = lazy(() => import('./overview-sections/NewslettersOverview'));
const ContactOverview = lazy(() => import('./overview-sections/ContactOverview'));

const SectionLoader = () => (
  <div className="w-full flex justify-center py-12">
    <div className="w-8 h-8 border-4 border-slate-200 border-t-[#0B4B94] rounded-full animate-spin"></div>
  </div>
);

export default function CSROverview() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      
      <OverviewHero />

      <div className="flex flex-col w-full">
        <Suspense fallback={<SectionLoader />}>
          
          {/* New Stylish Intro Component */}
          <CommitmentIntro />
          
          {/* The rest of your components */}
          <CorePillarsOverview />
          <OrganisationOverview />
          <FactSheetOverview />
          <GalleryOverview />
          <NewsEventsOverview />
          <NewslettersOverview />
          <ContactOverview />
          
        </Suspense>
      </div>

    </div>
  );
}