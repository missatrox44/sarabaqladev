export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  image: string;
  liveDemo?: string;
  github?: string;
  attributions?: {
    org: 'Reach Creative' | 'Hello Heco' | 'Artemis Bytes';
    url?: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "imrs",
    title: "IMRS Biodiversity Explorer",
    shortDescription:
      "A digital biodiversity reference for Indio Mountains Research Station, combining handbook species records with live iNaturalist observations.",
    problem:
      "The IMRS Biotics handbook existed only as a static PDF, making species records difficult to search, filter, or integrate with modern observation data.",
    solution:
      "Built a web application that digitizes the handbook’s species index and integrates real-time iNaturalist observations. The platform provides searchable species records, sortable filters, and mapped gazetteer data.",
    impact:
      "Gives students, researchers, and prospective field scientists fast, searchable access to IMRS biodiversity data.",
    techStack: [
      "TanStack Start",
      "TanStack Query",
      "Tailwind",
      "Turso",
      "iNaturalist API",
    ],
    image: "/projects/imrs.webp",
    github: 'https://github.com/missatrox44/imrs',
    liveDemo: "https://www.imrs.bio/",
    attributions: [
      { org: 'Artemis Bytes', url: 'https://www.artemisbytes.com/' }
    ]
  },
  {
    id: "identity-digital-premium",
    title: "Identity Digital – Premium Catalog",
    shortDescription:
      "Next.js catalog embedded in Webflow with advanced domain filtering, CSV export, and a HubSpot form feeding directly into Salesforce.",
    problem:
      "Identity Digital needed a way for customers to explore thousands of premium domain names and share selections, while syncing leads to existing HubSpot + Salesforce pipelines.",
    solution:
      "Built a standalone Next.js app with advanced filtering, CSV export, and embedded CRM capture, then integrated it seamlessly into Webflow. Inventory is maintained via Google Sheets and transformed into an optimized JSON API.",
    impact:
      "Enabled faster sales cycles through self-serve browsing and CSV exports, while CRM integration streamlined lead routing and reduced manual effort. The catalog now scales smoothly alongside growing premium inventory.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Webflow",
      "HubSpot",
      "Salesforce",
      "Google Sheets + Apps Script"
    ],
    image: "/projects/premium-catalog.webp",
    liveDemo: "https://www.identity.digital/premium-catalog",
    attributions: [
      { org: 'Reach Creative', url: 'https://www.reachcreative.com/' },
      { org: 'Hello Heco', url: 'https://heco.partners/' },
    ]
  },
  {
    id: "manresa-wilds",
    title: "Manresa Wilds",
    shortDescription:
      "A high-impact Next.js + Prismic site that launches the vision for a new public waterfront park and ecosystem restoration effort in Norwalk, CT.",
    problem:
      "Manresa Island Corporation needed a compelling, flexible site to rally support for transforming a retired power plant into 1.75 miles of public waterfront access and ecological restoration.",
    solution:
      "Designed and developed modular, mobile-first slice components in Next.js + Prismic to allow rapid publishing of events, press, and conservation updates with accessible, high-performance layouts.",
    impact:
      "Launched a public hub that boosts community engagement, supports fundraising, and builds transparency around restoration—helping reconnect Norwalk to the waterfront for the first time in 75+ years.",
    techStack: ["Next.js", "JavaScript", "Prismic", "Tailwind", "SCSS", "GSAP", "MailChimp", "Vercel"],
    image: "/projects/manresa.webp",
    liveDemo: "https://www.manresawilds.org/",
    attributions: [
      { org: 'Reach Creative', url: 'https://www.reachcreative.com/' },
    ]
  },
  {
    id: 'frommers',
    title: "Frommer's",
    shortDescription:
      "Modern rebuild of Frommer’s travel site using Craft CMS, with SEO-driven architecture and flexible ad placement for new revenue.",
    problem:
      "Frommer’s legacy platform was slow, difficult to update, and missing modern SEO structure and scalable ad capabilities.",
    solution:
      "Migrated legacy content into Craft CMS, implemented structured templates with SEO best practices, and built a modular ad system for targeted placements.",
    impact:
      "Boosted site performance and organic traffic, streamlined editorial publishing, and opened new monetization opportunities without disrupting the reader experience.",
    techStack: ['Craft CMS', 'Twig', 'MySQL', 'PHP', 'SCSS', 'JavaScript', 'Laravel', 'Vite', 'Tailwind', 'Craft Cloud'],
    image: '/projects/frommers.webp',
    liveDemo: 'https://www.frommers.com/',
    github: '',
    attributions: [
      { org: 'Reach Creative', url: 'https://www.reachcreative.com/' },
    ],
  },
  {
    id: "nantbio-renewables",
    title: "NantBio Renewables",
    shortDescription:
      "WordPress build for a sustainable tableware brand, featuring product storytelling and HubSpot-powered lead capture.",
    problem:
      "NantBio needed a compelling site to showcase Wave Ware™’s compostable products and convert interest into sales through educational content and lead generation.",
    solution:
      "Developed custom WordPress components with interactive carousels and HubSpot-integrated modals, ensuring a mobile-first, brand-consistent experience across product and press pages.",
    impact:
      "Delivered a sustainable product showcase that boosted engagement and streamlined lead collection, strengthening NantBio’s position in the eco-friendly consumer market.",
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
    image: "/projects/nant-bio.webp",
    liveDemo: "https://nantbr.com/",
    attributions: [
      {
        org: "Reach Creative",
        url: "https://www.reachcreative.com/"
      }
    ]
  },
  {
    id: "resolute-ventures",
    title: "Resolute Ventures",
    shortDescription:
      "Next.js + Prismic rebuild with motion-rich branding and fully editable portfolio + team pages.",
    problem:
      "Resolute’s outdated site couldn’t reflect its modern brand or allow quick updates to portfolio companies, team bios, or community resources.",
    solution:
      "Rebuilt the platform in Next.js with GSAP-powered motion, modeled flexible content types in Prismic, and deployed on Vercel for speed and scalability.",
    impact:
      "Delivered a fast, modern brand experience while giving the team full control of content—reducing developer dependency and keeping the portfolio up to date.",
    techStack: [
      "Next.js",
      "JavaScript",
      "Prismic",
      "Tailwind",
      "Swiper.js", "GSAP", "SCSS", "Vercel"
    ],
    image: "/projects/resolute.webp",
    liveDemo: "https://www.resolute.vc/",
    attributions: [
      {
        org: "Reach Creative",
        url: "https://www.reachcreative.com/"
      }
    ]
  },
  {
    id: "nhrl",
    title: "NHRL",
    shortDescription:
      "Developed new Prismic components for NHRL’s legacy Next.js app to promote Havoc Academy with flexible, marketing-driven updates.",
    problem:
      "NHRL needed a scalable way to promote Havoc Academy on their existing site without relying on frequent engineering support.",
    solution:
      "“Built a reusable Prismic slice integrated into their legacy Next.js architecture, matching existing styling conventions while ensuring fully responsive layouts.",
    impact:
      "Gave their marketing team control to publish updates independently, extended the lifespan of the legacy codebase, and improved mobile responsiveness for new content",
    techStack: [
      "Next.js",
      "Prismic",
      "JavaScript",
      "Nodemailer",
      "Swiper.js",
      "SCSS",
      "Vercel",
    ],
    image: "/projects/nhrl.webp",
    liveDemo: "https://www.nhrl.io/",
    attributions: [
      {
        org: "Reach Creative",
        url: "https://www.reachcreative.com/"
      }
    ]
  },
  {
    id: "namecom-api",
    title: "Name.com API Landing Page",
    shortDescription: "Multilingual Vue landing page for Name.com’s AI-ready API with HubSpot lead capture.",
    problem:
      "Name.com needed a multilingual page to showcase its API and convert developer interest into qualified leads for the sales team.",
    solution:
      "Built a responsive Vue landing page with localized content (Vue i18n) and a HubSpot-integrated contact form for direct conversion.",
    impact:
      "Increased API visibility across global markets and streamlined developer outreach through automated lead routing to sales.",
    techStack: ["Vue", "Tailwind", "Vite", "Vue i18n", "TypeScript"],
    image: "/projects/nameapi.webp",
    liveDemo: "https://www.name.com/nameapi",
    attributions: [
      { org: "Reach Creative", url: "https://www.reachcreative.com/" },
      { org: "Hello Heco", url: "https://heco.partners/" }
    ]
  },
  {
    id: "nat-geo-travel-texas",
    title: "National Geographic – Travel Texas",
    shortDescription:
      "Maintained and enhanced National Geographic’s animation-rich Travel Texas microsite with new films, articles, and interactive map updates.",
    problem:
      "The site needed fresh media and new points of interest added without breaking its complex 3D map, animations, and performance constraints.",
    solution:
      "Integrated new articles, films, and carousel media, and expanded the Spline-powered map with updated POIs while preserving performance and motion logic.",
    impact:
      "Kept the microsite current and captivating, extending its lifespan and ensuring a smooth, high-fidelity experience across heavy 3D and animation components.",
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
    image: "/projects/travel-texas.webp",
    liveDemo: "https://www.nationalgeographic.com/travel-texas/",
    attributions: [
      {
        org: "Reach Creative",
        url: "https://www.reachcreative.com/"
      }
    ]
  },
  {
    id: "nat-geo-earth-month-sweepstakes",
    title: "National Geographic Earth Month Sweepstakes",
    shortDescription:
      "Updated National Geographic’s Earth Month sweepstakes with refreshed campaign content and Supabase logic to enforce secure, time-boxed entries.",
    problem:
      "The sweepstakes needed updated campaign content and reliable guardrails to prevent multiple daily entries and automatically close submissions at the promotion deadline.",
    solution:
      "Refreshed 2025 assets and implemented Supabase validation for one entry per user per day, with automatic form disablement after the campaign end date.",
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
    image: "/projects/nat-geo-earth-month.webp",
    liveDemo: "https://www.nationalgeographic.com/ourhomesweepstakes/",
    attributions: [
      {
        org: "Reach Creative",
        url: "https://www.reachcreative.com/"
      }
    ]
  },
  {
    id: "nat-geo-travel-nevada",
    title: "National Geographic – Travel Nevada",
    shortDescription:
      "Enhanced National Geographic’s Travel Nevada microsite with new stories, shorts, and media without disrupting its animation-heavy layouts.",
    problem:
      "The site required fresh editorial content, but its complex animations and interactive layouts were prone to breakage during updates.",
    solution:
      "Integrated new stories, shorts, and media into masonry grids, carousels, and animated card components while maintaining responsive behavior and motion performance.",
    impact:
      "Kept the microsite engaging and up-to-date, extending its lifespan and preserving a smooth, high-fidelity experience across motion-rich components.",
    techStack: [
      "Next.js",
      "JavaScript",
      "SCSS",
      "GSAP",
      "Swiper.js",
      "Zustand",
    ],
    image: "/projects/travel-nevada.webp",
    liveDemo: "https://www.nationalgeographic.com/travel-nevada/",
    attributions: [
      {
        org: "Reach Creative",
        url: "https://www.reachcreative.com/"
      }
    ]
  },
  {
    id: "core-spaces-strategy",
    title: "Core Spaces – Strategy Page",
    shortDescription:
      "Built the new Strategy page for Core Spaces, integrating dynamic content from Prismic and showcasing their student housing and build-to-rent strategies.",
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
      "JavaScript",
      "Vercel"

    ],
    image: "/projects/core-spaces.webp",
    liveDemo: "https://corespaces.com/strategy",
    attributions: [
      {
        org: "Reach Creative",
        url: "https://www.reachcreative.com/"
      },
      {
        org: "Hello Heco",
        url: "https://heco.partners/"
      }
    ]
  },
  {
    id: "motorola-brand-guidelines",
    title: "Motorola Brand Guidelines",
    shortDescription: "CMS-driven brand guidelines site for Motorola Solutions with custom styling options and animated components.",
    problem: "Motorola needed a centralized, easy-to-update platform for maintaining brand consistency across typography, imagery, and other assets.",
    solution: "Built a CMS-powered guidelines site with Prismic, allowing content editors to easily update styles and assets. Extended CMS schema for custom styles and applied design refinements to improve usability and brand fidelity.",
    impact: "Streamlined Motorola’s ability to maintain and distribute brand guidelines, reducing manual overhead for their design and marketing teams and ensuring consistent brand execution.",
    techStack: ["Prismic", "Tailwind", "SCSS", "GSAP", "Next.js"],
    image: "/projects/motorola.webp",
    liveDemo: "https://brand-guidelines.motorolasolutions.com/",
    attributions: [
      { org: "Reach Creative", url: "https://www.reachcreative.com/" }
    ]
  },
  {
    id: 'quality-water-4-usa',
    title: 'Quality Water 4 USA',
    shortDescription:
      'A modern, customer-friendly landing page for a local water purification company with clear calls to action and a free water analysis form.',
    problem:
      'The business needed a professional online presence that clearly communicated its services and encouraged customers to schedule water analyses.',
    solution:
      'Designed and developed a modern landing page highlighting services, testimonials, FAQs, and a clear call-to-action form for free water analysis scheduling.',
    impact:
      'Improved the company’s digital visibility and customer engagement, helping convert site visitors into leads with a streamlined scheduling flow.',
    techStack: ['Next.js', 'Tailwind', 'Formspree', 'Vercel', 'TypeScript'],
    image: '/projects/quality-water-4-usa.webp',
    liveDemo: 'https://qualitywater4usa.com',
    github: '',
    attributions: [
      { org: 'Artemis Bytes', url: 'https://www.artemisbytes.com/' }
    ],
  },
];