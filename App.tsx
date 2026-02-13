
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Globe, 
  MessageCircle, 
  ShieldCheck,
  Zap,
  Quote,
  // Added Microscope to imports to fix the error on line 263
  Microscope
} from 'lucide-react';
import { NAV_ITEMS, ICONS, EXTERNAL_LINKS, PAST_LECTURES, MEDIA_LINKS } from './constants';
import Impressum from './components/Impressum';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className={`text-2xl font-serif font-bold ${scrolled ? 'text-blue-900' : 'text-blue-900'}`}>
              Dr. Romana Wass<span className="text-blue-500">.</span>
            </div>
            <span className={`text-xs uppercase tracking-widest ${scrolled ? 'text-slate-500' : 'text-slate-600'} hidden md:block`}>PhD | Fachärztin</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-800'}`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 border-l border-slate-300 pl-8">
              <a href="https://linkedin.com" target="_blank" className="text-slate-600 hover:text-blue-600 transition-all" title="LinkedIn Profile">
                {ICONS.LinkedIn}
              </a>
              <a href="https://researchgate.net" target="_blank" className="text-slate-600 hover:text-blue-600 transition-all" title="ResearchGate Profile">
                {ICONS.ResearchGate}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute top-full left-0 w-full p-6 shadow-xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex space-x-6 border-t border-slate-100">
                <a href="#" className="text-slate-600">{ICONS.LinkedIn}</a>
                <a href="#" className="text-slate-600">{ICONS.ResearchGate}</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 -skew-x-12 transform translate-x-20 hidden lg:block"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              Oberärztin | JKU Universitätsklinikum Linz
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight mb-6">
              Dr. Romana <span className="text-blue-900">Wass</span>, PhD
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              Spezialistin für Lungenheilkunde mit Schwerpunkt Onkologie. Wissenschaftliche Expertise und menschliche Begleitung bei Lungenkrebs-Erkrankungen.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#consultation" className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all flex items-center group shadow-lg shadow-blue-200">
                Zweitmeinung anfragen <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a href="#lectures" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all shadow-sm">
                Advisory & Vorträge
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-8 text-slate-400">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-800">10+</span>
                <span className="text-xs uppercase tracking-widest">Jahre Expertise</span>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-800">50+</span>
                <span className="text-xs uppercase tracking-widest">Publikationen</span>
              </div>
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in duration-1000">
            <div className="absolute -inset-4 bg-blue-200/50 rounded-2xl -rotate-3 z-0"></div>
            <img 
              src="https://picsum.photos/seed/docwass/800/1000" 
              alt="Dr. Romana Wass" 
              className="relative z-10 w-full rounded-2xl shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500 aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-slate-100">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <ShieldCheck className="text-green-600 w-5 h-5" />
                </div>
                <span className="font-bold text-slate-800">Spitzenmedizin</span>
              </div>
              <p className="text-sm text-slate-500">Integration neuester Forschungsergebnisse am Universitätsklinikum Linz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">Medizinische Schwerpunkte</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: ICONS.Clinical, 
              title: 'Thoraxonkologie', 
              desc: 'Ganzheitliche Behandlung von Lungenkrebs, Pleuramesotheliom und anderen Tumoren des Brustraums.' 
            },
            { 
              icon: ICONS.Science, 
              title: 'Targeted Therapy', 
              desc: 'Personalisierte Medizin durch gezielte Therapien und Immunonkologie auf Basis neuester Studien.' 
            },
            { 
              icon: <Zap className="w-6 h-6" />, 
              title: 'Früherkennung', 
              desc: 'Screening-Programme und diagnostische Abklärung unklarer Lungenrundherde mittels modernster Verfahren.' 
            },
            { 
              icon: ICONS.Advisory, 
              title: 'Board-Expertise', 
              desc: 'Erfahrene Beraterin für interdisziplinäre Tumorboards und pharmazeutische Advisory Boards.' 
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About / Academic Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-serif font-bold text-blue-900 mb-6 italic">"Wissenschaftlicher Fortschritt ist nur dann wertvoll, wenn er beim Patienten ankommt."</h2>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  Als Oberärztin am <strong>JKU Universitätsklinikum Linz</strong> verbinde ich klinische Exzellenz mit akademischer Forschung. Mein Fokus liegt auf der Optimierung der onkologischen Behandlungspfade im Bereich der Lungenheilkunde.
                </p>
                <p>
                  Mit meinem Wohnsitz in Salzburg schätze ich die überregionale Vernetzung innerhalb Österreichs. Mein Ziel ist die Erlangung der Habilitation, um neue Standards in der Lehre und Forschung zu setzen.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    {ICONS.Award}
                    <span className="font-medium text-sm">Habilitationsanwärterin JKU</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    {ICONS.Teaching}
                    <span className="font-medium text-sm">Lektorin für Pneumologie</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/linz/1000/700" 
                  alt="JKU Linz" 
                  className="rounded-2xl shadow-lg border-4 border-white"
                />
                <div className="absolute -bottom-8 -right-8 bg-blue-900 text-white p-8 rounded-2xl shadow-2xl hidden md:block">
                  <div className="text-3xl font-bold mb-1">JKU Linz</div>
                  <div className="text-sm opacity-80">Zentrum für Spitzenmedizin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science & Publications Section */}
      <section id="science" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-blue-900 mb-4">Wissenschaft & Publikationen</h2>
              <p className="text-slate-600 max-w-lg">Einblick in meine aktuelle Forschungsarbeit und die Liste meiner wissenschaftlichen Veröffentlichungen.</p>
            </div>
            <a 
              href="https://researchgate.net" 
              target="_blank" 
              className="mt-6 md:mt-0 flex items-center text-blue-600 font-bold hover:underline"
            >
              Zum ResearchGate Profil {ICONS.External}
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {[
                { year: 2024, title: 'Impact of Liquid Biopsy on Lung Cancer Staging', journal: 'Journal of Clinical Oncology' },
                { year: 2023, title: 'Novel Immunotherapy Combinations in SCLC', journal: 'The Lancet Respiratory Medicine' },
                { year: 2023, title: 'Real-world data on EGFR mutation outcomes in Austria', journal: 'Wiener Klinische Wochenschrift' }
              ].map((pub, i) => (
                <div key={i} className="p-6 border border-slate-100 rounded-xl hover:border-blue-200 hover:shadow-md transition-all group flex items-start gap-4">
                  <div className="text-blue-600 font-bold">{pub.year}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-900 transition-colors">{pub.title}</h4>
                    <p className="text-sm text-slate-500 italic">{pub.journal}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-900 text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Microscope size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Habilitations-Projekt</h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Aktuelle Forschung zur molekularen Stratifizierung von Lungenkarzinomen in Oberösterreich. Kooperationen mit internationalen Instituten für präzisionsmedizinische Onkologie.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span>Molekulare Diagnostik</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span>Klinische Studien Phase II/III</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span>Patient Reported Outcomes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lectures & Advisory Boards Section */}
      <section id="lectures" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 md:mb-0">Vorträge & Advisory Boards</h2>
            <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20 text-sm">
              Anfragen via <a href="#contact" className="underline hover:text-blue-300">Kontaktformular</a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PAST_LECTURES.map((lecture, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
                <img 
                  src={lecture.image} 
                  alt={lecture.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 p-6">
                  <span className="text-xs bg-blue-600 px-3 py-1 rounded-full font-bold uppercase mb-2 inline-block tracking-wider">
                    {lecture.type}
                  </span>
                  <h4 className="text-xl font-bold mb-1">{lecture.title}</h4>
                  <p className="text-sm opacity-70 flex items-center gap-2">
                    <MapPin size={14} /> {lecture.event} | {lecture.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media & News Section */}
      <section id="media" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <h2 className="text-4xl font-serif font-bold text-blue-900 mb-6">In den Medien</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Beiträge zur Aufklärung und Fachinterviews in TV, Radio und Printmedien. Mein Engagement für die Sichtbarkeit onkologischer Themen in der Öffentlichkeit.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  {ICONS.Video}
                  <div>
                    <div className="font-bold text-sm">TV Beiträge</div>
                    <div className="text-xs text-slate-500">ORF, OÖ Heute</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  {ICONS.Mic}
                  <div>
                    <div className="font-bold text-sm">Podcasts</div>
                    <div className="text-xs text-slate-500">Medizinische Fachgespräche</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 grid sm:grid-cols-2 gap-6">
              {MEDIA_LINKS.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  className="group block p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs text-blue-600 font-bold uppercase tracking-widest">{item.platform}</span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-4 group-hover:text-blue-900 transition-colors leading-snug">{item.title}</h4>
                  <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-blue-600">
                    Beitrag ansehen {ICONS.External}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second Opinion Section */}
      <section id="consultation" className="py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-blue-200/50 overflow-hidden flex flex-col md:flex-row">
            <div className="p-12 md:w-3/5">
              <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">Patienten-Zweitmeinung</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Die Diagnose Lungenkrebs ist lebensverändernd. Eine fundierte Zweitmeinung kann Sicherheit geben und Behandlungsoptionen (z.B. neue Studien oder zielgerichtete Therapien) aufzeigen.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="mt-1"><ShieldCheck className="text-blue-600" size={18} /></div>
                  <span className="text-sm font-medium text-slate-700">Prüfung vorliegender Befunde & Pathologien</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1"><ShieldCheck className="text-blue-600" size={18} /></div>
                  <span className="text-sm font-medium text-slate-700">Diskussion modernster Therapieansätze</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1"><ShieldCheck className="text-blue-600" size={18} /></div>
                  <span className="text-sm font-medium text-slate-700">Individuelle Beratung für Patienten & Angehörige</span>
                </div>
              </div>
              <a href="#contact" className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all">
                Anfrage senden
              </a>
            </div>
            <div className="bg-blue-900 p-12 md:w-2/5 text-white flex flex-col justify-center">
              <Quote className="text-blue-400 mb-6 opacity-30" size={48} />
              <p className="italic text-lg mb-6 leading-relaxed">
                "Klarheit und Vertrauen sind die wichtigsten Säulen in der onkologischen Therapie."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-700 border border-blue-500 overflow-hidden">
                  <img src="https://picsum.photos/seed/face1/100/100" alt="" />
                </div>
                <div className="text-sm">
                  <div className="font-bold">Dr. Romana Wass</div>
                  <div className="opacity-70 text-xs">PhD | Lungenfachärztin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Links Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">Wichtige Links & Institutionen</h3>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {EXTERNAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                className="group flex flex-col items-center"
              >
                <span className="text-xl font-bold text-slate-300 group-hover:text-blue-900 transition-colors">{link.name}</span>
                <span className="text-[10px] uppercase tracking-tighter text-slate-400 group-hover:text-blue-500">{link.description}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-blue-900 mb-6">Kontakt</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Für Anfragen zu Advisory Boards, Fachvorträgen oder Patienten-Zweitmeinungen nutzen Sie bitte das Formular oder kontaktieren Sie mich über LinkedIn.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-600">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Dienstort</h4>
                    <p className="text-slate-500 text-sm">JKU Universitätsklinikum Linz<br />Krankenhausstraße 9, 4020 Linz</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-600">
                    <Globe />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Digital</h4>
                    <p className="text-slate-500 text-sm">wass.at<br />LinkedIn Profil Dr. Romana Wass</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Ihr Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">E-Mail</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="ihre@mail.com" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Anliegen</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none transition-all bg-white">
                  <option>Advisory Board Anfrage</option>
                  <option>Vortragsanfrage</option>
                  <option>Zweitmeinung</option>
                  <option>Wissenschaftliche Kooperation</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Nachricht</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none transition-all" placeholder="Beschreiben Sie kurz Ihr Anliegen..."></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                Anfrage absenden
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-xl font-serif font-bold text-blue-900 mb-2">Dr. Romana Wass, PhD</div>
              <p className="text-xs text-slate-400 tracking-widest uppercase">Fachärztin für Pneumologie & Onkologie</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">{ICONS.LinkedIn}</a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">{ICONS.ResearchGate}</a>
              <button 
                onClick={() => setShowImpressum(true)}
                className="text-sm font-medium text-slate-500 hover:text-blue-600"
              >
                Impressum & Datenschutz
              </button>
            </div>
            
            <div className="text-slate-300 text-sm">
              &copy; {new Date().getFullYear()} wass.at. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Impressum Modal */}
      {showImpressum && <Impressum onClose={() => setShowImpressum(false)} />}
    </div>
  );
};

export default App;
