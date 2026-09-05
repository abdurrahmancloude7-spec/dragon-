export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  spiceLevel?: 1 | 2 | 3;
  isSignature?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'wok' | 'dishes' | 'ingredients' | 'kitchen';
  image: string;
}

export interface ExperienceStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
}

export interface StoryStage {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
}
