
export type Language = 'de' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface Publication {
  title: string;
  journal: string;
  year: number;
  link: string;
}

export interface Lecture {
  title: string;
  event: string;
  date: string;
  type: string;
  image?: string;
}

export interface MediaLink {
  title: string;
  platform: string;
  type: string;
  link: string;
  date: string;
}

export interface ExternalLink {
  name: string;
  url: string;
  description: string;
}
