
import React from 'react';
import { 
  FileText, 
  Linkedin, 
  Microscope, 
  Award, 
  Users, 
  MessageSquare, 
  Stethoscope, 
  Search, 
  Mail, 
  Video, 
  Mic, 
  BookOpen, 
  ExternalLink as ExternalLinkIcon 
} from 'lucide-react';
import { NavItem, ExternalLink, Lecture, MediaLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Über mich', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Wissenschaft', href: '#science' },
  { label: 'Advisory & Vorträge', href: '#lectures' },
  { label: 'Medien', href: '#media' },
  { label: 'Zweitmeinung', href: '#consultation' },
  { label: 'Kontakt', href: '#contact' },
];

export const EXTERNAL_LINKS: ExternalLink[] = [
  { name: 'ÖGP', url: 'https://www.ogp.at/', description: 'Österreichische Gesellschaft für Pneumologie' },
  { name: 'JKU Linz', url: 'https://www.jku.at/universitaetsklinikum-linz/', description: 'JKU Universitätsklinikum Linz' },
  { name: 'SALK', url: 'https://www.salk.at/', description: 'Salzburger Landeskliniken' },
  { name: 'ERS', url: 'https://www.ersnet.org/', description: 'European Respiratory Society' },
  { name: 'IASLC', url: 'https://www.iaslc.org/', description: 'International Association for the Study of Lung Cancer' },
];

export const PAST_LECTURES: Lecture[] = [
  { 
    title: 'Neue Therapiestrategien beim NSCLC', 
    event: 'ÖGP Jahrestagung 2023', 
    date: 'Oktober 2023', 
    type: 'Vortrag', 
    image: 'https://picsum.photos/seed/lecture1/800/600' 
  },
  { 
    title: 'Advisory Board: Immunonkologie Update', 
    event: 'Pharma-Konsortium Wien', 
    date: 'Juni 2023', 
    type: 'Advisory Board', 
    image: 'https://picsum.photos/seed/board1/800/600' 
  },
  { 
    title: 'Habilitationsvortrag: Biomarker in der Onkologie', 
    event: 'Medizinische Fakultät JKU', 
    date: 'März 2024', 
    type: 'Keynote', 
    image: 'https://picsum.photos/seed/lecture2/800/600' 
  },
];

export const MEDIA_LINKS: MediaLink[] = [
  { 
    title: 'Früherkennung von Lungenkrebs', 
    platform: 'ORF Heute Leben', 
    type: 'Video', 
    link: '#', 
    date: 'Januar 2024' 
  },
  { 
    title: 'Moderne Krebstherapie im Fokus', 
    platform: 'Medizin-Podcast Linz', 
    type: 'Podcast', 
    link: '#', 
    date: 'November 2023' 
  },
  { 
    title: 'Spitzenmedizin in Oberösterreich', 
    platform: 'OÖ Nachrichten', 
    type: 'Interview', 
    link: '#', 
    date: 'August 2023' 
  },
];

export const ICONS = {
  LinkedIn: <Linkedin className="w-5 h-5" />,
  ResearchGate: <Search className="w-5 h-5" />,
  Science: <Microscope className="w-6 h-6" />,
  Clinical: <Stethoscope className="w-6 h-6" />,
  Teaching: <BookOpen className="w-6 h-6" />,
  Advisory: <Users className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Mail: <Mail className="w-5 h-5" />,
  External: <ExternalLinkIcon className="w-4 h-4" />,
  Video: <Video className="w-5 h-5" />,
  Mic: <Mic className="w-5 h-5" />,
  File: <FileText className="w-5 h-5" />,
};
