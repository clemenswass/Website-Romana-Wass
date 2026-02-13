// Adding export {} to mark this file as a module, preventing global scope naming conflicts with index.js
export {};

let translations: Record<string, any> = {};
let currentLang = 'de';

async function loadTranslations(lang: string) {
    try {
        const response = await fetch(`${lang}.json`);
        translations = await response.json();
        currentLang = lang;
        applyTranslations();
        updateUI();
    } catch (error) {
        console.error('Translation loading failed:', error);
        document.getElementById('app-body')?.classList.remove('loading');
        document.getElementById('app-body')?.classList.add('loaded');
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (!key) return;
        
        const value = key.split('.').reduce((obj, k) => (obj || {})[k], translations);
        if (value) {
            const element = el as HTMLElement;
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                (element as HTMLInputElement).placeholder = value;
            } else {
                element.innerText = value;
            }
        }
    });
    document.getElementById('app-body')?.classList.remove('loading');
    document.getElementById('app-body')?.classList.add('loaded');
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
    menu?.classList.toggle('translate-x-full');
    document.body.classList.toggle('overflow-hidden');
}

function toggleModal() {
    const modal = document.getElementById('modal-overlay');
    modal?.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
}

function openZoom(src: string) {
    const modal = document.getElementById('zoom-modal');
    const img = document.getElementById('zoom-img') as HTMLImageElement;
    if (img) img.src = src;
    modal?.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    setTimeout(() => {
        modal?.classList.add('active');
    }, 10);
}

function closeZoom() {
    const modal = document.getElementById('zoom-modal');
    modal?.classList.remove('active');
    setTimeout(() => {
        modal?.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }, 400);
}

function handleReveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add('active');
    });
}

// Global exposure for HTML onclick handlers
(window as any).switchLanguage = switchLanguage;
(window as any).toggleMobileMenu = toggleMobileMenu;
(window as any).toggleModal = toggleModal;
(window as any).openZoom = openZoom;
(window as any).closeZoom = closeZoom;

document.addEventListener('DOMContentLoaded', () => {
    const browserLang = navigator.language.startsWith('en') ? 'en' : 'de';
    loadTranslations(browserLang);
    
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if (window.scrollY > 60) {
            nav?.classList.add('scrolled');
        } else {
            nav?.classList.remove('scrolled');
        }
        handleReveal();
    });

    // Handle escape key to close modals
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeZoom();
            const modalOverlay = document.getElementById('modal-overlay');
            if (modalOverlay && !modalOverlay.classList.contains('hidden')) {
                toggleModal();
            }
        }
    });

    setTimeout(handleReveal, 100);
});