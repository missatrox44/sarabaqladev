export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  image: string;
  liveDemo?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'crab-city-server-rotation',
    title: 'Crab City Server Rotation',
    shortDescription:
      'A React app with Firebase Realtime Database that digitized table rotation for a local restaurant, replacing a manual whiteboard system.',
    longDescription:
      'Crab City Server Rotation is a modern and efficient solution designed to streamline table rotations for a local restaurant. Initially, the restaurant managed rotations using a manual whiteboard system which proved challenging during peak hours. To provide a more optimized solution, my colleagues and I developed this React web app. At its core, the application leverages Firebase’s Realtime Database to ensure that table rotation data is managed in real time, giving staff an up-to-date view of table statuses. This improved customer service and streamlined operations. We also incorporated Tailwind CSS to create an intuitive and visually appealing interface. While the provided link showcases the demo, the actual implementation for the restaurant remains private, complete with its own secure login.',
    problem:
      'The restaurant’s manual whiteboard system for tracking table rotations was inefficient and difficult to manage during peak hours.',
    solution:
      'Developed a React app backed by Firebase Realtime Database, providing real-time updates of table statuses and a user-friendly Tailwind CSS interface.',
    impact:
      'Enhanced restaurant operations by eliminating manual processes, improving staff efficiency, and ensuring better customer service during busy times.',
    techStack: ['React', 'Firebase Realtime Database', 'Tailwind CSS'],
    image: 'projects/crab-city.png',
    liveDemo: 'https://crab-city.vercel.app/',
    github: 'https://github.com/missatrox44/server-rotation-crab-city',
    featured: true,
  },
  {
    id: 'love-thy-selfie',
    title: 'Love Thy Selfie',
    shortDescription:
      'A mobile-first React app for a local photo booth business, featuring service overviews, customer reviews, and a booking contact form.',
    longDescription:
      'Love Thy Selfie is an intuitive, mobile-first React application designed to digitally transform a local photo booth business. Embodying the spirit of "Love Thy Selfie," this platform offers users a comprehensive overview of the diverse services provided, including vivid picture examples and authentic customer reviews. It also showcases the geographic service areas to help customers understand their reach. One of the key features is a seamlessly integrated contact form powered by Email.js, enabling customers to easily inquire about booking opportunities. With its user-friendly interface and responsive design, the Love Thy Selfie website effectively brings the unique essence of the photo booth experience online, and at the fingertips of potential customers.',
    problem:
      'The photo booth business lacked an engaging digital presence to showcase services, reviews, and booking options for potential customers.',
    solution:
      'Built a responsive, mobile-first React app that highlights services, customer reviews, and service areas while integrating Email.js for seamless booking inquiries.',
    impact:
      'Expanded the business’s reach by providing an accessible, visually engaging, and easy-to-use online presence that helps attract and convert new customers.',
    techStack: ['React', 'Email.js', 'CSS3', 'JavaScript'],
    image: 'projects/love_thy_selfie.png',
    liveDemo: 'https://www.lovethyselfiephotobooth.com/',
    github: 'https://github.com/missatrox44/love-thy-selfie',
    featured: false,
  },
  {
    id: 'ohs-broncho-band',
    title: 'OHS Broncho Band',
    shortDescription:
      'Refactored and redesigned the Odessa High School Broncho Band website for mobile responsiveness, updated visuals, and better user experience.',
    longDescription:
      'This project involved a comprehensive refactoring of the Odessa High School Broncho Band\'s website. It was redesigned to be mobile responsive, while also updating images and links for a more appealing and user-friendly experience. New pages were added, working in close collaboration with the band director to ensure that the final design echoed her vision and faithfully represented the values of the OHS Broncho Band. The website was crafted using WiX and continues to evolve, reflecting the ever-changing spirit of the band program.',
    problem:
      'The original site was outdated, lacked mobile responsiveness, and did not effectively represent the band program’s values or vision.',
    solution:
      'Redesigned the site for mobile responsiveness, updated visuals and links, and collaborated with the band director to create new pages aligned with her vision.',
    impact:
      'Improved accessibility and usability for students, parents, and the community. The redesigned site strengthened the band’s online presence and provided a professional digital representation.',
    techStack: ['WiX', 'HTML5', 'CSS3'],
    image: 'projects/odessa_band_screenshot.png',
    liveDemo: 'https://www.odessaband.org/',
    github: '',
    featured: false,
  },
  {
    id: 'pomodoro-timer',
    title: 'Pomodoro Timer',
    shortDescription:
      'A productivity app built during a week-long Chingu paired programming challenge, featuring a unique "Developer Mode" for rapid testing.',
    longDescription:
      'The fruit of a dynamic week-long paired programming challenge, curated by Chingu. Crafted by two efficiency enthusiasts, this app breathes fresh life into the revered Pomodoro technique. While inspired by existing apps, we added our flair with a unique "Developer Mode," which accelerates time to let users quickly experience all functionalities. Enhance your productivity cycles with the Pomodoro Timer, and witness time-management in a whole new light!',
    problem:
      'Existing Pomodoro apps felt generic and lacked developer-focused enhancements or ways to quickly demo features.',
    solution:
      'Built a React/Vite app that not only replicates the Pomodoro technique but also adds a unique "Developer Mode" to fast-forward cycles for testing and demos.',
    impact:
      'Helped users improve productivity by streamlining focus cycles, while also serving as a creative showcase of rapid prototyping and collaborative programming.',
    techStack: ['React', 'Vite', 'TypeScript', 'JavaScript'],
    image: 'projects/pomodoro_timer.png',
    liveDemo: 'https://missatrox44.github.io/pomodoro-clock/',
    github: 'https://github.com/missatrox44/pomodoro-clock',
    featured: false,
  },
  {
    id: 'travel-2-it',
    title: 'Travel 2 It',
    shortDescription:
      'A collaborative trip-planning app built during Chingu Voyage 41, featuring editable stacks, drag-and-drop cards, and light/dark modes.',
    longDescription:
      'Introducing Travel 2 It – your next must-have travel companion, masterfully crafted during the 6-week Chingu Voyage 41 journey. Dive into a seamless trip-planning experience, where organizing is as simple as creating editable stacks and cards. From jotting down must-visit spots to curating detailed plans, each card is your canvas. Not set on the order? Fluidly drag and drop cards or entire stacks until it feels just right. Enjoy elegant Dark & Light Modes, and share your journeys with loved ones via Email, Facebook, or WhatsApp. Make every trip a masterpiece with Travel 2 It.',
    problem:
      'Travel planning often involves scattered notes, rigid tools, or inflexible itineraries that make organizing trips frustrating.',
    solution:
      'Developed a React/Vite app with Chakra UI that lets users create editable stacks and cards, reorder them with drag-and-drop, toggle light/dark modes, and share trips directly with others.',
    impact:
      'Simplified the trip-planning process, making it intuitive and collaborative. Empowered users to stay organized and easily share their plans with friends and family.',
    techStack: ['React', 'Vite', 'Chakra UI', 'JavaScript'],
    image: 'projects/travel_2_it.png',
    liveDemo: 'https://cosmic-gnome-4fc624.netlify.app/',
    github: 'https://github.com/missatrox44/travel2it',
    featured: true,
  }
];