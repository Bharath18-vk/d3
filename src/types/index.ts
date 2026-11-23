export interface CategoryItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'wide' | 'tall';
  featuredTags: string[];
  inquiryMessage: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  category: string;
  description: string;
  finish: string;
  image: string;
  colorSwatch?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Living' | 'Dining & Kitchen' | 'Bedroom' | 'Architectural Details';
  caption: string;
  image: string;
  dimensions?: string;
  mood: string;
}

export interface EditorialFeature {
  number: string;
  title: string;
  description: string;
  highlight?: string;
}
