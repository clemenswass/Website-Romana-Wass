import { GoogleGenAI } from "@google/genai";

let translations = {};
let currentLang = 'de';
let bootstrapModal = null;

/**
 * Loads translation files based on language code.
 */
async function loadTranslations(lang) {
    const body = document.getElementById('app-body');
    try {
        const response = await fetch(`${lang}.json`);
        if (!response.ok) throw new Error('Translation file not found');
        translations = await response.json();
        currentLang = lang;
        applyTranslations();
    } catch (error) {
        console.warn(`Translation load for ${lang} failed. Using German defaults.`);
    } finally {
        body?.classList.remove('no-js');
        updateUI();
        handleReveal();
    }
}

/**
 * Iterates through all elements with data-i18n attribute and updates content.
 */
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (!key) return;
        
        const value = key.split('.').reduce((obj, k) => (obj || {})[k], translations);
        if (value) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = value;
            } else {
                el.innerText = value;
            }
        }
    });
}

/**
 * Toggles between available languages.
 */
function switchLanguage() {
    const next = currentLang === 'de' ? 'en' : 'de';
    loadTranslations(next);
}

/**
 * Updates UI labels that are not handled by data-i18n.
 */
function updateUI() {
    const langToggleLabel = document.getElementById('lang-toggle-label');
    const mobileLangLabel = document.getElementById('mobile-lang-label');
    if (langToggleLabel) langToggleLabel.innerText = currentLang === 'de' ? 'EN' : 'DE';
    if (mobileLangLabel) mobileLangLabel.innerText = currentLang === 'de' ? 'English' : 'Deutsch';
    document.documentElement.lang = currentLang;
}

/**
 * UI: Fullscreen Mobile menu toggle.
 */
function toggleMobileMenu() {
    const overlay = document.getElementById('mobile-nav-overlay');
    overlay?.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
}

/**
 * UI: Impressum modal toggle using Bootstrap 5 API.
 */
function toggleModal() {
    const modalEl = document.getElementById('modal-overlay');
    if (!bootstrapModal) {
        bootstrapModal = new bootstrap.Modal(modalEl);
    }
    
    const isVisible = modalEl.classList.contains('show');
    if (isVisible) {
        bootstrapModal.hide();
    } else {
        bootstrapModal.show();
    }
}

/**
 * UI: Scroll reveal logic for animations.
 */
function handleReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
            el.classList.add('active');
        }
    });
}

/**
 * UI: Parallax Background logic.
 * Improved to handle multiple elements with data-parallax-speed.
 */
function handleParallax() {
    const scrollY = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0;
        const offset = scrollY * speed;
        // Use translate3d for better GPU performance
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
}

/**
 * UI: AI Chat toggle.
 */
function toggleAIChat() {
    const chat = document.getElementById('ai-chat-window');
    chat?.classList.toggle('hidden');
}

/**
 * Logic: AI Message sending using Google Gemini API.
 */
async function sendAIMessage() {
    const inputEl = document.getElementById('ai-input');
    const chatContainer = document.getElementById('chat-messages');
    const prompt = inputEl.value.trim();
    
    if (!prompt || !chatContainer) return;

    // 1. User UI Update
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble chat-user';
    userBubble.innerText = prompt;
    chatContainer.appendChild(userBubble);
    inputEl.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // 2. Loading UI Update
    const botBubble = document.createElement('div');
    botBubble.className = 'chat-bubble chat-bot italic animate-pulse';
    botBubble.innerText = currentLang === 'de' ? 'Überlege...' : 'Thinking...';
    chatContainer.appendChild(botBubble);

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: {
                systemInstruction: `You are an AI assistant on the website of Dr. Romana Wass, PhD. 
                She is a Senior Physician at JKU University Hospital Linz, specialized in Pulmonology and Thoracic Oncology.
                Answer professionally and with medical empathy. 
                Disclaimer: You are an AI, and your responses do not replace medical consultation.
                Tone: High-end, academic, yet accessible.
                Language: Respond in ${currentLang === 'de' ? 'German' : 'English'}.`,
                temperature: 0.7,
            }
        });

        const text = response.text || (currentLang === 'de' ? 'Keine Antwort erhalten.' : 'No response received.');
        botBubble.classList.remove('italic', 'animate-pulse');
        botBubble.innerText = text;

    } catch (error) {
        console.error('Gemini Error:', error);
        botBubble.innerText = currentLang === 'de' ? 'Dienst momentan nicht verfügbar.' : 'Service temporarily unavailable.';
        botBubble.classList.remove('animate-pulse');
    }
    
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Global exposure for HTML inline handlers
window.switchLanguage = switchLanguage;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleModal = toggleModal;
window.toggleAIChat = toggleAIChat;
window.sendAIMessage = sendAIMessage;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Detect preferred language
    const browserLang = navigator.language.startsWith('en') ? 'en' : 'de';
    loadTranslations(browserLang);
    
    // Efficient scroll handling
    let scrollTimeout = null;
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
                handleParallax();
                scrollTimeout = null;
            });
        }
    }, { passive: true });

    // AI input "Enter" listener
    const aiInput = document.getElementById('ai-input');
    aiInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendAIMessage();
    });

    // Close zoom/modals on Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modalEl = document.getElementById('modal-overlay');
            if (modalEl?.classList.contains('show') && bootstrapModal) {
                bootstrapModal.hide();
            }
            const overlay = document.getElementById('mobile-nav-overlay');
            if (overlay?.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });

    // Initial check
    setTimeout(() => {
        handleReveal();
        handleParallax();
    }, 500);
});