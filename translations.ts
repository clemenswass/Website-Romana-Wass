
import { Language } from './types';

export const translations = {
  de: {
    nav: {
      about: 'Über mich',
      expertise: 'Expertise',
      science: 'Wissenschaft',
      lectures: 'Vorträge',
      media: 'Medien',
      consultation: 'Zweitmeinung',
      contact: 'Kontakt',
    },
    hero: {
      role: 'Oberärztin | JKU Universitätsklinikum Linz',
      sub: 'Spezialistin für Lungenheilkunde mit Schwerpunkt Onkologie. Individuelle Spitzenmedizin trifft auf akademische Exzellenz am JKU Universitätsklinikum Linz.',
      cta1: 'Zweitmeinung anfragen',
      cta2: 'Vorträge & Boards',
      stat1: 'Expertise',
      stat2: 'Publikationen',
    },
    expertise: {
      tag: 'Medizinische Fachbereiche',
      title: 'Schwerpunkte',
      items: [
        { title: 'Thoraxonkologie', desc: 'Interdisziplinäre Behandlung von bösartigen Lungenerkrankungen und Brustraumtumoren.' },
        { title: 'Targeted Therapy', desc: 'Präzisionsmedizin durch molekularbiologische Diagnostik und Immunonkologie.' },
        { title: 'Früherkennung', desc: 'Screening und Abklärung unklarer Lungenbefunde mittels modernster Verfahren.' },
        { title: 'Expert Advisory', desc: 'Wissenschaftliche Beratung für Tumorboards und pharmazeutische Expertengremien.' }
      ]
    },
    about: {
      quote: '"Wissenschaftlicher Fortschritt ist dann wertvoll, wenn er beim Patienten ankommt."',
      p1: 'Als Oberärztin am JKU Universitätsklinikum Linz verbinde ich klinische Exzellenz mit akademischer Forschung. Mein Fokus liegt auf der Optimierung der onkologischen Behandlungspfade im Bereich der Lungenheilkunde.',
      p2: 'Mit Wohnsitz in Salzburg schätze ich die überregionale Vernetzung. Mein Ziel ist die Erlangung der Habilitation, um neue Standards in der pneumologischen Lehre und Forschung zu setzen.',
      label1: 'Habilitationskandidatin JKU',
      label2: 'Akademische Lehre',
      researchTag: 'Forschung',
      researchSub: 'Innovation & Evidenz'
    },
    science: {
      title: 'Wissenschaft',
      sub: 'Laufende Forschungsprojekte und internationale Publikationen im Bereich der Thoraxonkologie.',
      habTitle: 'Habilitations-Fokus',
      habDesc: 'Entwicklung molekularer Marker zur Vorhersage des Therapieansprechens bei Immuntherapien im fortgeschrittenen NSCLC.',
      habItem1: 'Präzisionsonkologie',
      habItem2: 'Patient Outcomes Study'
    },
    lectures: {
      mediaTag: 'Medienpräsenz',
      mediaTitle: 'Medien',
      mediaCta: 'Beitrag ansehen',
      lectureTag: 'Vorträge & Advisory Boards',
    },
    consultation: {
      tag: 'Patienten-Service',
      title: 'Klinische Zweitmeinung',
      desc: 'Die onkologische Therapieplanung erfordert höchste Präzision. Ich biete fundierte Beratung und Zweitmeinungen basierend auf neuesten internationalen Leitlinien für Patienten und Angehörige.',
      item1: 'Befundanalyse',
      item2: 'Therapieberatung',
      item3: 'Studienoptionen',
      cta: 'Anfrage senden',
      quote: '"Klarheit und Vertrauen sind das Fundament jeder erfolgreichen Therapie."',
    },
    contact: {
      tag: 'Get in touch',
      title: 'Kontakt',
      desc: 'Für Anfragen zu Advisory Boards, medizinischen Vorträgen oder klinischen Konsultationen stehen Ihnen folgende Kontaktmöglichkeiten zur Verfügung.',
      labelName: 'Ihr Name',
      labelEmail: 'E-Mail',
      labelSubject: 'Anliegen',
      labelMessage: 'Nachricht',
      cta: 'Anfrage absenden',
      subjects: ['Advisory Board', 'Vortragsanfrage', 'Zweitmeinung', 'Wissenschaftliche Kooperation'],
      office: 'Dienstort',
      officeAddress: 'JKU Universitätsklinikum Linz, Krankenhausstraße 9, 4020 Linz'
    },
    footer: {
      tag: 'Spitzenmedizin & Forschung',
      impressum: 'Impressum',
    }
  },
  en: {
    nav: {
      about: 'About',
      expertise: 'Expertise',
      science: 'Science',
      lectures: 'Lectures',
      media: 'Media',
      consultation: 'Second Opinion',
      contact: 'Contact',
    },
    hero: {
      role: 'Senior Physician | JKU University Hospital Linz',
      sub: 'Specialist in Pulmonology with a focus on Oncology. Individual high-end medicine meets academic excellence at JKU University Hospital Linz.',
      cta1: 'Request Second Opinion',
      cta2: 'Lectures & Boards',
      stat1: 'Expertise',
      stat2: 'Publications',
    },
    expertise: {
      tag: 'Medical Specializations',
      title: 'Core Areas',
      items: [
        { title: 'Thoracic Oncology', desc: 'Interdisciplinary treatment of malignant lung diseases and thoracic tumors.' },
        { title: 'Targeted Therapy', desc: 'Precision medicine through molecular biological diagnostics and immuno-oncology.' },
        { title: 'Early Detection', desc: 'Screening and investigation of unclear pulmonary findings using state-of-the-art procedures.' },
        { title: 'Expert Advisory', desc: 'Scientific consulting for tumor boards and pharmaceutical expert committees.' }
      ]
    },
    about: {
      quote: '"Scientific progress is only valuable when it reaches the patient."',
      p1: 'As a senior physician at JKU University Hospital Linz, I combine clinical excellence with academic research. My focus is on optimizing oncological treatment pathways in the field of pulmonology.',
      p2: 'Living in Salzburg, I value supra-regional networking. My goal is to obtain my habilitation to set new standards in pulmonary teaching and research.',
      label1: 'Habilitation Candidate JKU',
      label2: 'Academic Teaching',
      researchTag: 'Research',
      researchSub: 'Innovation & Evidence'
    },
    science: {
      title: 'Science',
      sub: 'Ongoing research projects and international publications in the field of thoracic oncology.',
      habTitle: 'Habilitation Focus',
      habDesc: 'Development of molecular markers to predict therapeutic response to immunotherapies in advanced NSCLC.',
      habItem1: 'Precision Oncology',
      habItem2: 'Patient Outcomes Study'
    },
    lectures: {
      mediaTag: 'Media Presence',
      mediaTitle: 'Media',
      mediaCta: 'View contribution',
      lectureTag: 'Lectures & Advisory Boards',
    },
    consultation: {
      tag: 'Patient Service',
      title: 'Clinical Second Opinion',
      desc: 'Oncological therapy planning requires maximum precision. I offer well-founded advice and second opinions based on the latest international guidelines for patients and relatives.',
      item1: 'Finding analysis',
      item2: 'Therapy consulting',
      item3: 'Study options',
      cta: 'Send request',
      quote: '"Clarity and trust are the foundation of any successful therapy."',
    },
    contact: {
      tag: 'Get in touch',
      title: 'Contact',
      desc: 'For inquiries regarding advisory boards, medical lectures, or clinical consultations, the following contact options are available.',
      labelName: 'Your Name',
      labelEmail: 'E-Mail',
      labelSubject: 'Subject',
      labelMessage: 'Message',
      cta: 'Send Inquiry',
      subjects: ['Advisory Board', 'Lecture Inquiry', 'Second Opinion', 'Scientific Cooperation'],
      office: 'Location',
      officeAddress: 'JKU University Hospital Linz, Krankenhausstraße 9, 4020 Linz'
    },
    footer: {
      tag: 'High-end Medicine & Research',
      impressum: 'Legal Notice',
    }
  }
};
