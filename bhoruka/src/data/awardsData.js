import awardsHeroImg from '../assets/images/awards-hero.jpg';
import certsBgImg from '../assets/images/certifications-bg.jpg';

export const awardsData = {
  hero: {
    title: "Awards & Achievements",
    subtitle: "Over four decades of engineering excellence recognized by global institutions, state governments, and national bodies.",
    image: awardsHeroImg 
  },

  // Highlighted Global Certifications
  certifications: {
    heading: "Global Management Standards",
    description: "Bhoruka Power is rigorously audited and certified by international bodies like Bureau Veritas and ICS, reflecting our uncompromising commitment to global operational standards.",
    image: certsBgImg,
    items: [
      {
        id: "iso9001",
        title: "ISO 9001:2000 & 2015",
        category: "Quality Management",
        desc: "Certified by TUV & ICS for the Design, Development, and Installation of Hydel Power Houses, and transmission of power."
      },
      {
        id: "iso14001",
        title: "ISO 14001:1996 & 2004",
        category: "Environmental Management",
        desc: "Certified by Bureau Veritas (BVQI) for proactively achieving and maintaining strict environmental standards."
      },
      {
        id: "ohsas18001",
        title: "OHSAS 18001:1999",
        category: "Occupational Health & Safety",
        desc: "Certified by Bureau Veritas for enforcing zero-harm policies and rigorous safety assessment management systems."
      },
      {
        id: "electrical",
        title: "Class I Electrical Contractor",
        category: "Government Authorization",
        desc: "Authorized by the Chief Electrical Inspectorate, Govt. of Karnataka for testing relays, CT, PT, and Transformer Oil."
      }
    ]
  },

  // Thematic Awards Categories
  awardCategories: [
    {
      theme: "Safety Management",
      icon: "M9 12l2 2 4-4m10 5c0 2.21-1.79 4-4 4H7c-2.21 0-4-1.79-4-4V7c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v5z",
      awards: [
        {
          title: "Unnatha & Uttama Suraksha Puraskara",
          organization: "National Safety Council (NSC)",
          year: "2006-2008 & 2011",
          description: "Awarded multiple times for Best Safety Performance, Management Systems, and Best Safety Practice in the Electricity Category."
        },
        {
          title: "Greentech Silver Award",
          organization: "Greentech Foundation",
          year: "2002-2003 & 2009",
          description: "Recognized for outstanding achievement in safety management within the Power and Hydro Sectors."
        }
      ]
    },
    {
      theme: "Sustainability & Environment",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      awards: [
        {
          title: "CII-ITC Sustainability Award",
          organization: "CII-ITC",
          year: "2012",
          description: "Honored for significant and measurable achievements towards sustainable development."
        },
        {
          title: "Excellence in EHS",
          organization: "CII, Southern Region",
          year: "2010",
          description: "Received the Excellence Award for Meritorious Achievement in the Environmental Health and Safety category."
        },
        {
          title: "Greentech Bronze Award",
          organization: "Greentech Foundation",
          year: "2002-2003",
          description: "Recognized for outstanding achievement in the field of Environmental Management in the Hydro Sector."
        }
      ]
    },
    {
      theme: "Operational Excellence & Leadership",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      awards: [
        {
          title: "Overall Utility Performance",
          organization: "4th India Power Awards (Council of Power Utilities)",
          year: "2011",
          description: "Awarded for exceptional overall performance in the Small Hydro category."
        },
        {
          title: "Highest Capacity Installation Prize",
          organization: "Govt. of Karnataka & KREDL",
          year: "1996-2004",
          description: "Recipient of the 1st prize for the highest capacity installation of Small Hydro projects in the state."
        },
        {
          title: "Business Leadership Award",
          organization: "Solar Energy Society of India",
          year: "2002",
          description: "Recognized for pioneering leadership and strategic vision in the renewable energy market."
        },
        {
          title: "Best Private Sector Hydel Developer",
          organization: "Intl. Association for Small Hydro (IASH)",
          year: "1997",
          description: "A foundational recognition marking BPCL as the premier private developer in the Indian hydel sector."
        }
      ]
    },
    {
      theme: "HR & Corporate Social Responsibility",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      awards: [
        {
          title: "Corporate Social Responsibility Award",
          organization: "TERI (The Energy and Resources Institute)",
          year: "2003-2004",
          description: "Honored for exceptional community development and CSR initiatives."
        },
        {
          title: "HR Excellence Award",
          organization: "Greentech Foundation",
          year: "2010",
          description: "Awarded specifically for excellence in employee training and development programs."
        },
        {
          title: "Certificate of Merit on 5S System",
          organization: "CII, Chennai",
          year: "2010",
          description: "Recognized for maintaining high standards of workplace organization and efficiency."
        }
      ]
    }
  ]
};