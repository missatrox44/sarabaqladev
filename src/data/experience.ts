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
      'Partnered with clients like National Geographic and Core Spaces to deliver performant, CMS-driven web experiences. Developed Next.js components and Craft CMS integrations, provided PR/code review feedback, and translated intricate designs into responsive, engaging sites.',
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
    // description:
    //   'Completed an intensive coding bootcamp covering full stack JavaScript, React, Node.js, and responsive design.',
    type: 'education',
    image: '/experience/longhorns.webp'
  },
  {
    title: 'Robotics Teacher',
    company: 'ECISD',
    location: 'Odessa, TX',
    period: 'Aug 2021 – Jul 2022',
    // description:
    //   'Taught middle school robotics with an emphasis on computer science and engineering principles. Used LEGO Spike Prime, micro:bit, and Ozobots for hands-on learning.',
    type: 'work',
    // skills: ['STEM Education', 'Robotics', 'Curriculum Development']
    image: '/experience/ecisd.webp'
  },
  {
    title: 'Elementary Music Specialist',
    company: 'ECISD',
    location: 'Odessa, TX',
    period: 'Aug 2019 – Jul 2021',
    // description:
    //   'Taught music classes to Pre-K through 5th grade and founded after-school piano and guitar clubs. Promoted creativity and engagement through music education.',
    type: 'work',
    // skills: ['Classroom Management', 'Creative Instruction', 'Youth Engagement']
    image: '/experience/ecisd.webp'
  },
  {
    title: 'AIM Technician',
    company: 'Southwest Conservation Corps',
    location: 'New Mexico, USA',
    period: 'Apr 2018 – Oct 2018',
    // description:
    //   'Performed aquatic habitat monitoring for the BLM. Collected water samples, surveyed flora and fauna, and documented site conditions using scientific protocols.',
    type: 'work',
    // skills: ['Environmental Science', 'Field Sampling', 'GIS']
    image: '/experience/scc.webp'
  },
  {
    title: 'Trail Worker',
    company: 'California Conservation Corps',
    location: 'Trinity Alps, CA',
    period: 'May 2017 – Sep 2017',
    // description:
    //   'Maintained wilderness trails and constructed rock walls, steps, and water bars. Collaborated in remote backcountry teams, building resilience and teamwork in challenging conditions.',
    type: 'work',
    // skills: ['Teamwork', 'Manual Labor', 'Backcountry Safety']
    image: '/experience/ccc.webp'
  },
  {
    title: 'Teaching Assistant',
    company: 'The University of Texas at El Paso',
    location: 'El Paso, TX',
    period: 'Fall 2014 – Spring 2017',
    // description:
    //   'Led lab instruction for various biology courses, created assignments, and supported students with hands-on experiments. Coordinated field trips and collaborated with faculty on curriculum delivery.',
    type: 'work',
    // skills: ['Teaching', 'Science Communication', 'Lab Management']
    image: '/experience/utep.webp'
  },
  {
    title: 'Graduate Field Researcher',
    company: 'The University of Texas at El Paso',
    location: 'El Paso, TX',
    period: 'Fall 2014 – Spring 2017',
    // description:
    //   'Collected and analyzed field data on grasshopper populations and plant communities. Assisted with wildlife tagging and conducted biodiversity surveys. Developed strong research, documentation, and data collection skills.',
    type: 'work',
    // skills: ['Research', 'Fieldwork', 'Data Analysis']
    image: '/experience/utep.webp'
  },
  {
    title: 'M.S. Biological Sciences',
    company: 'The University of Texas at El Paso',
    location: 'El Paso, TX',
    period: 'Aug 2014 – May 2017',
    // description:
    //   'Researched ecology and evolutionary biology topics. Conducted field work and data analysis on insect populations.',
    type: 'education',
    image: '/experience/utep.webp'
  },
  {
    title: 'B.S. Ecology & Evolutionary Biology',
    company: 'The University of Texas at El Paso',
    location: 'El Paso, TX',
    period: 'Aug 2009 – May 2014',
    // description:
    //   'Studied ecological systems and animal behavior. Participated in research and field studies throughout the Southwest.',
    type: 'education',
    image: '/experience/utep.webp'
  }
];