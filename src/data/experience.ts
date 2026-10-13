export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  type: 'work' | 'education';
  skills?: string[];
  image?: string;
};

export const experienceData: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'NoTambourine',
    location: 'Remote',
    period: 'Apr 2026 – Present',
    description:
      'Full-stack engineer embedded in Shopify e-commerce clients end-to-end: in the repo, in the rituals, in the work. AI-native by default. Here to ship. Absolutely no tambourines.',
    type: 'work',
    image: '/experience/notambourine.svg',
  },
  {
    title: 'Owner & Developer',
    company: 'Artemis Bytes LLC',
    location: 'Odessa, TX',
    period: 'Jan 2025 – Present',
    description:
      'Web and mobile solutions for a small set of clients, mostly in Shopify, Next.js, and Prismic. Handles each project from discovery to delivery.',
    type: 'work',
    skills: ['Shopify', 'Next.js', 'TypeScript', 'Project Management', 'Technical Writing', 'Client Relations'],
    image: '/experience/artemisbytes.webp',
  },
  {
    title: 'Full Stack Developer',
    company: 'Reach Creative',
    location: 'Remote',
    period: 'Jan 2024 – Sept 2025',
    description:
      'Next.js sites for clients with content-heavy needs, leaning heavily on CMS platforms. Worked side by side with designers every day and left with strong opinions about spacing.',
    type: 'work',
    skills: [
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Prismic',
      'Sanity',
      'Supabase',
      'Tailwind',
      'SCSS',
      'Vue.js',
      'Craft CMS',
      'WordPress'
    ],
    image: '/experience/reach.webp'
  },
  {
    title: 'Junior Software Developer',
    company: 'IBG Software',
    location: 'Remote',
    period: 'Nov 2022 – Jan 2024',
    description:
      'First dev job, many hats. Worked on a food delivery platform and a rideshare app, redesigned their internal tools, and built an in-house applicant tracking system to hire drivers. Learned the stack by shipping all of it.',
    type: 'work',
    skills: ['React Native', 'Firebase', 'Node.js', 'TypeScript', 'Cypress', 'MongoDB', 'React', 'Redux', 'JavaScript', 'Express', 'REST'],
    image: '/experience/ibg.webp'
  },
  {
    title: 'Software Developer',
    company: 'Chingu',
    location: 'Remote',
    period: 'Oct 2022 – Nov 2022 & Mar 2023',
    description:
      'Volunteer team sprints. Built an accessible travel planner in Voyage 41 and a Pomodoro timer with a partner. Learned Agile by doing it.',
    type: 'work',
    skills: ['React', 'Agile', 'JavaScript'],
    image: '/experience/chingu.webp'
  },
  {
    title: 'Web Development Certificate',
    company: 'The University of Texas at Austin',
    location: 'Austin, TX',
    period: 'Jun 2022 – Sep 2022',
    type: 'education',
    image: '/experience/longhorns.webp'
  },
  {
    title: 'Robotics Teacher',
    company: 'ECISD',
    location: 'Odessa, TX',
    period: 'Aug 2021 – Jul 2022',
    type: 'work',
    image: '/experience/ecisd.webp'
  },
  {
    title: 'Elementary Music Specialist',
    company: 'ECISD',
    location: 'Odessa, TX',
    period: 'Aug 2019 – Jul 2021',
    type: 'work',
    image: '/experience/ecisd.webp'
  },
  {
    title: 'AIM Technician',
    company: 'Southwest Conservation Corps',
    location: 'Las Cruces, NM',
    period: 'Apr 2018 – Oct 2018',
    type: 'work',
    image: '/experience/scc.webp'
  },
  {
    title: 'Trail Worker',
    company: 'California Conservation Corps',
    location: 'Trinity Alps, CA',
    period: 'May 2017 – Sep 2017',
    type: 'work',
    image: '/experience/ccc.webp'
  },
  {
    title: 'Teaching Assistant',
    company: 'The University of Texas at El Paso',
    location: 'El Paso, TX',
    period: 'Fall 2014 – Spring 2017',
    type: 'work',
    image: '/experience/utep.webp'
  },
  {
    title: 'Graduate Field Researcher',
    company: 'The University of Texas at El Paso',
    location: 'El Paso, TX',
    period: 'Fall 2014 – Spring 2017',
    type: 'work',
    image: '/experience/utep.webp'
  },
  {
    title: 'M.S. Biological Sciences',
    company: 'The University of Texas at El Paso',
    location: 'El Paso, TX',
    period: 'Aug 2014 – May 2017',
    type: 'education',
    image: '/experience/utep.webp'
  },
  {
    title: 'B.S. Ecology & Evolutionary Biology',
    company: 'The University of Texas at El Paso',
    location: 'El Paso, TX',
    period: 'Aug 2009 – May 2014',
    type: 'education',
    image: '/experience/utep.webp'
  }
];