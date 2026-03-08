
export enum ProjectCategory {
  ALL = 'ALL',
  RESIDENTIAL = 'RESIDENTIAL',
  COMMERCIAL = 'COMMERCIAL',
  AI = 'AI',
  AWARDS = 'AWARDS',
  FIRST_DESIGN = 'FIRST_DESIGN'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  year: string;
  location: string;
  gallery?: string[]; // Optional array of images for a detailed view
  customImageClass?: string; // Optional custom class for specific image adjustments
  firstImageRatio?: string; // Optional aspect ratio for the first image in gallery (e.g. "4/3", "16/9")
  secondImageRatio?: string; // Optional aspect ratio for the second image in gallery
  thirdImageRatio?: string; // Optional aspect ratio for the third image in gallery
  attribution?: string; // Text to display under the project header
  footerAttribution?: string; // Text to display at the end of the gallery
  excludeFromAll?: boolean; // If true, the project will not be shown in the ALL category
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  video?: string;
  content?: string;
}
