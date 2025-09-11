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
      "Manresa Wilds is a public facing Next.js application connected to Prismic that tells the story of a new, publicly accessible waterfront park. I worked on a cross functional team where I conducted PR reviews, gave implementation feedback, and collaborated on highly effective sprint planning. The site is fully responsive and designed for accessible, fast loading content updates via Prismic’s slice-based components.",
    problem:
      "Manresa Island Corporation needed a modern, flexible platform to share its vision of transforming a decommissioned power plant into 1.75 miles of new public waterfront access. The site had to host event listings, recaps, press releases, and rich storytelling about the site’s history, mission, and future ecological programs, while empowering non-technical staff to publish updates without developer support.",

    solution:
      "Built a responsive Next.js application integrated with Prismic CMS, using slice based components for modular, editorially flexible content. Collaborated in effective sprint planning, PR reviews, and provided implementation feedback to maintain quality. Implemented accessible, performant layouts that adapt seamlessly across devices, ensuring the site could scale as new programming and ecological initiatives roll out.",

    impact:
      "Launched a scalable storytelling hub that communicates the park’s mission, showcases events and press coverage, and supports community engagement. The site strengthens outreach and fundraising efforts, provides transparency around remediation and ecological restoration, and lays a digital foundation for Manresa Wilds to inspire public connection to the waterfront for the first time in nearly 75 years.",
    techStack: ["Next.js", "TypeScript", "Prismic", "Tailwind CSS", "SCSS Modules"],
    image: "/manresa.png",
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
      "The Premium Catalog is a Next.js application built for Identity Digital to let clients explore and evaluate premium domain names. I owned this project end-to-end, from architecture to delivery. Users can toggle between grid and list views, filter domains by TLD, name length, and price range, and sort results by price or alphabetically. Filtered results can be exported as a CSV for stakeholder review. Selected domains flow into a Hubspot form, which feeds leads directly into Salesforce for the sales team. Data is maintained in a Google Sheet with a custom Apps Script that transforms the sheet into a JSON API endpoint consumed by the app. The application is fully mobile responsive and embedded seamlessly into Identity Digital’s Webflow site via iFrame.",
    problem:
      "Identity Digital needed a way for potential customers to explore premium domain names and quickly identify options that fit their needs. The solution had to support complex filtering, easy sharing of curated lists, and seamless lead capture integrated with existing Hubspot and Salesforce workflows, all while living inside a Webflow site.",
    solution:
      "Designed and developed a standalone Next.js application, embedded via iFrame in Webflow, to handle advanced filtering and search at scale. Implemented CSV export for stakeholder review, integrated a Hubspot form for user interest submissions, and ensured those leads were captured in Salesforce. Built a Google Apps Script pipeline to convert and expose domain data from Google Sheets as a JSON endpoint consumed by the app. Delivered a performant experience that can scale with Identity Digital’s catalog.",
    impact:
      "Enabled Identity Digital to showcase its premium domain portfolio in a user friendly way that improved client engagement and reduced sales friction. The CSV export empowered clients to share tailored lists with decision makers, while Hubspot and Salesforce integration streamlined lead capture for the sales team. The modular setup allows the catalog to grow as inventory expands, all while staying embedded in the marketing site.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Webflow",
      "Hubspot",
      "Salesforce",
      "Google Sheets + Apps Script"
    ],
    image: "/premium-catalog.png",
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
      "Frommer’s, a leader in travel guides and content, needed a modernized digital platform. Their original site was outdated, not mobile-friendly, and poorly optimized for SEO. Our team delivered a full redesign and migration to Craft CMS, importing and restructuring their legacy database to support diverse travel content formats. We applied SEO best practices throughout the build, significantly improving visibility, and implemented a flexible ad injection system to open new revenue streams. The result is a faster, scalable, and user-friendly platform that better serves both readers and the business.",
    problem:
      "The legacy Frommer’s site was outdated, difficult to maintain, and underperforming in SEO. Content was stored in inconsistent formats, making migration and scalability a challenge. Revenue opportunities through advertising were also limited.",
    solution:
      "Rebuilt the site on Craft CMS with a clean, responsive design. Migrated and normalized legacy database content into structured entries, enabling efficient content management. Implemented SEO best practices across templates, metadata, and site architecture. Added an ad injection system to maximize monetization without disrupting the user experience.",
    impact:
      "Improved organic search visibility and site performance, helping Frommer’s reach more readers. Streamlined editorial workflows with Craft CMS, reducing content management overhead. Introduced flexible ad placements that increased revenue opportunities while maintaining usability.",
    techStack: ['Craft CMS 5', 'Twig', 'MySQL', 'PHP', 'SCSS', 'JavaScript'],
    image: '/frommers.png',
    liveDemo: 'https://www.frommers.com/',
    github: '',
    featured: true,
    attributions: [
      { org: 'Reach', url: 'https://reachcreative.com' },
      // { org: 'Heco', role: 'Partner Agency', url: 'https://www.helloheco.com/' },
    ],
  },
  {
    id: "nantbio-renewables",
    title: "NantBio Renewables",
    shortDescription:
      "WordPress site for a sustainability focused company selling compostable straws, tableware, and cutlery made from ocean calcium sand.",
    longDescription:
      "NantBio Renewables needed a modern website to showcase its Wave Ware™ line of compostable straws, plates, bowls, cutlery, and trays. Built in WordPress with Blade templating, the site highlights the company’s sustainable, ocean sourced materials and product innovations. I contributed to the development of several pages and custom components, implemented interactive sliders, built modals connected to HubSpot forms, and create templates for custom post types. The result is a responsive, engaging site that communicates both the science and story of truly compostable materials.",
    problem:
      "NantBio Renewables required a flexible, marketing driven platform to promote its Wave Ware™ products and educate customers on the benefits of compostable, ocean calcium based alternatives to plastics. The site needed to combine storytelling with lead capture while supporting ongoing news and press release content.",
    solution:
      "Developed key site components in WordPress using Blade templating. Built custom pages and content types, implemented interactive features such as Slider.js carousels, and integrated modals with HubSpot forms for seamless lead capture. Ensured mobile responsiveness and a cohesive brand experience across the product catalog and blog content.",
    impact:
      "Delivered a sustainable focused web presence that helps NantBio Renewables tell the story of its carbon negative materials and eco friendly products. The site improved customer engagement, streamlined lead generation through HubSpot, and positioned the brand as a trusted provider of compostable, USA made tableware and packaging solutions.",
    techStack: [
      "WordPress",
      "Blade",
      "PHP",
      "JavaScript",
      "Slider.js",
      "HubSpot"
    ],
    image: "/nant-bio.png",
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
      "Resolute Ventures is a lead pre-seed/seed investor known for a founder first approach and a strong community ethos. We rebuilt their marketing site as a Next.js app with thoughtful animations and a flexible Prismic CMS. The site highlights their story, people, and community while giving the team full control over content including portfolio companies, founder blurbs, retreat highlights, and more, without developer handoffs.",
    problem:
      "The previous site looked dated and was difficult to update. Resolute needed a faster, modern experience that clearly communicated their founder first philosophy and allowed non technical team members to manage portfolio companies, bios, and community content.",
    solution:
      "Rebuilt the site in Next.js with an animation system (GSAP) for subtle, performance minded motion. Modeled content in Prismic. Implemented pages for Companies, About (history + leadership), and Community (retreats, coaching, peer programs). Deployed on Vercel with image optimization and caching.",
    impact:
      "A contemporary look and feel that better reflects the brand. Faster load times and smoother interactions. Fully editable CMS where the Resolute team can update companies, bios, and community sections in minutes, keeping the site aligned with their active founder community.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prismic",
      "Tailwind CSS",
      "Vercel", "GSAP"
    ],
    image: "resolute.png",
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
    "NHRL (National Havoc Robot League) is a competitive combat robotics league with events, live streaming, and community offerings. At Reach, I supported updates to their legacy Next.js app by building new marketing components to promote Havoc Academy. I created a reusable Prismic slice and ensured it was fully responsive across devices, aligning closely with designer specifications. While the app used custom CSS rather than Tailwind, I optimized layouts for mobile and maintained consistency with the existing codebase.",
  problem:
    "The client needed to promote a new educational product, Havoc Academy, within their existing site. Their marketing team required flexibility to update and reuse content through Prismic without heavy developer involvement.",
  solution:
    "Built a new Prismic slice for Havoc Academy with customizable fields and responsive layouts. Integrated the slice into the Next.js app with custom CSS, ensuring the component matched designs across breakpoints while preserving site performance and code standards.",
  impact:
    "Delivered a scalable component that allowed the client’s content team to promote Havoc Academy independently. Improved mobile responsiveness and helped extend the lifespan of the legacy codebase by integrating modern, flexible content updates.",
  techStack: [
    "Next.js",
    "React",
    "Prismic",
    "JavaScript",
    "CSS Modules"
  ],
  image: "/nhrl.png",
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
  id: "nat-geo-travel-texas",
  title: "National Geographic – Travel Texas",
  shortDescription:
    "Enhanced National Geographic’s Travel Texas microsite with new articles, carousel media, films, and interactive map updates using Spline.",
  longDescription:
    "National Geographic’s Travel Texas site is a rich, animated microsite highlighting the culture, landscapes, and destinations across Texas. At Reach, I supported major content updates, including refreshing carousel images, adding new editorial articles to the masonry grid, and updating the interactive map built with Spline by adding new points of interest. I also integrated two new short films into the experience, updating the playback logic to accommodate their external hosting. The site makes heavy use of advanced animation and 3D libraries including Three.js, React Three Fiber, GSAP, and Spline, requiring careful integration to maintain smooth performance and responsive behavior.",
  problem:
    "The client needed to refresh the campaign with new articles, films, and map content, but the site’s reliance on complex 3D/animation libraries and custom logic meant updates risked breaking layouts, animations, or film playback.",
  solution:
    "Updated carousel images and masonry grid articles while maintaining visual balance and responsive layout. Added new points of interest to the Spline-powered interactive map, ensuring they rendered correctly across breakpoints. Integrated two externally hosted films, adjusting playback logic so users could view them seamlessly without breaking the flow of the microsite.",
  impact:
    "Kept a highly interactive National Geographic microsite current and engaging with new stories, films, and map experiences. Maintained the integrity of complex animations and 3D interactions, allowing visitors to continue exploring Texas’s highlights through a performant, visually dynamic interface.",
  techStack: [
    "Next.js",
    "React",
    "Sass",
    "Three.js",
    "React Three Fiber",
    "Spline",
    "GSAP",
    "Keen Slider"
  ],
  image: "/travel-texas.png",
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
    "National Geographic’s annual Earth Month Sweepstakes celebrated our planet with a once-in-a-lifetime grand prize: a National Geographic–Lindblad Expeditions cruise to Antarctica. At Reach, I contributed to the legacy Next.js + Tailwind app by updating content for the 2025 campaign and implementing new logic with Supabase. I ensured users could enter only once per day during the April 15–30 sweepstakes window and added date based logic to automatically disable the form after the promotion ended, showing a clear 'promotion ended' message instead of an inactive form. This improved compliance with sweepstakes rules, reduced manual intervention, and created a smoother experience for participants.",
  problem:
    "The sweepstakes microsite needed fresh content for the 2025 promotion and lacked guardrails to enforce daily entry limits.",
  solution:
    "Updated copy and assets for the current year’s sweepstakes. Integrated Supabase logic to validate one entry per user per day.",
    impact:
  "Delivered an improved sweepstakes experience: users could confidently enter daily without loopholes, admins no longer had to sort and clean a large database of duplicate entries at the end, and visitors saw clear messaging once the promotion concluded.",
  techStack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Supabase",
    "JavaScript"
  ],
  image: "/nat-geo-earth-month.png",
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
    "National Geographic’s Travel Nevada site showcases the best of Nevada — from scenic drives and cultural landmarks to adventure tourism. Built as a highly animated Next.js experience, the site included a dynamic masonry grid, interactive carousels, and stacking card effects to highlight stories and shorts. At Reach, I supported annual content updates, adding new videos and images to the masonry grid while preserving proper heights and responsive behavior. I also integrated new editorial stories and shorts into their respective components, ensuring animations and transitions continued to function smoothly. This work extended the life of the site and kept the campaign fresh and engaging for visitors exploring Nevada’s attractions.",
  problem:
    "The site required fresh yearly content to keep audiences engaged, but its complex animated layouts (masonry grid, carousels, stacking cards) meant updates risked breaking layouts or animations if not implemented carefully.",
  solution:
    "Updated the masonry grid with new videos and images, adjusting sizing logic to preserve consistent heights. Added new stories into the carousel and new shorts into the stacking card effect, ensuring animations and responsive behavior continued to work seamlessly across devices.",
  impact:
    "Kept a National Geographic microsite current with new editorial content and media, maintained the integrity of complex interactive layouts, and ensured a smooth, visually engaging experience for audiences exploring Nevada’s tourism highlights.",
  techStack: [
    "Next.js",
    "React",
    "JavaScript",
    "CSS",
  ],
  image: "/travel-nevada.png",
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
    "Core Spaces is a vertically integrated real estate developer and operator specializing in student housing and build-to-rent communities. At Reach (in collaboration with Heco), I built the Strategy page of their corporate site. Connected to Prismic, the page highlights Core’s vision, mission, industry leadership, and strategies across student housing and build-to-rent markets. I implemented sections for metrics, strategy pillars, and case studies (oLiv Madison, Oxenfree WEHO), ensuring content editors could update copy, stats, and media without developer support. The page integrates advanced animation and UI libraries to deliver a smooth, polished experience aligned with Core’s innovative brand.",
  problem:
    "Core Spaces needed a new page to clearly communicate its strategy and leadership in student housing and build-to-rent sectors. The challenge was to deliver a content-rich, design-driven experience that could be easily updated by non-technical staff.",
  solution:
    "Implemented a fully CMS-driven Strategy page using Prismic, structured with reusable slices for sections like stats, strategy pillars, case studies, and video. Leveraged animation and UI libraries to bring the design vision to life, while ensuring the page was responsive and easy for admins to update year-to-year.",
  impact:
    "Delivered a visually engaging and content-rich Strategy page that communicated Core’s market leadership and growth strategy. Empowered admins with a flexible, CMS-driven system for future updates and ensured smooth, responsive animations that elevated the brand’s digital presence.",
  techStack: [
    "Next.js",
    "React",
    "Prismic",
    "Sass",
    "GSAP",
    "React Three Fiber",
    "Spline",
    "Keen Slider",
    "Mapbox GL"
  ],
  image: "/core-spaces.png",
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
    techStack: ['Next.js', 'Tailwind CSS', 'Formspree'],
    image: 'projects/quality-water-4-usa.png',
    liveDemo: 'https://qualitywater4usa.com',
    github: '',
    featured: false,
    attributions: [
      { org: 'Freelance' }
    ],
  },
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
    featured: false,
    attributions: [
      { org: 'Prototype' }
    ],

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
    attributions: [
      { org: 'Freelance' }
    ],
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
    attributions: [
      { org: 'Freelance' }
    ],
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