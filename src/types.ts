export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  metrics?: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface CreativeItem {
  id: string;
  title: string;
  category: 'Video Editing' | 'Wedding Films' | 'Cinematic Videos' | 'Photography' | 'Visual Storytelling';
  aspectRatio: 'square' | 'video' | 'portrait';
  description: string;
  role: string;
  image: string;
  duration?: string;
  client?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    icon?: string;
    focus: string;
    description: string;
  }[];
}

export interface JourneyMilestone {
  year: string;
  period: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  username: string;
  icon: string;
}
