import teamCultureImg from '../assets/images/people/renewable-engineers-team.jpg';
import engineerPortrait from '../assets/images/people/lead-plant-engineer.jpg';
import safetyManagerPortrait from '../assets/images/people/ehs-safety-manager.jpg';
import supervisorPortrait from '../assets/images/people/operations-supervisor.jpg';

export const peopleData = {
  hero: {
    title: "Our People",
    subtitle: "People are our competitive advantage. Today, the organization is driven by a 250-strong team of dedicated professionals."
  },
  
  intro: {
    heading: "A Competitive Advantage",
    description: "The Bhoruka skill base continues to grow in engineering excellence and project management. With every new project, the BPCL team gets better equipped to face the challenges of the future. Resources have been invested to sharpen this aspect of BPCL's business through continuous training and personal development programmes, ensuring we meet the highest standards in all aspects of our operations.",
    image: teamCultureImg 
  },

  pillars: [
    {
      id: "01",
      title: "Training & Development",
      description: "People management is an important area of focus. It is our endeavor to provide at least 7 man-days of training to each employee during the year to ensure continuous growth.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      id: "02",
      title: "Health & Safety",
      description: "A safe workplace occupies prime position in BPCL's functioning. Each project site features a dedicated safety officer, with regular safety programs conducted by the National Safety Council.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      id: "03",
      title: "Human Rights",
      description: "Following ILO guidelines, we strictly prohibit child labor and discrimination. We honour the right to open communication and actively assist vulnerable groups in our operating communities.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      id: "04",
      title: "Whistle Blower Policy",
      description: "We demand the highest standards of professionalism, honesty, and integrity. Our policy provides a direct mechanism for employees to approach the Chairman of the Audit Committee.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ],

  testimonials: [
    {
      quote: "The 7 man-days of training I receive every year ensures that our engineering excellence grows with every single project we undertake.",
      name: "Dharmpal Agarwal",
      role: "Lead Plant Engineer",
      avatar: engineerPortrait 
    },
    {
      quote: "Collaborating with the National Safety Council allows me to enforce procedures that genuinely protect every employee from foreseeable work hazards.",
      name: "M. S. Sreenevas",
      role: "Project Safety Officer",
      avatar: safetyManagerPortrait 
    },
    {
      quote: "BPCL's commitment to a transparent environment and open communication makes it a workplace where ethics and integrity are truly valued.",
      name: "Ravi Kumar",
      role: "Operations Supervisor",
      avatar: supervisorPortrait 
    }
  ]
};