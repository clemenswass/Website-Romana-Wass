// Adding export {} to mark this file as a module, preventing global scope naming conflicts
export {};

let translations: Record<string, any> = {};
let currentLang = 'de';

async function loadTranslations(lang: string) {
    const body = document.getElementById('app-body');
    try {
        const response = await fetch(`${lang}.json`);
        if (!response.ok) throw new Error('Network response was not ok');
        translations = await response.json();
        currentLang = lang;
        applyTranslations();
        updateUI();
    } catch (error) {
        console.warn(`Translation loading for ${lang} failed, using existing or default:`, error);
        // Ensure UI is visible even if fetch fails (e.g. Brave Shields block)
        body?.classList.remove('loading');
        body?.classList.add('loaded');
        handleReveal(); // Trigger initial reveal
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
    const body = document.getElementById('app-body');
    body?.classList.remove('loading');
    body?.classList.add('loaded');
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
        const triggerPoint = window.innerHeight * 0.95; // More lenient for mobile
        if (rect.top < triggerPoint) el.classList.add('active');
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
    
    // Throttled scroll listener
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

    // Initial trigger
    setTimeout(handleReveal, 300);
});