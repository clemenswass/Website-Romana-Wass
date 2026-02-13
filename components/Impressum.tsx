
import React from 'react';
import { X } from 'lucide-react';

interface ImpressumProps {
  onClose: () => void;
}

const Impressum: React.FC<ImpressumProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl p-10 relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8">Impressum</h2>
        
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <section>
            <h3 className="font-bold text-slate-900 mb-2">Medieninhaberin & Herausgeberin</h3>
            <p>
              Dr. Romana Wass, PhD<br />
              Wohnort: Salzburg, Österreich<br />
              Dienstort: JKU Universitätsklinikum Linz<br />
              Krankenhausstraße 9, 4020 Linz
            </p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-2">Unternehmensgegenstand</h3>
            <p>Ärztliche Tätigkeit (Fachärztin für Pneumologie)</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-2">Zuständige Kammer</h3>
            <p>Ärztekammer für Oberösterreich / Ärztekammer für Salzburg</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-2">Berufsbezeichnung</h3>
            <p>Fachärztin für Innere Medizin und Pneumologie (verliehen in Österreich)</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-2">Haftungsausschluss</h3>
            <p className="text-sm">
              Sämtliche Inhalte auf dieser Website dienen lediglich der allgemeinen Information und stellen keine medizinische Beratung oder Heilversprechen dar. Trotz sorgfältiger Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-2">Datenschutz</h3>
            <p className="text-sm">
              Wir verwenden keine Tracking-Cookies von Drittanbietern. Anfragen über das Kontaktformular werden verschlüsselt übertragen und nur zum Zweck der Beantwortung Ihres Anliegens gespeichert. Eine Weitergabe an Dritte erfolgt nicht ohne ausdrückliche Zustimmung.
            </p>
          </section>
        </div>
        
        <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-slate-100 text-slate-700 px-6 py-2 rounded-lg font-bold hover:bg-slate-200 transition-all"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
