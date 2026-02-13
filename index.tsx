export {};

let translations: Record<string, any> = {};
let currentLang = 'de';

async function loadTranslations(lang: string) {
    const body = document.getElementById('app-body');
    try {
        const response = await fetch(`${lang}.json`);
        if (!response.ok) throw new Error('Translation fetch failed');
        translations = await response.json();
        currentLang = lang;
        applyTranslations();
    } catch (error) {
        console.warn(`Could not load ${lang}.json. Falling back to HTML defaults.`);
    } finally {
        // Essential: make page visible even if JS or JSON fails
        body?.classList.remove('no-js');
        updateUI();
        handleReveal();
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
        // More generous trigger point for mobile reliability
        if (rect.top < window.innerHeight * 0.95) el.classList.add('active');
    });
}

// Attach to window for HTML event handlers
(window as any).switchLanguage = switchLanguage;
(window as any).toggleMobileMenu = toggleMobileMenu;
(window as any).toggleModal = toggleModal;
(window as any).closeZoom = closeZoom;

document.addEventListener('DOMContentLoaded', () => {
    // Determine language based on browser or default to German
    const browserLang = navigator.language.startsWith('en') ? 'en' : 'de';
    loadTranslations(browserLang);
    
    // Smooth scroll reveal listener
    let scrollTimeout: number | null = null;
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if (window.scrollY > 40) {
            nav?.classList.add('scrolled');
        } else {
            nav?.classList.remove('scrolled');
        }

        if (!scrollTimeout) {
            scrollTimeout = window.requestAnimationFrame(() => {
                handleReveal();
                scrollTimeout = null;
            });
        }
    }, { passive: true });

    // Initial check
    setTimeout(handleReveal, 500);
});