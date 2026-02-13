
import React from 'react';
import { X } from 'lucide-react';
import { Language } from '../types';

interface ImpressumProps {
  onClose: () => void;
  lang: Language;
}

const Impressum: React.FC<ImpressumProps> = ({ onClose, lang }) => {
  const content = {
    de: {
      title: 'Impressum',
      sections: [
        {
          title: 'Medieninhaberin & Herausgeberin',
          text: 'Dr. Romana Wass, PhD\nWohnort: Salzburg, Österreich\nDienstort: JKU Universitätsklinikum Linz\nKrankenhausstraße 9, 4020 Linz'
        },
        {
          title: 'Unternehmensgegenstand',
          text: 'Ärztliche Tätigkeit (Fachärztin für Pneumologie)'
        },
        {
          title: 'Zuständige Kammer',
          text: 'Ärztekammer für Oberösterreich / Ärztekammer für Salzburg'
        },
        {
          title: 'Berufsbezeichnung',
          text: 'Fachärztin für Innere Medizin und Pneumologie (verliehen in Österreich)'
        },
        {
          title: 'Haftungsausschluss',
          text: 'Sämtliche Inhalte auf dieser Website dienen lediglich der allgemeinen Information und stellen keine medizinische Beratung oder Heilversprechen dar. Trotz sorgfältiger Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.'
        },
        {
          title: 'Datenschutz',
          text: 'Wir verwenden keine Tracking-Cookies von Drittanbietern. Anfragen über das Kontaktformular werden verschlüsselt übertragen und nur zum Zweck der Beantwortung Ihres Anliegens gespeichert. Eine Weitergabe an Dritte erfolgt nicht ohne ausdrückliche Zustimmung.'
        }
      ],
      close: 'Schließen'
    },
    en: {
      title: 'Legal Notice',
      sections: [
        {
          title: 'Media Owner & Publisher',
          text: 'Dr. Romana Wass, PhD\nResidence: Salzburg, Austria\nOffice: JKU University Hospital Linz\nKrankenhausstraße 9, 4020 Linz'
        },
        {
          title: 'Object of Company',
          text: 'Medical activity (Specialist in Pulmonology)'
        },
        {
          title: 'Competent Chamber',
          text: 'Medical Chamber of Upper Austria / Medical Chamber of Salzburg'
        },
        {
          title: 'Professional Title',
          text: 'Specialist in Internal Medicine and Pulmonology (awarded in Austria)'
        },
        {
          title: 'Disclaimer',
          text: 'All content on this website is for general information purposes only and does not constitute medical advice or promise of healing. Despite careful control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.'
        },
        {
          title: 'Privacy Policy',
          text: 'We do not use third-party tracking cookies. Inquiries via the contact form are transmitted in encrypted form and only stored for the purpose of answering your request. Data will not be passed on to third parties without express consent.'
        }
      ],
      close: 'Close'
    }
  };

  const t = content[lang];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl p-10 relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-3xl font-heading font-bold text-blue-900 mb-8">{t.title}</h2>
        
        <div className="space-y-6 text-slate-700 leading-relaxed">
          {t.sections.map((s, i) => (
            <section key={i}>
              <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="whitespace-pre-line text-sm">{s.text}</p>
            </section>
          ))}
        </div>
        
        <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-slate-100 text-slate-700 px-6 py-2 rounded-lg font-bold hover:bg-slate-200 transition-all"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
