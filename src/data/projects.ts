export type Project = {
  title: string;
  slug: string;
  category: string[];
  tags: string[];
  type: string;
  status: string;
  year: string;
  duration?: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  role: string;
  roleDetails: string[];
  techStack: string[];
  highlights: string[];
  features: {
    title: string;
    description: string;
  }[];
  learnings: string[];
  nextSteps: string[];
  image: string;
  heroImage?: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  
{
  title: "Future Self",
  slug: "future-self",
  category: ["Featured Project", "AI Product", "Personal Project"],
  tags: [
    "AI Product",
    "Habit Tracking",
    "Personal Growth",
    "Reflection",
    "Web App",
  ],
  type: "AI-powered personal growth web app",
  status: "Live Prototype",
  year: "2026",
  duration: "Ongoing iteration",

  shortDescription:
    "Future Self is an AI-powered personal growth web app that helps users connect daily actions with long-term goals through missions, habit tracking, personal insights, reflections, badges, and letters to their future self.",

  overview:
    "Future Self is a personal growth product prototype that explores how AI, habit design, and reflection can help users stay connected with the person they want to become. Instead of focusing only on task completion, the product encourages users to understand why their daily actions matter through missions, habit signals, personal insights, badges, and future-self letters.",

  problem:
    "Many productivity and habit-tracking tools help users record what they do, but they often fail to connect daily behavior with long-term identity, motivation, and self-reflection. As a result, users may track progress without fully understanding how small actions contribute to the future version of themselves they are trying to build.",

  solution:
    "Future Self transforms personal goals into a more meaningful digital experience by combining daily missions, habit tracking, reflection prompts, personal insights, achievement badges, and letters to the future self. The product is designed to make self-improvement feel more structured, personal, and emotionally connected without overwhelming users with complex productivity systems.",

  role: "Product Builder / UI Concept / AI-assisted Development",

  roleDetails: [
    "Developed the product idea around personal growth, identity, and habit consistency.",
    "Structured the core user journey from goal setting to missions, habits, reflections, and progress review.",
    "Planned the main features and information architecture for a calm self-improvement experience.",
    "Used AI-assisted development to prototype the product faster while maintaining clear product direction.",
    "Refined the interface structure to keep the experience simple, readable, and motivating.",
  ],

  techStack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "AI-assisted Workflow",
    "Product Design",
    "Vercel",
  ],

  highlights: [
    "Built a personal growth prototype that connects daily habits with long-term identity.",
    "Designed a mission-based experience to make self-improvement feel more actionable and less abstract.",
    "Added reflection, badges, and future-self letters to make progress feel more personal and memorable.",
    "Used AI-assisted development as part of the workflow while keeping the product direction intentional.",
    "Created the project as a continuously improving prototype rather than a one-time static concept.",
  ],

  features: [
    {
      title: "Daily Missions",
      description:
        "Breaks long-term goals into smaller daily actions so users can start with clear and achievable steps.",
    },
    {
      title: "Habit Tracking",
      description:
        "Helps users recognize repeated behaviors, maintain consistency, and build momentum through simple habit signals.",
    },
    {
      title: "Personal Insights",
      description:
        "Surfaces patterns, prompts, and progress signals that help users understand how their actions relate to their personal direction.",
    },
    {
      title: "Reflection Space",
      description:
        "Gives users room to review their thoughts, emotions, blockers, and progress with more intention.",
    },
    {
      title: "Growth Badges",
      description:
        "Makes milestones visible and rewarding without turning the product into an overly gamified experience.",
    },
    {
      title: "Letters to Future Self",
      description:
        "Encourages users to write personal messages that make long-term goals feel more human, emotional, and memorable.",
    },
  ],

  learnings: [
    "A strong product experience is not only about adding features, but also about creating a clear emotional and behavioral journey.",
    "AI-assisted development can speed up prototyping, but the product still needs clear problem framing, user flow, and design decisions.",
    "Habit and productivity products need to balance motivation with simplicity so users do not feel pressured or overwhelmed.",
    "Reflection-based features can make a product feel more personal when they are connected to user goals, progress, and identity.",
    "A portfolio project becomes stronger when it is presented as a product case study, not only as a finished interface.",
  ],

  nextSteps: [
    "Improve the dashboard with clearer progress states, weekly summaries, and more useful habit insights.",
    "Test the mission, habit, and reflection flow with real users to understand what feels motivating and what feels unnecessary.",
    "Add stronger personalization so the experience can adapt to different user goals, habits, and reflection styles.",
    "Refine the onboarding flow to help users define their future-self vision more clearly from the beginning.",
    "Explore privacy-aware AI features that can provide helpful insights without making users feel exposed or over-monitored.",
  ],

  image: "/project-images/future-self.png",
  heroImage: "/project-images/future-self-heroImage.png",
  demoUrl: "https://ai.studio/apps/cb663cc8-e7dd-4753-94f5-3a02b97e7a67?fullscreenApplet=true",
  githubUrl: "",
  featured: true,
},


  {
  title: "TaniVeri",
  slug: "taniveri",
  category: ["Business Concept", "Product Design", "Academic Project"],
  tags: [
    "Food Supply Chain",
    "Transparency",
    "Trust Signals",
    "Business Analysis",
    "Product Design",
  ],
  type: "Digital product concept / business case study",
  status: "Concept / Case Study",
  year: "2026",
  shortDescription:
    "TaniVeri is a digital product concept that helps make food supply chain information more transparent, trustworthy, and easier to understand for everyday users.",

  overview:
    "TaniVeri explores how a digital product can improve trust in the food supply chain by making product origin, quality indicators, and verification signals easier to access and understand. The concept focuses on turning complex supply chain information into a clearer user experience that supports better decision-making for consumers and small businesses.",

  problem:
    "Many consumers and small businesses have limited visibility into where food products come from, how product quality is verified, and which information can actually be trusted. Existing supply chain information is often fragmented, technical, or difficult to understand, making it harder for users to feel confident about the products they choose.",

  solution:
    "TaniVeri proposes a trust-centered digital experience that organizes product origin, quality context, and verification signals into a simple and readable flow. Instead of overwhelming users with raw supply chain data, the concept presents the most relevant information through clear product profiles, trust indicators, and verification steps.",

  role: "Business Concept Development / Product Thinking / UI/UX Planning",

  roleDetails: [
    "Framed the core problem around food transparency and user trust.",
    "Developed the product concept and value proposition.",
    "Mapped the user journey from product discovery to verification.",
    "Planned the information structure for origin, quality, and trust signals.",
    "Explored how UI/UX decisions can make supply chain data easier to understand.",
  ],

  techStack: [
    "Figma",
    "Business Model Mapping",
    "Value Proposition Design",
    "User Journey Mapping",
    "Research Notes",
  ],

  highlights: [
    "Designed a concept that translates complex food supply chain information into a more user-friendly experience.",
    "Focused on trust, clarity, and transparency as the core value of the product.",
    "Explored how origin data, quality indicators, and verification signals can support better user confidence.",
    "Structured the project as a business and product case study, not only as a visual UI concept.",
  ],

  features: [
    {
      title: "Product Origin Profile",
      description:
        "Displays key product source information such as origin, supplier context, and product background in a clear and readable format.",
    },
    {
      title: "Quality Signal Overview",
      description:
        "Simplifies quality-related information into practical indicators that users can quickly scan and understand.",
    },
    {
      title: "Trust Verification Flow",
      description:
        "Guides users through a simple verification journey, helping them understand why a product or supplier can be considered more reliable.",
    },
    {
      title: "User-Friendly Transparency",
      description:
        "Turns supply chain data into a more accessible experience by reducing technical complexity and focusing on information that matters to users.",
    },
  ],

  learnings: [
    "A strong digital product concept needs to balance user value, business feasibility, and operational reality.",
    "Transparency features should be simple enough for everyday users, not only understandable for technical or business audiences.",
    "Trust is not built only through data, but also through how clearly that data is structured and communicated.",
    "Academic product concepts feel stronger when they are presented as case studies with clear problems, solutions, roles, and future improvements.",
  ],

  nextSteps: [
    "Refine the user journey for different user groups, including consumers, sellers, and suppliers.",
    "Define clearer assumptions around data sources, verification partners, and operational feasibility.",
    "Create higher-fidelity UI screens for product discovery, product detail, and trust verification flows.",
    "Explore how the concept could support small businesses in communicating product quality more credibly.",
    "Validate the concept through simple user feedback or interviews to understand which trust signals matter most.",
  ],

  image: "/project-images/taniveri.png",
  heroImage: "/project-images/taniveri.png",
  demoUrl: "https://www.figma.com/proto/uEeI3C2CXmy03kL25TNCec/TaniVeri?node-id=1-2058&t=4d1xKBqV2G9G0MtF-1",
  githubUrl: "",
  featured: false,
},
 {
  title: "PulihBersama",
  slug: "pulihbersama",
  category: ["Social Impact", "UI/UX Case Study", "Product Concept"],
  tags: [
    "Social Impact",
    "Accessible Support",
    "Guided Experience",
    "Information Architecture",
    "UI/UX",
  ],
  type: "Social impact digital product concept",
  status: "Concept / Case Study",
  year: "2025",

  shortDescription:
    "PulihBersama is a social impact product concept that explores how digital guidance can make recovery support feel more structured, accessible, and less intimidating.",

  overview:
    "PulihBersama explores how a digital product can support people who need clearer guidance, structured assistance, and a calmer way to access recovery-related support. The concept focuses on reducing confusion, improving accessibility, and creating a more supportive user journey through thoughtful information architecture and user-centered design.",

  problem:
    "People who need recovery support or structured assistance often face scattered information, unclear next steps, and emotional friction when trying to seek help. Without a clear and accessible support path, users may feel overwhelmed before they even begin the recovery journey.",

  solution:
    "PulihBersama proposes a guided digital experience that organizes support into clear pathways, simple steps, and calm information flows. Instead of presenting users with too much information at once, the concept helps them understand where to start, what options are available, and how to move forward at their own pace.",

  role: "Product Concept / UI/UX Thinking / Problem-Solution Mapping",

  roleDetails: [
    "Framed the problem around accessibility, emotional friction, and unclear support journeys.",
    "Mapped the user journey from initial confusion to guided next steps.",
    "Structured the product concept around calm navigation and clear information flow.",
    "Planned the information architecture for support categories, guidance steps, and progress flow.",
    "Explored UI/UX decisions that can make sensitive digital experiences feel safer and easier to use.",
  ],

  techStack: [
    "Figma",
    "Problem-Solution Mapping",
    "Information Architecture",
    "User Journey Mapping",
    "UI Planning",
  ],

  highlights: [
    "Designed a social impact concept with a strong focus on accessibility, clarity, and emotional sensitivity.",
    "Translated an abstract support problem into a structured digital journey.",
    "Created a product direction that balances practical guidance with a calm and supportive user experience.",
    "Explored how information architecture and interface planning can reduce friction in sensitive use cases.",
  ],

  features: [
    {
      title: "Guided Support Pathways",
      description:
        "Organizes support options into clearer steps so users can understand where to begin without feeling overwhelmed.",
    },
    {
      title: "Calm Information Flow",
      description:
        "Presents important information with simple language, clean structure, and a less intimidating experience.",
    },
    {
      title: "Progress-Oriented Journey",
      description:
        "Frames support as a step-by-step journey, helping users see recovery as a process rather than a single difficult action.",
    },
    {
      title: "Accessible Support Categories",
      description:
        "Groups support content into understandable categories so users can find relevant guidance more easily.",
    },
  ],

  learnings: [
    "Sensitive product concepts require careful language, clear structure, and design decisions that reduce emotional pressure.",
    "A strong social impact product needs more than good intentions; it needs a clear journey, realistic support flow, and accessible information.",
    "Problem-solution mapping helps transform broad social issues into specific product features and user flows.",
    "Information architecture plays an important role in building trust, especially when users are dealing with personal or sensitive situations.",
  ],

  nextSteps: [
    "Validate the support journey with feedback from users or people familiar with recovery support contexts.",
    "Refine the content tone to make sure the language feels calm, respectful, and easy to understand.",
    "Develop higher-fidelity UI screens for onboarding, support selection, guided steps, and progress tracking.",
    "Improve accessibility details such as readability, visual hierarchy, and mobile usability.",
    "Explore possible collaboration models with communities, counselors, or support organizations to make the concept more realistic.",
  ],

  image: "/project-images/pulihbersama.png",
  heroImage: "/project-images/pulihbersama.png",
  demoUrl: "https://www.figma.com/design/gQqnYW9Ax9G4x8Jaym8NSf/Hackfest-UI-UX?node-id=2013-261&t=fJzB17JnaOc4mpli-1",
  githubUrl: "",
  featured: false,
}
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
