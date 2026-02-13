
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
  Microscope,
  Languages
} from 'lucide-react';
import { ICONS, EXTERNAL_LINKS, PAST_LECTURES, MEDIA_LINKS } from './constants';
import { Language } from './types';
import { translations } from './translations';
import Impressum from './components/Impressum';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);
  const [lang, setLang] = useState<Language>('de');

  const LINKEDIN_URL = "https://www.linkedin.com/in/romana-wass/";

  useEffect(() => {
    // Detect browser language on first load
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en') {
      setLang('en');
    } else {
      setLang('de');
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  const NAV_ITEMS_TRANSLATED = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.expertise, href: '#expertise' },
    { label: t.nav.science, href: '#science' },
    { label: t.nav.lectures, href: '#lectures' },
    { label: t.nav.media, href: '#media' },
    { label: t.nav.consultation, href: '#consultation' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-[1rem]' : 'bg-transparent py-[1.618rem]'}`}>
        <div className="container mx-auto px-[1.618rem] flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className={`text-[1.618rem] font-heading font-black tracking-tighter ${scrolled ? 'text-blue-900' : 'text-blue-950'}`}>
              Dr. Romana Wass<span className="text-blue-500">.</span>
            </div>
            <span className={`text-[10px] font-bold uppercase phi-tracking ${scrolled ? 'text-slate-500' : 'text-slate-600'} hidden lg:block`}>PhD | {lang === 'de' ? 'Fachärztin' : 'Specialist'}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-[2.618rem]">
            {NAV_ITEMS_TRANSLATED.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className={`text-[0.75rem] font-bold uppercase tracking-widest hover:text-blue-600 transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-800'}`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <button 
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              className={`flex items-center space-x-1 text-[0.75rem] font-bold uppercase tracking-widest transition-colors p-2 rounded-lg hover:bg-slate-100 ${scrolled ? 'text-slate-700' : 'text-slate-800'}`}
            >
              <Languages size={14} />
              <span>{lang === 'de' ? 'EN' : 'DE'}</span>
            </button>

            <div className="flex items-center space-x-2 border-l border-slate-200 pl-[1.618rem]">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-all p-2 hover:bg-blue-50 rounded-full">
                {ICONS.LinkedIn}
              </a>
              <a href="https://researchgate.net" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-all p-2 hover:bg-blue-50 rounded-full">
                {ICONS.ResearchGate}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button & Language toggle */}
          <div className="lg:hidden flex items-center space-x-4">
             <button 
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              className="text-xs font-bold uppercase tracking-widest text-slate-900 px-3 py-1 bg-slate-100 rounded-md"
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
            <button className="text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute top-full left-0 w-full p-[2.618rem] shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-[1.618rem]">
              {NAV_ITEMS_TRANSLATED.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-[1.618rem] flex space-x-6 border-t border-slate-100">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-slate-600">{ICONS.LinkedIn}</a>
                <a href="https://researchgate.net" target="_blank" rel="noopener noreferrer" className="text-slate-600">{ICONS.ResearchGate}</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[38.2%] h-full bg-blue-50/50 hidden lg:block"></div>
        <div className="container mx-auto px-[1.618rem] grid lg:grid-cols-[61.8%_1fr] phi-gap-lg items-center relative z-10">
          <div className="animate-in fade-in slide-in-from-left duration-1000 py-[4.236rem]">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold uppercase phi-tracking mb-[1.618rem] border border-blue-200">
              {t.hero.role}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-slate-900 leading-[1.1] mb-[1.618rem]">
              Dr. Romana <span className="text-blue-900">Wass</span>, PhD
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-[2.618rem] max-w-[32rem] leading-[1.618] font-medium">
              {t.hero.sub}
            </p>
            <div className="flex flex-wrap gap-[1rem]">
              <a href="#consultation" className="bg-blue-950 text-white px-[2.618rem] py-[1.2rem] rounded-xl font-bold hover:bg-blue-900 transition-all flex items-center group shadow-2xl shadow-blue-200">
                {t.hero.cta1} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a href="#lectures" className="bg-white border-2 border-slate-100 text-slate-700 px-[2.618rem] py-[1.2rem] rounded-xl font-bold hover:border-blue-200 transition-all">
                {t.hero.cta2}
              </a>
            </div>
            
            <div className="mt-[4.236rem] flex items-center space-x-[2.618rem] text-slate-400">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">10+</span>
                <span className="text-[10px] font-bold uppercase phi-tracking">{t.hero.stat1}</span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">50+</span>
                <span className="text-[10px] font-bold uppercase phi-tracking">{t.hero.stat2}</span>
              </div>
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in duration-1000 hidden lg:block">
            <div className="phi-aspect-v w-full overflow-hidden rounded-[2.618rem] shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536b8a?q=80&w=800&auto=format&fit=crop" 
                alt="Dr. Romana Wass" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-[6.854rem] bg-slate-50">
        <div className="container mx-auto px-[1.618rem]">
          <div className="text-center mb-[4.236rem]">
            <span className="text-blue-600 font-black text-[10px] uppercase phi-tracking mb-4 block">{t.expertise.tag}</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-blue-950 mb-[1.618rem]">{t.expertise.title}</h2>
            <div className="w-[4.236rem] h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 phi-gap">
            {t.expertise.items.map((item, idx) => (
              <div key={idx} className="p-[2.618rem] bg-white rounded-[2.618rem] border border-slate-100 hover:shadow-2xl transition-all group shadow-sm">
                <div className="w-[4.236rem] h-[4.236rem] bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-[1.618rem] group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {idx === 0 ? ICONS.Clinical : idx === 1 ? ICONS.Science : idx === 2 ? <Zap size={24} /> : ICONS.Advisory}
                </div>
                <h3 className="text-xl font-heading font-black mb-[1rem] text-slate-900 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 leading-[1.618] text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-[6.854rem] bg-white overflow-hidden">
        <div className="container mx-auto px-[1.618rem]">
          <div className="flex flex-col lg:flex-row gap-[4.236rem] items-center">
            <div className="w-full lg:w-[61.8%]">
              <Quote className="text-blue-600/10 mb-[1.618rem]" size={64} fill="currentColor" />
              <h2 className="text-4xl md:text-5xl font-heading font-black text-blue-950 mb-[2.618rem] leading-tight italic">
                {t.about.quote}
              </h2>
              <div className="space-y-[1.618rem] text-slate-600 text-lg leading-[1.618] font-medium">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <div className="grid sm:grid-cols-2 gap-[1.618rem] pt-[2.618rem]">
                  <div className="flex items-center space-x-3 p-[1.618rem] bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-blue-600">{ICONS.Award}</div>
                    <span className="font-bold text-xs uppercase phi-tracking text-slate-900">{t.about.label1}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-[1.618rem] bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-blue-600">{ICONS.Teaching}</div>
                    <span className="font-bold text-xs uppercase phi-tracking text-slate-900">{t.about.label2}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[38.2%]">
              <div className="phi-aspect-v relative rounded-[2.618rem] overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" alt="Research" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-blue-900/10"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-[2.618rem] bg-gradient-to-t from-blue-950/80 to-transparent">
                    <div className="text-white font-heading font-black text-2xl tracking-tighter">{t.about.researchTag}</div>
                    <div className="text-white/60 text-xs font-bold uppercase phi-tracking">{t.about.researchSub}</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="py-[6.854rem] bg-slate-900 text-white">
        <div className="container mx-auto px-[1.618rem]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-[4.236rem] phi-gap">
            <div className="w-full md:w-[61.8%]">
              <h2 className="text-4xl md:text-6xl font-heading font-black mb-[1rem] tracking-tight">{t.science.title}</h2>
              <p className="text-slate-400 text-lg leading-[1.618] font-medium">{t.science.sub}</p>
            </div>
            <a 
              href="https://researchgate.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center bg-white/5 border border-white/10 px-[1.618rem] py-[1rem] rounded-xl text-blue-400 font-bold hover:bg-white/10 transition-all"
            >
              ResearchGate {ICONS.External}
            </a>
          </div>

          <div className="grid lg:grid-cols-[1.618fr_1fr] phi-gap-lg">
            <div className="space-y-[1rem]">
              {[
                { year: 2024, title: 'Impact of Liquid Biopsy on Lung Cancer Staging', journal: 'Journal of Clinical Oncology' },
                { year: 2023, title: 'Novel Immunotherapy Combinations in SCLC', journal: 'The Lancet Respiratory Medicine' },
                { year: 2023, title: 'Real-world data on EGFR mutation outcomes in Austria', journal: 'Wiener Klinische Wochenschrift' }
              ].map((pub, i) => (
                <div key={i} className="p-[1.618rem] bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all flex items-start phi-gap">
                  <span className="text-2xl font-black text-blue-500/50 shrink-0">{pub.year}</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1 leading-tight">{pub.title}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase phi-tracking italic">{pub.journal}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-600 p-[2.618rem] rounded-[2.618rem] shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Microscope size={140} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-black mb-[1.618rem] tracking-tight">{t.science.habTitle}</h3>
                <p className="text-blue-50 leading-[1.618] mb-[2.618rem] font-medium">
                  {t.science.habDesc}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-xs font-bold uppercase phi-tracking">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span>{t.science.habItem1}</span>
                </div>
                <div className="flex items-center space-x-3 text-xs font-bold uppercase phi-tracking">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span>{t.science.habItem2}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lectures & Media Section */}
      <section id="lectures" className="py-[6.854rem] bg-white">
        <div className="container mx-auto px-[1.618rem]">
          <div className="grid lg:grid-cols-[1fr_1.618fr] gap-[4.236rem]">
            <div className="order-2 lg:order-1">
              <span className="text-blue-600 font-black text-[10px] uppercase phi-tracking mb-4 block">{t.lectures.mediaTag}</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-blue-950 mb-[2.618rem]">{t.lectures.mediaTitle}</h2>
              <div className="space-y-[2.618rem]">
                {MEDIA_LINKS.map((item, idx) => (
                  <div key={idx} className="group border-l-4 border-slate-100 pl-[1.618rem] hover:border-blue-600 transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black text-blue-600 uppercase phi-tracking">{item.platform}</span>
                      <span className="text-[10px] font-bold text-slate-400">{item.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-950 transition-colors leading-snug">{item.title}</h4>
                    <a href={item.link} className="inline-flex items-center text-xs font-bold text-slate-400 mt-[1rem] hover:text-blue-600 transition-colors uppercase phi-tracking">
                      {t.lectures.mediaCta} {ICONS.External}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-[10px] font-black uppercase phi-tracking text-slate-400 mb-[1.618rem]">{t.lectures.lectureTag}</h3>
              <div className="grid md:grid-cols-2 phi-gap">
                {PAST_LECTURES.map((lecture, idx) => (
                  <div key={idx} className="group relative rounded-[1.618rem] overflow-hidden aspect-[1.618/1] shadow-lg">
                    <img 
                      src={lecture.image} 
                      alt={lecture.title} 
                      className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 p-[1.618rem]">
                      <span className="text-[8px] bg-blue-600 text-white px-2 py-1 rounded font-black uppercase mb-1 inline-block">{lecture.type}</span>
                      <h5 className="text-white font-bold text-sm leading-tight tracking-tight">{lecture.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Opinion Section */}
      <section id="consultation" className="py-[6.854rem] bg-blue-50">
        <div className="container mx-auto px-[1.618rem]">
          <div className="max-w-[50rem] mx-auto bg-white rounded-[2.618rem] shadow-2xl p-[4.236rem] text-center border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>
            <span className="text-blue-600 font-black text-[10px] uppercase phi-tracking mb-4 block">{t.consultation.tag}</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-blue-950 mb-[1.618rem] tracking-tight">{t.consultation.title}</h2>
            <p className="text-slate-500 text-lg leading-[1.618] mb-[2.618rem] font-medium">
              {t.consultation.desc}
            </p>
            <div className="flex flex-wrap justify-center phi-gap mb-[2.618rem]">
              <div className="flex items-center space-x-2 text-sm font-bold text-slate-700">
                <ShieldCheck size={18} className="text-blue-600" /> <span>{t.consultation.item1}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-bold text-slate-700">
                <ShieldCheck size={18} className="text-blue-600" /> <span>{t.consultation.item2}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-bold text-slate-700">
                <ShieldCheck size={18} className="text-blue-600" /> <span>{t.consultation.item3}</span>
              </div>
            </div>
            <a href="#contact" className="inline-block bg-blue-950 text-white px-[4.236rem] py-[1.2rem] rounded-xl font-bold hover:bg-blue-900 transition-all shadow-xl shadow-blue-200">
              {t.consultation.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-[6.854rem] bg-white">
        <div className="container mx-auto px-[1.618rem]">
          <div className="grid lg:grid-cols-[1fr_1.618fr] gap-[4.236rem]">
            <div>
              <span className="text-blue-600 font-black text-[10px] uppercase phi-tracking mb-4 block">{t.contact.tag}</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-blue-950 mb-[2.618rem] tracking-tighter">{t.contact.title}</h2>
              <p className="text-slate-500 mb-[2.618rem] leading-[1.618] font-medium">
                {t.contact.desc}
              </p>
              
              <div className="space-y-[1.618rem]">
                <div className="flex items-start phi-gap">
                  <div className="w-[3.5rem] h-[3.5rem] bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t.contact.office}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{t.contact.officeAddress}</p>
                  </div>
                </div>
                <div className="flex items-start phi-gap">
                  <div className="w-[3.5rem] h-[3.5rem] bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <Globe />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Digital</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">www.wass.at<br />LinkedIn Dr. Romana Wass</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="bg-slate-50 p-[2.618rem] rounded-[2.618rem] border border-slate-100 shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 phi-gap mb-[1.618rem]">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase phi-tracking text-slate-400 ml-1">{t.contact.labelName}</label>
                  <input type="text" className="w-full bg-white border border-slate-200 px-6 py-3 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase phi-tracking text-slate-400 ml-1">{t.contact.labelEmail}</label>
                  <input type="email" className="w-full bg-white border border-slate-200 px-6 py-3 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium" />
                </div>
              </div>
              <div className="space-y-2 mb-[1.618rem]">
                <label className="text-[10px] font-black uppercase phi-tracking text-slate-400 ml-1">{t.contact.labelSubject}</label>
                <select className="w-full bg-white border border-slate-200 px-6 py-3 rounded-xl focus:border-blue-500 outline-none transition-all font-medium cursor-pointer">
                  {t.contact.subjects.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="space-y-2 mb-[2.618rem]">
                <label className="text-[10px] font-black uppercase phi-tracking text-slate-400 ml-1">{t.contact.labelMessage}</label>
                <textarea rows={4} className="w-full bg-white border border-slate-200 px-6 py-3 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"></textarea>
              </div>
              <button className="w-full bg-blue-900 text-white py-[1.2rem] rounded-xl font-bold hover:bg-blue-800 transition-all shadow-xl shadow-blue-200 transform hover:-translate-y-0.5 active:translate-y-0">
                {t.contact.cta}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-[4.236rem] bg-white border-t border-slate-100">
        <div className="container mx-auto px-[1.618rem]">
          <div className="flex flex-col md:flex-row justify-between items-center phi-gap">
            <div className="text-center md:text-left">
              <div className="text-2xl font-heading font-black text-blue-950 tracking-tighter italic">Dr. Romana Wass<span className="text-blue-500">.</span></div>
              <p className="text-[10px] font-black text-slate-400 uppercase phi-tracking mt-1">{t.footer.tag}</p>
            </div>
            
            <div className="flex items-center space-x-[2.618rem]">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full">{ICONS.LinkedIn}</a>
              <a href="https://researchgate.net" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full">{ICONS.ResearchGate}</a>
              <button onClick={() => setShowImpressum(true)} className="text-[10px] font-black uppercase phi-tracking text-slate-500 hover:text-blue-600 transition-colors">{t.footer.impressum}</button>
            </div>
            
            <div className="text-slate-300 text-[10px] font-bold uppercase phi-tracking">
              &copy; {new Date().getFullYear()} wass.at
            </div>
          </div>
        </div>
      </footer>

      {showImpressum && <Impressum onClose={() => setShowImpressum(false)} lang={lang} />}
    </div>
  );
};

export default App;
