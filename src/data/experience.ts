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

export const experienceData = [
  {
    title: 'Full Stack Developer',
    company: 'Reach Creative',
    location: 'Remote',
    period: 'Jan 2024 – Sept 2025',
    description:
      'Built Next.js applications for clients across diverse industries, integrating with multiple CMS platforms to deliver scalable, content-driven websites. Provided PR/code review feedback and translated complex designs into responsive, engaging user interfaces.',
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
      'Built and launched web and mobile apps in React and React Native, integrating Firebase and MongoDB for secure, scalable performance. Designed intuitive interfaces with Figma and Material UI, and ensured quality through end-to-end testing and clear team documentation.',
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
      'Collaborated in Chingu’s Voyage 41 to build an accessible travel planning app focused on inclusive design. In a separate sprint, developed a Pomodoro timer app with a partner, sharpening React skills and applying Agile workflows to improve time management and collaboration.',
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