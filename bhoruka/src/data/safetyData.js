// Import the certificate images using their exact filenames
import certNSCRaj from '../assets/images/certificates/cert1.jpeg';
import certNSCKoppal from '../assets/images/certificates/cert2.jpeg';
import certTUV from '../assets/images/certificates/cert3.png';
import certDAR from '../assets/images/certificates/cert4.png';
import certUKAS from '../assets/images/certificates/cert5.png';
import certISO14001 from '../assets/images/certificates/cert6.jpeg';
import certOHSAS18001 from '../assets/images/certificates/cert7.jpeg';
import certNSCShahapur from '../assets/images/certificates/cert8.jpeg';
import safetyHeroImg from '../assets/images/safety-environment-hero.jpg';

export const safetyData = {
  hero: {
    title: "Safety & Environment",
    subtitle: "A relentless commitment to occupational health, zero-harm environments, and sustainable ecological practices.",
    image: safetyHeroImg // Placeholder: Green landscape/Windmills
  },

  ohs: {
    heading: "Occupational Health & Safety",
    description: "At Bhoruka, we are deeply committed to continuously improving our safety performance. Top Management provides unrestricted resources to complete identified safety projects, ensuring there are no financial barriers to a safe workplace.",
    highlights: [
      {
        title: "Joint Safety Committees",
        desc: "Active committees, including workmen, operate in all power stations to plan and manage environmental, safety, and health requirements."
      },
      {
        title: "Rigorous Auditing",
        desc: "Regular internal audits are conducted across all sites to ensure strict adherence to our safety protocols and legal frameworks."
      },
      {
        title: "Award-Winning Safety",
        desc: "Recognized extensively by the National Safety Council for outstanding Good Safety Performance and Management Systems."
      }
    ]
  },

  environment: {
    heading: "Environmental Policy",
    description: "We strive to ensure continual improvement in environmental performance across all our power generation activities.",
    policies: [
      "Comply strictly with relevant environmental legislation and all applicable compliance requirements.",
      "Work actively towards the prevention of pollution and the conservation of natural resources.",
      "Uphold our health and safety policy to ensure safe, healthy, and secure working conditions.",
      "Enhance awareness and commitment to environmental protection among all employees through appropriate training.",
      "Continuously evaluate and monitor our legal and environmental compliance."
    ]
  },

  ims: {
    heading: "Integrated Management System (IMS)",
    description: "We have developed, established, and implemented an Integrated Management System based on stringent international standards. On a day-to-day basis, we maintain and improve this system to drive sustainable development. The scope of this system covers all our power stations and the Corporate Office, dictating our planning activities, delegation of power, procedures, and resource allocation."
  },

  // The Certificate Gallery
  certificates: [
    { id: 1, title: "ISO 14001:2004 - Bureau Veritas", img: certISO14001 },
    { id: 2, title: "OHSAS 18001:1999 - Bureau Veritas", img: certOHSAS18001 },
    { id: 3, title: "NSC Safety Award - Rajankollur", img: certNSCRaj },
    { id: 4, title: "NSC Safety Award - Koppal", img: certNSCKoppal },
    { id: 5, title: "NSC Safety Award - Shahapur", img: certNSCShahapur },
    { id: 6, title: "TUV CERT ISO 9001:2000", img: certTUV },
    { id: 7, title: "DAR Accreditation", img: certDAR },
    { id: 8, title: "UKAS Environmental Management", img: certUKAS },
  ]
};