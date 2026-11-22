import { Project, CreativeItem, SkillCategory, JourneyMilestone, SocialLink } from '../types';

export const personalInfo = {
  name: "Harsh",
  fullName: "Harsh",
  role: "Full Stack Developer & Creative",
  location: "India",
  status: "Available for opportunities",
  bio: {
    hero: {
      headline: "Hey, I'm Harsh.",
      subheading: "I build digital experiences, write code, and create visuals that tell stories.",
      intro: "An aspiring software engineer passionate about Full Stack Development, technology, and creative storytelling.",
    },
    about: {
      paragraph1: "I'm a developer and creative enthusiast who enjoys turning ideas into meaningful digital experiences. I explore the intersection of technology, design, and storytelling.",
      paragraph2: "My approach is driven by a deep appreciation for craft — whether architecting performant code with Java and modern web technologies, or curating the pacing, color, and mood of a cinematic sequence.",
      focusAreas: [
        {
          title: "Full Stack Development",
          desc: "Bridging architectural backend logic with intuitive, pixel-precise frontend systems."
        },
        {
          title: "Java Programming",
          desc: "Writing clean, structured, and modular code with core object-oriented principles."
        },
        {
          title: "Web Development",
          desc: "Building accessible, fast, and responsive user experiences using contemporary standards."
        },
        {
          title: "Creative Video Editing",
          desc: "Sculpting visual narratives, pacing, soundscapes, and color grading for lasting emotional impact."
        },
        {
          title: "Photography & Cinematography",
          desc: "Capturing natural light, composition, geometry, and unscripted human moments."
        },
        {
          title: "Problem Solving",
          desc: "Deconstructing complex challenges into methodical, elegant, and maintainable solutions."
        }
      ]
    }
  }
};

export const skillsData: SkillCategory[] = [
  {
    title: "Programming",
    subtitle: "Core languages for building logic, applications, and structure",
    skills: [
      {
        name: "Java",
        focus: "Object-Oriented Programming & Systems",
        description: "Robust type safety, data structures, modular classes, and core computational foundations."
      },
      {
        name: "JavaScript",
        focus: "Interactive & Modern Web Logic",
        description: "ES6+ syntax, asynchronous programming, DOM manipulation, and dynamic client experiences."
      },
      {
        name: "HTML",
        focus: "Semantic & Accessible Markup",
        description: "Accessible document architecture, modern HTML5 semantics, and SEO-first hierarchy."
      },
      {
        name: "CSS",
        focus: "Modern Layouts & Styling",
        description: "Flexbox, CSS Grid, responsive design systems, transitions, and contemporary UI frameworks."
      }
    ]
  },
  {
    title: "Development Tools",
    subtitle: "Essential engineering workflow and collaboration tools",
    skills: [
      {
        name: "Git",
        focus: "Version Control & History",
        description: "Branching strategies, staging, conflict resolution, and atomic commit management."
      },
      {
        name: "GitHub",
        focus: "Collaboration & Repositories",
        description: "Remote code hosting, pull request reviews, documentation, and open source integration."
      },
      {
        name: "VS Code",
        focus: "Development Environment",
        description: "Configured extensions, linting, debugging pipelines, and keyboard-first productivity."
      }
    ]
  },
  {
    title: "Currently Exploring",
    subtitle: "Continuous learning, research, and technical expansion",
    skills: [
      {
        name: "Data Structures & Algorithms",
        focus: "Algorithmic Efficiency",
        description: "Recursion, trees, graphs, sorting, searching, and time/space complexity optimization."
      },
      {
        name: "MongoDB",
        focus: "NoSQL Database Design",
        description: "Document models, schema validation, aggregation pipelines, and flexible data querying."
      },
      {
        name: "Backend Development",
        focus: "APIs & Server Architecture",
        description: "RESTful architecture, request lifecycle, authentication mechanisms, and server-side logic."
      },
      {
        name: "Modern Web Technologies",
        focus: "Component Systems & Tooling",
        description: "React ecosystem, TypeScript typing, Tailwind CSS architecture, and build optimizers."
      }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "algo-lens",
    title: "AlgoLens Interactive Engine",
    category: "Full Stack & Algorithms",
    tagline: "Visual algorithmic explorer engineered for intuitive learning",
    description: "A clean, high-performance visualization suite that steps through sorting, graph traversals, and dynamic programming algorithms in real-time with playback controls.",
    technologies: ["Java", "JavaScript", "React", "Tailwind CSS", "Data Structures"],
    metrics: "Real-time state execution with step-through execution controls",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com/algolens",
    githubUrl: "https://github.com/harsh-dev/algolens-visualizer",
    featured: true
  },
  {
    id: "zenith-notes",
    title: "Zenith Minimal Workspace",
    category: "Web Application",
    tagline: "Distraction-free markdown editor and personal knowledge base",
    description: "A local-first, distraction-free markdown application designed with keyboard shortcuts, instant search indexing, and a clean minimalist typography hierarchy.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Git"],
    metrics: "Instant sub-10ms full-text note search & export",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com/zenith-notes",
    githubUrl: "https://github.com/harsh-dev/zenith-workspace",
    featured: true
  },
  {
    id: "cinecraft-portfolio",
    title: "CineFrame Editorial Studio",
    category: "Creative Showcase",
    tagline: "Dynamic media portfolio platform for cinematic filmmakers",
    description: "A bespoke portfolio platform built for cinematographers featuring custom video players, metadata cards, frame color inspection, and fluid responsive galleries.",
    technologies: ["Modern Web Tech", "JavaScript", "Tailwind CSS", "Video APIs"],
    metrics: "Optimized lazy loading & responsive video streaming",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com/cineframe",
    githubUrl: "https://github.com/harsh-dev/cineframe-studio",
    featured: false
  },
  {
    id: "backend-core-api",
    title: "Nexus Core REST Architecture",
    category: "Backend & Systems",
    tagline: "Modular backend service exploring structured routing and persistence",
    description: "A structured backend service prototype implementing secure user sessions, CRUD operations, database schema modeling, and standardized response schemas.",
    technologies: ["Java", "MongoDB", "REST APIs", "Git"],
    metrics: "Structured modular routing with clean error handling",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com/nexus-api",
    githubUrl: "https://github.com/harsh-dev/nexus-backend",
    featured: false
  }
];

export const creativeWorksData: CreativeItem[] = [
  {
    id: "cw-1",
    title: "Whispers of the Coast",
    category: "Cinematic Videos",
    aspectRatio: "video",
    description: "A slow-paced exploration of dawn light, ocean mist, and rugged coastal cliffs. Color-graded with a moody, high-contrast natural film emulation.",
    role: "Direction, Cinematography & Grading",
    duration: "2 min 40s",
    client: "Passion Project",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "cw-2",
    title: "The Eternal Vow: Kabir & Meera",
    category: "Wedding Films",
    aspectRatio: "portrait",
    description: "A cinematic wedding highlight blending sacred rituals with candid emotional exchanges. Edited to an orchestral crescendo emphasizing authentic family memories.",
    role: "Lead Video Editor & Storytelling",
    duration: "4 min 15s",
    client: "Private Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "cw-3",
    title: "Monochrome Geometry",
    category: "Photography",
    aspectRatio: "square",
    description: "A study of brutalist concrete facades, geometric shadows, and the minimalist quiet of urban architectural structures.",
    role: "Still Photography & Darkroom Tone Curve",
    duration: "Photo Series",
    client: "Fine Art Series",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "cw-4",
    title: "Neon Echoes: Midnight Velocity",
    category: "Video Editing",
    aspectRatio: "video",
    description: "Fast-paced montage featuring rhythmic beat-matching, speed ramps, and seamless sound design crafted for a dynamic automotive visual.",
    role: "Editorial, Sound Design & Visual Rhythm",
    duration: "1 min 15s",
    client: "Commercial Showcase",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "cw-5",
    title: "Memories in Amber",
    category: "Wedding Films",
    aspectRatio: "video",
    description: "Intimate outdoor twilight ceremony captured during the golden hour. Pacing focused on subtle gestures, vows, and delicate ambient sound.",
    role: "Cinematography & Post-Production",
    duration: "3 min 30s",
    client: "Destination Wedding",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "cw-6",
    title: "Humanity in Solitude",
    category: "Visual Storytelling",
    aspectRatio: "portrait",
    description: "Visual essay observing contemplative moments in bustling urban streets, framing individuals in harmony with their surroundings.",
    role: "Concept, Photography & Narrative Curation",
    duration: "Visual Essay",
    client: "Documentary Project",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80"
  }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "Step 01",
    period: "Foundations",
    title: "Learning Programming & Software Development",
    badge: "Core Logic",
    description: "Began my journey delving deep into the core fundamentals of computer science and structured software thinking.",
    highlights: [
      "Mastered Java fundamentals, Object-Oriented Programming (OOP), and clean syntax conventions",
      "Built problem-solving intuition by breaking complex programmatic tasks into logical functions",
      "Explored memory management, basic data structures, and algorithmic reasoning"
    ]
  },
  {
    year: "Step 02",
    period: "Expansion",
    title: "Exploring Full Stack Development",
    badge: "Modern Web",
    description: "Ventured into the modern web ecosystem to bridge algorithmic thinking with responsive user interfaces.",
    highlights: [
      "Mastered HTML5 semantics, CSS3 layouts (Grid/Flexbox), and dynamic JavaScript (ES6+)",
      "Explored modern component paradigms, responsive styling frameworks, and clean UI engineering",
      "Studied client-server architecture, asynchronous APIs, and data serialization"
    ]
  },
  {
    year: "Step 03",
    period: "Application",
    title: "Building Practical Development Projects",
    badge: "Engineering",
    description: "Applied theoretical knowledge by building tangible, real-world development projects from the ground up.",
    highlights: [
      "Engineered algorithm visualizers, workspace tools, and interactive applications",
      "Adopted professional Git and GitHub version control workflows for atomic commits and clean codebase history",
      "Investigating backend architectures, MongoDB schema design, and performant REST APIs"
    ]
  },
  {
    year: "Step 04",
    period: "Creative Craft",
    title: "Freelance Video Editing & Creative Storytelling",
    badge: "Visual Direction",
    description: "Cultivated a parallel creative discipline bringing storytelling, aesthetic discipline, and emotion to visual media.",
    highlights: [
      "Edited wedding films, cinematic reels, and visual essays with intentional pacing and sound design",
      "Honed advanced color grading, framing, composition, and emotional resonance",
      "Discovered strong synergy between software craft and creative editing: both demand precision, rhythm, and attention to detail"
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/harsh-dev",
    username: "@harsh-dev",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/harsh-dev",
    username: "in/harsh-dev",
    icon: "Linkedin"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/harsh.visuals",
    username: "@harsh.visuals",
    icon: "Instagram"
  },
  {
    name: "Email",
    url: "mailto:harsh.dev.creative@gmail.com",
    username: "harsh.dev.creative@gmail.com",
    icon: "Mail"
  }
];
