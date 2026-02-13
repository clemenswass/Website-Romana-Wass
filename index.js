
let translations = {};
let currentLang = 'de';

async function loadTranslations(lang) {
    try {
        const response = await fetch(`${lang}.json`);
        translations = await response.json();
        currentLang = lang;
        applyTranslations();
        updateUI();
    } catch (error) {
        console.error('Translation loading failed:', error);
        document.getElementById('app-body').classList.remove('loading');
        document.getElementById('app-body').classList.add('loaded');
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const value = key.split('.').reduce((obj, k) => (obj || {})[k], translations);
        if (value) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = value;
            } else {
                el.innerText = value;
            }
        }
    });
    document.getElementById('app-body').classList.remove('loading');
    document.getElementById('app-body').classList.add('loaded');
}

function switchLanguage() {
    const next = currentLang === 'de' ? 'en' : 'de';
    loadTranslations(next);
}

function updateUI() {
    const langToggleLabel = document.getElementById('lang-toggle-label');
    const mobileLangLabel = document.getElementById('mobile-lang-label');
    if (langToggleLabel) langToggleLabel.innerText = currentLang === 'de' ? 'EN' : 'DE';
    if (mobileLangLabel) mobileLangLabel.innerText = currentLang === 'de' ? 'English' : 'Deutsch';
    document.documentElement.lang = currentLang;
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
    document.body.classList.toggle('overflow-hidden');
}

function toggleModal() {
    const modal = document.getElementById('modal-overlay');
    modal.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
}

function handleReveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add('active');
    });
}

// Global exposure for HTML onclick handlers
window.switchLanguage = switchLanguage;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleModal = toggleModal;

document.addEventListener('DOMContentLoaded', () => {
    const browserLang = navigator.language.startsWith('en') ? 'en' : 'de';
    loadTranslations(browserLang);
    
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if (window.scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        handleReveal();
    });

    setTimeout(handleReveal, 100);
});
