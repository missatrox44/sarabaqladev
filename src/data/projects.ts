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
  attributions?: {
    org: 'Reach' | 'Heco' | 'Freelance' | 'Personal' | 'Experimental' | 'Prototype';
    url?: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "manresa-wilds",
    title: "Manresa Wilds",
    shortDescription:
      "Next.js + Prismic site for a first-of-its-kind waterfront park in Norwalk, CT, built with a modular, mobile first approach.",
    longDescription:
      "At Reach, I helped launch a public facing Next.js site powered by Prismic for Manresa Wilds, a new waterfront park. I contributed to sprint planning, PR reviews, and implementation feedback, while building responsive, accessible layouts with slice-based components for easy content updates.",
    problem:
      "The Manresa Island Corporation needed a modern platform to share its vision of transforming a decommissioned power plant into 1.75 miles of public waterfront access, with flexible publishing for events, press, and ecological storytelling.",
    solution:
      "We built a responsive Next.js app integrated with Prismic CMS, using slice-based components for modular content. I ensured accessible, performant layouts and components.",
    impact:
      "Delivered a scalable hub that communicates the park’s mission, supports events and press coverage, and engages the community. The site strengthens outreach, fundraising, and transparency around restoration, reconnecting the public to the waterfront for the first time in 75 years.",
    techStack: ["Next.js", "JavaScript", "Prismic", "Tailwind", "SCSS", "GSAP", "MailChimp", "Vercel"],
    image: "/projects/manresa.png",
    liveDemo: "https://www.manresawilds.org/",
    featured: true,
    attributions: [
      { org: 'Reach', url: 'https://reachcreative.com' },
    ]
  },
  {
    id: "identity-digital-premium",
    title: "Identity Digital – Premium Catalog",
    shortDescription:
      "Standalone Next.js app embedded in Webflow for browsing and filtering premium domain names with CSV export and Hubspot/Salesforce integration.",
    longDescription:
      "At Reach, in collaboration with Heco, I delivered a standalone Next.js app embedded in Webflow that lets customers browse, filter, and export premium domains. The app connects with Hubspot and Salesforce to streamline lead capture while staying fully responsive and seamless within Identity Digital’s marketing site.",
    problem:
      "Identity Digital needed a way to showcase premium domains with advanced filtering and simple list sharing, while tying directly into existing Hubspot and Salesforce workflows.",
    solution:
      "Built a Webflow-embedded Next.js application with filtering, CSV export, and lead capture integrated into Hubspot and Salesforce. Domain data is managed in Google Sheets and transformed into a JSON API for the app.",
    impact:
      "Provided a user-friendly catalog that improved client engagement and simplified sales. CSV exports supported faster decision making, and CRM integration reduced friction for the sales team while allowing the catalog to scale with new inventory.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Webflow",
      "Hubspot",
      "Salesforce",
      "Google Sheets + Apps Script"
    ],
    image: "/projects/premium-catalog.png",
    liveDemo: "https://www.identity.digital/premium-catalog",
    featured: true,
    attributions: [
      { org: 'Reach', url: 'https://reachcreative.com' },
      { org: 'Heco', url: 'https://www.helloheco.com' },
    ]
  },
  {
    id: 'frommers',
    title: "Frommer's",
    shortDescription:
      "A complete redesign and rebuild of Frommer’s travel site, migrating legacy data into Craft CMS and implementing modern SEO and ad solutions.",
    longDescription:
      "At Reach, I worked on the full redesign and rebuild of Frommer’s, migrating legacy content into Craft CMS and delivering a faster, mobile-friendly platform. The new site improved SEO, streamlined content workflows, and added flexible ad placements to open new revenue streams.",
    problem:
      "Frommer’s legacy site was outdated, hard to maintain, poorly optimized for SEO, and lacked effective ad infrastructure.",
    solution:
      "Rebuilt the platform on Craft CMS with responsive templates, structured content migration, SEO best practices, and a flexible ad injection system.",
    impact:
      "Improved site performance and organic visibility, streamlined editorial workflows, and expanded monetization opportunities without sacrificing usability.",
    techStack: ['Craft CMS', 'Twig', 'MySQL', 'PHP', 'SCSS', 'JavaScript', 'Laravel', 'Vite', 'Tailwind', 'Craft Cloud'],
    image: '/projects/frommers.png',
    liveDemo: 'https://www.frommers.com/',
    github: '',
    featured: true,
    attributions: [
      { org: 'Reach', url: 'https://reachcreative.com' },
    ],
  },
  {
    id: "nantbio-renewables",
    title: "NantBio Renewables",
    shortDescription:
      "WordPress site for a sustainability focused company selling compostable straws, tableware, and cutlery made from ocean calcium sand.",
    longDescription:
      "At Reach, I contributed to the development of NantBio Renewables’ WordPress site showcasing Wave Ware™, a line of compostable straws, plates, bowls, and cutlery. I built custom pages and components, added interactive sliders and modals connected to HubSpot forms.",
    problem:
      "NantBio Renewables needed a flexible marketing site to promote Wave Ware™, highlight its sustainable materials, and capture leads through storytelling and press content.",
    solution:
      "Built key site components in WordPress with Blade templating, implemented Swiper.js carousels and HubSpot integrated modals, and ensured a mobile responsive, brand consistent experience across the catalog and blog.",
    impact:
      "Launched a sustainable focused web presence that improved customer engagement, streamlined lead capture, and positioned NantBio Renewables as a trusted provider of compostable, USA made tableware.",
    techStack: [
      "WordPress",
      "Blade",
      "PHP",
      "JavaScript",
      "Swiper.js",
      "HubSpot",
      "Laravel",
      "GSAP",
      "Vite",
      "Tailwind",
      "SCSS"
    ],
    image: "/projects/nant-bio.png",
    liveDemo: "https://nantbr.com/",
    featured: false,
    attributions: [
      {
        org: "Reach",
        url: "https://reachcreative.com"
      }
    ]
  },
  {
    id: "resolute-ventures",
    title: "Resolute Ventures",
    shortDescription:
      "Modernized venture fund site with rich motion, connected to Prismic with editable portfolio and team pages.",
    longDescription:
      "At Reach, I helped rebuild Resolute Ventures’ marketing site in Next.js with Prismic CMS. The redesign introduced subtle animations, modernized the brand, and gave the team full control over portfolio, bios, and community content without developer handoffs.",
    problem:
      "Resolute’s old site was dated, slow, and difficult for the team to update.",
    solution:
      "Rebuilt the site in Next.js with GSAP animations, modeled content in Prismic, and deployed on Vercel for speed and scalability.",
    impact:
      "Delivered a faster, contemporary site that reflects Resolute’s founder first ethos while enabling quick, non technical content updates.",
    techStack: [
      "Next.js",
      "JavaScript",
      "Prismic",
      "Tailwind",
      "Swiper.js", "GSAP", "SCSS", "Vercel"
    ],
    image: "/projects/resolute.png",
    liveDemo: "https://www.resolute.vc/",
    featured: false,
    attributions: [
      {
        org: "Reach",
        url: "https://www.reachcreative.com/"
      }
    ]
  },
  {
    id: "nhrl",
    title: "NHRL",
    shortDescription:
      "Contributed to NHRL’s legacy Next.js app by implementing new Prismic components promoting Havoc Academy.",
    longDescription:
      "At Reach, I updated NHRL’s legacy Next.js app by developing a reusable Prismic slice to promote Havoc Academy. I ensured responsive layouts matched design specs and integrated smoothly with the existing custom CSS codebase.",
    problem:
      "NHRL needed a way to showcase Havoc Academy while giving their marketing team flexibility to update content without heavy dev support.",
    solution:
      "Built a customizable Prismic slice with responsive layouts and integrated it into the Next.js app using the existing CSS approach.",
    impact:
      "Enabled the client to promote Havoc Academy independently, improved mobile responsiveness, and extended the usefulness of their legacy site.",
    techStack: [
      "Next.js",
      "Prismic",
      "JavaScript",
      "Nodemailer",
      "Swiper.js",
      "SCSS",
      "Vercel",
    ],
    image: "/projects/nhrl.png",
    liveDemo: "https://www.nhrl.io/",
    featured: false,
    attributions: [
      {
        org: "Reach",
        url: "https://www.reachcreative.com/"
      }
    ]
  },
  {
    id: "namecom-api",
    title: "Name.com API Landing Page",
    shortDescription: "Landing page for Name.com’s AI-ready API with localized content and HubSpot integration.",
    longDescription:
      "At Reach, in collaboration with Heco, I contributed to the landing page for Name.com’s AI-ready API. I implemented localization with Vue i18n, styled with Tailwind, refined UI details, and integrated a HubSpot contact form to streamline lead capture.",
    problem:
      "Name.com needed a multilingual landing page to showcase its API and connect developers and businesses with the sales team.",
    solution:
      "Built a responsive Vue page with localization and a HubSpot powered contact form for direct lead capture.",
    impact:
      "Delivered a polished, multilingual landing page that boosted API visibility and simplified customer engagement.",
    techStack: ["Vue", "Tailwind", "Vite", "Vue i18n", "TypeScript"],
    image: "/projects/nameapi.png",
    liveDemo: "https://www.name.com/nameapi",
    featured: false,
    attributions: [
      { org: "Reach", url: "https://reachcreative.com" },
      { org: "Heco", url: "https://helloheco.com" }
    ]
  },
  {
    id: "nat-geo-travel-texas",
    title: "National Geographic – Travel Texas",
    shortDescription:
      "Enhanced National Geographic’s Travel Texas microsite with new articles, carousel media, films, and interactive map updates using Spline.",
    longDescription:
      "At Reach, I supported content and feature updates for National Geographic’s Travel Texas microsite. I refreshed carousel media, added articles, integrated two films, and updated the Spline powered interactive map with new points of interest, all while preserving smooth performance across its animation heavy design.",
    problem:
      "The client needed fresh articles, films, and map updates while ensuring the site’s complex 3D and animation framework remained stable.",
    solution:
      "Updated media, articles, and map points while integrating films with adjusted playback logic to fit seamlessly into the experience.",
    impact:
      "Kept the microsite engaging and performant, showcasing new Texas stories while maintaining the integrity of animations and 3D interactions.",
    techStack: [
      "Next.js",
      "SCSS",
      "Three.js",
      "React Three Fiber",
      "Spline",
      "GSAP",
      "Keen Slider",
      "Tailwind"
    ],
    image: "/projects/travel-texas.png",
    liveDemo: "https://www.nationalgeographic.com/travel-texas/",
    featured: false,
    attributions: [
      {
        org: "Reach",
        url: "https://reachcreative.com"
      }
    ]
  },
  {
    id: "nat-geo-earth-month-sweepstakes",
    title: "National Geographic Earth Month Sweepstakes",
    shortDescription:
      "Supported National Geographic’s annual sweepstakes campaign with content updates and Supabase driven entry restrictions.",
    longDescription:
      "At Reach, I updated the legacy Next.js app for National Geographic’s Earth Month Sweepstakes, refreshing campaign content and adding Supabase logic to enforce daily entry limits and automatically close the form when the promotion ended.",
    problem:
      "The sweepstakes site needed updated content and guardrails to prevent multiple daily entries.",
    solution:
      "Refreshed copy and assets for 2025 and integrated Supabase to validate one entry per user per day with automatic form disable after the deadline.",
    impact:
      "Created a smoother, compliant sweepstakes experience that reduced admin cleanup and gave users clear, reliable participation rules.",
    techStack: [
      "Next.js",
      "Tailwind",
      "Supabase",
      "JavaScript",
      "SCSS",
      "Formik"
    ],
    image: "/projects/nat-geo-earth-month.png",
    liveDemo: "https://www.nationalgeographic.com/ourhomesweepstakes/",
    featured: false,
    attributions: [
      {
        org: "Reach",
        url: "https://reachcreative.com"
      }
    ]
  },
  {
    id: "nat-geo-travel-nevada",
    title: "National Geographic – Travel Nevada",
    shortDescription:
      "Maintained National Geographic’s Travel Nevada microsite with new media, stories, and shorts integrated into its highly animated layouts.",
    longDescription:
      "At Reach, I added content udpates for National Geographic’s Travel Nevada microsite, adding new stories, images, and shorts into its animation heavy Next.js build. I ensured the masonry grid, carousels, and stacking card effects continued to perform smoothly across devices.",
    problem:
      "The site needed content refreshes while its complex animated layouts risked breaking during updates.",
    solution:
      "Integrated new media and editorial content into the grid, carousel, and card components, maintaining animations and responsive behavior.",
    impact:
      "Kept the microsite fresh and engaging with new content while preserving the integrity of its interactive design and performance.",
    techStack: [
      "Next.js",
      "JavaScript",
      "SCSS",
      "GSAP",
      "Swiper.js",
      "Zustand",
    ],
    image: "/projects/travel-nevada.png",
    liveDemo: "https://www.nationalgeographic.com/travel-nevada/",
    featured: false,
    attributions: [
      {
        org: "Reach",
        url: "https://reachcreative.com"
      }
    ]
  },
  {
    id: "core-spaces-strategy",
    title: "Core Spaces – Strategy Page",
    shortDescription:
      "Built the new Strategy page for Core Spaces, integrating dynamic content from Prismic and showcasing their student housing and build-to-rent strategies.",
    longDescription:
      "At Reach, in collaboration with Heco, I built the Strategy page for Core Spaces’ corporate site. Powered by Prismic, the page highlights strategy pillars, metrics, and case studies with CMS driven content, supported by smooth animations for a polished, responsive experience.",
    problem:
      "Core Spaces needed a new page to communicate its strategy and market leadership in a way that was design driven yet easy for non technical staff to update.",
    solution:
      "Built a CMS driven page with reusable Prismic slices for metrics, pillars, case studies, and video, enhanced with animation and UI libraries.",
    impact:
      "Delivered a visually engaging, flexible page that elevated the brand, clearly communicated Core’s growth strategy, and empowered staff to manage updates independently.",
    techStack: [
      "Next.js",
      "Prismic",
      "SCSS",
      "GSAP",
      "Linus",
      "JavaScript",
      "Vercel"

    ],
    image: "/projects/core-spaces.png",
    liveDemo: "https://corespaces.com/strategy",
    featured: false,
    attributions: [
      {
        org: "Reach",
        url: "https://reachcreative.com"
      },
      {
        org: "Heco",
        url: "https://helloheco.com"
      }
    ]
  },
  {
    id: "motorola-brand-guidelines",
    title: "Motorola Brand Guidelines",
    shortDescription: "CMS-driven brand guidelines site for Motorola Solutions with custom styling options and animated components.",
    longDescription: "I contributed on the tail end of this project, making content updates and extending CMS functionality. My work included adding options for custom styles in Prismic, styling labels, and refining UI consistency. The site provides Motorola’s internal and external teams with centralized access to typography, imagery, and brand guidelines, ensuring cohesive use of their brand assets.",
    problem: "Motorola needed a centralized, easy-to-update platform for maintaining brand consistency across typography, imagery, and other assets.",
    solution: "Built a CMS-powered guidelines site with Prismic, allowing content editors to easily update styles and assets. Extended CMS schema for custom styles and applied design refinements to improve usability and brand fidelity.",
    impact: "Streamlined Motorola’s ability to maintain and distribute brand guidelines, reducing manual overhead for their design and marketing teams and ensuring consistent brand execution.",
    techStack: ["Prismic", "Tailwind", "SCSS", "GSAP", "Next.js"],
    image: "/projects/motorola.png",
    liveDemo: "https://brand-guidelines.motorolasolutions.com/",
    featured: false,
    attributions: [
      { org: "Reach", url: "https://reachcreative.com" }
    ]
  },
  {
    id: 'quality-water-4-usa',
    title: 'Quality Water 4 USA',
    shortDescription:
      'A modern, customer-friendly landing page for a local water purification company with clear calls to action and a free water analysis form.',
    longDescription:
      'Quality Water 4 USA is a landing page built for a local business specializing in water purification systems. The site features a clean, modern design with intuitive navigation, allowing customers to easily learn about the company’s services. Visitors can explore key offerings, read customer testimonials, and get answers to common concerns through a dedicated FAQ section. A prominently placed form encourages scheduling a free water analysis, turning interest into action. Designed for clarity and trust, the layout uses intuitive navigation and strong calls to action throughout to boost customer engagement and conversions.',
    problem:
      'The business needed a professional online presence that clearly communicated its services and encouraged customers to schedule water analyses.',
    solution:
      'Designed and developed a modern landing page highlighting services, testimonials, FAQs, and a clear call-to-action form for free water analysis scheduling.',
    impact:
      'Improved the company’s digital visibility and customer engagement, helping convert site visitors into leads with a streamlined scheduling flow.',
    techStack: ['Next.js', 'Tailwind', 'Formspree', 'Vercel', 'TypeScript'],
    image: 'projects/quality-water-4-usa.png',
    liveDemo: 'https://qualitywater4usa.com',
    github: '',
    featured: false,
    attributions: [
      { org: 'Freelance' }
    ],
  },
  {
  id: 'paleteria-snacks',
  title: 'Paleteria & Snacks',
  shortDescription:
    'A playful, mobile responsive landing page for a demo Paleteria & Snacks store with bilingual support, interactive menu, and engaging animations.',
  longDescription:
    'Paleteria & Snacks is a demo landing page built to showcase a modern, customer-friendly design for a local dessert and snack shop. The site features a looping video hero section, a sticky navigation bar, and a category-driven food menu with swipe navigation for mobile users. Each food item is displayed on an animated flip card, showing images and details in a fun, interactive way. A language toggle powered by Zustand allows seamless switching between English and Spanish, making the site accessible to a wider audience. The landing page also includes a location and hours section with Google Maps integration and dummy contact information for a realistic storefront feel.',
  problem:
    'Demonstrate how a small local business, like a snack and dessert shop, can benefit from a modern, responsive, and bilingual landing page to attract and engage customers.',
  solution:
    'Designed and developed a demo web app with responsive layouts, bilingual support, interactive food menus, and embedded location details to highlight the possibilities for small business storefronts online.',
  impact:
    'Showcases best practices for small business landing pages—improving accessibility, mobile usability, and customer engagement with a bilingual, interactive design.',
  techStack: ['Next.js', 'TailwindCSS', 'Sass', 'Zustand', 'Swiper.js', 'TypeScript'],
  image: 'projects/paleteria-snacks.png',
  liveDemo: 'https://kds-paleteria.vercel.app/',
  github: 'https://github.com/missatrox44/paleteria-and-snacks',
  featured: false,
  attributions: [
    { org: 'Prototype' }
  ],
},
  {
    id: 'crab-city-server-rotation',
    title: 'Crab City Server Rotation',
    shortDescription:
      'A React app with Firebase Realtime Database that digitized table rotation for a local restaurant, replacing a manual whiteboard system.',
    longDescription:
      'Crab City Server Rotation is a modern and efficient solution designed to streamline table rotations for a local restaurant. Initially, the restaurant managed rotations using a manual whiteboard system which proved challenging during peak hours. To provide a more optimized solution, my colleagues and I developed this React web app. At its core, the application leverages Firebase’s Realtime Database to ensure that table rotation data is managed in real time, giving staff an up-to-date view of table statuses. This improved customer service and streamlined operations. We also incorporated Tailwind to create an intuitive and visually appealing interface. While the provided link showcases the demo, the actual implementation for the restaurant remains private, complete with its own secure login.',
    problem:
      'The restaurant’s manual whiteboard system for tracking table rotations was inefficient and difficult to manage during peak hours.',
    solution:
      'Developed a React app backed by Firebase Realtime Database, providing real-time updates of table statuses and a user-friendly Tailwind interface.',
    impact:
      'Enhanced restaurant operations by eliminating manual processes, improving staff efficiency, and ensuring better customer service during busy times.',
    techStack: ['React', 'Firebase Realtime Database', 'Tailwind'],
    image: 'projects/crab-city.png',
    liveDemo: 'https://crab-city.vercel.app/',
    github: 'https://github.com/missatrox44/server-rotation-crab-city',
    featured: false,
    attributions: [
      { org: 'Prototype' }
    ],

  },
  // {
  //   id: 'love-thy-selfie',
  //   title: 'Love Thy Selfie',
  //   shortDescription:
  //     'A mobile-first React app for a local photo booth business, featuring service overviews, customer reviews, and a booking contact form.',
  //   longDescription:
  //     'Love Thy Selfie is an intuitive, mobile-first React application designed to digitally transform a local photo booth business. Embodying the spirit of "Love Thy Selfie," this platform offers users a comprehensive overview of the diverse services provided, including vivid picture examples and authentic customer reviews. It also showcases the geographic service areas to help customers understand their reach. One of the key features is a seamlessly integrated contact form powered by Email.js, enabling customers to easily inquire about booking opportunities. With its user-friendly interface and responsive design, the Love Thy Selfie website effectively brings the unique essence of the photo booth experience online, and at the fingertips of potential customers.',
  //   problem:
  //     'The photo booth business lacked an engaging digital presence to showcase services, reviews, and booking options for potential customers.',
  //   solution:
  //     'Built a responsive, mobile-first React app that highlights services, customer reviews, and service areas while integrating Email.js for seamless booking inquiries.',
  //   impact:
  //     'Expanded the business’s reach by providing an accessible, visually engaging, and easy-to-use online presence that helps attract and convert new customers.',
  //   techStack: ['React', 'Email.js', 'CSS3', 'JavaScript'],
  //   image: 'projects/love_thy_selfie.png',
  //   liveDemo: 'https://www.lovethyselfiephotobooth.com/',
  //   github: 'https://github.com/missatrox44/love-thy-selfie',
  //   featured: false,
  //   attributions: [
  //     { org: 'Freelance' }
  //   ],
  // },
  // {
  //   id: 'ohs-broncho-band',
  //   title: 'OHS Broncho Band',
  //   shortDescription:
  //     'Refactored and redesigned the Odessa High School Broncho Band website for mobile responsiveness, updated visuals, and better user experience.',
  //   longDescription:
  //     'This project involved a comprehensive refactoring of the Odessa High School Broncho Band\'s website. It was redesigned to be mobile responsive, while also updating images and links for a more appealing and user-friendly experience. New pages were added, working in close collaboration with the band director to ensure that the final design echoed her vision and faithfully represented the values of the OHS Broncho Band. The website was crafted using WiX and continues to evolve, reflecting the ever-changing spirit of the band program.',
  //   problem:
  //     'The original site was outdated, lacked mobile responsiveness, and did not effectively represent the band program’s values or vision.',
  //   solution:
  //     'Redesigned the site for mobile responsiveness, updated visuals and links, and collaborated with the band director to create new pages aligned with her vision.',
  //   impact:
  //     'Improved accessibility and usability for students, parents, and the community. The redesigned site strengthened the band’s online presence and provided a professional digital representation.',
  //   techStack: ['WiX', 'HTML5', 'CSS3'],
  //   image: 'projects/odessa_band_screenshot.png',
  //   liveDemo: 'https://www.odessaband.org/',
  //   github: '',
  //   featured: false,
  //   attributions: [
  //     { org: 'Freelance' }
  //   ],
  // },
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
    attributions: [
      { org: 'Prototype' }
    ],
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
    featured: false,
    attributions: [
      { org: 'Prototype' }
    ],
  }
];