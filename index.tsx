import { GoogleGenAI } from "@google/genai";

export {};

let translations: Record<string, any> = {};
let currentLang = 'de';

// --- Translation Engine ---
async function loadTranslations(lang: string) {
    const body = document.getElementById('app-body');
    try {
        // Strict relative path for GitHub Pages
        const response = await fetch(`${lang}.json`);
        if (!response.ok) throw new Error('Translation not found');
        translations = await response.json();
        currentLang = lang;
        applyTranslations();
    } catch (error) {
        console.warn(`Translation load for ${lang} failed. Site remains functional in German.`);
    } finally {
        // Ensure site is visible even if fetch fails
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

// --- UI Utilities ---
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

function handleReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // Trigger slightly earlier for better feel
        if (rect.top < window.innerHeight * 0.92) {
            el.classList.add('active');
        }
    });
}

// --- AI Oncology Assistant (Gemini) ---
function toggleAIChat() {
    const chat = document.getElementById('ai-chat-window');
    chat?.classList.toggle('hidden');
}

async function sendAIMessage() {
    const inputEl = document.getElementById('ai-input') as HTMLInputElement;
    const chatContainer = document.getElementById('chat-messages');
    const prompt = inputEl.value.trim();
    
    if (!prompt || !chatContainer) return;

    // 1. Add User Message UI
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble chat-user';
    userBubble.innerText = prompt;
    chatContainer.appendChild(userBubble);
    inputEl.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // 2. Add Loading Indicator
    const botBubble = document.createElement('div');
    botBubble.className = 'chat-bubble chat-bot italic animate-pulse';
    botBubble.innerText = currentLang === 'de' ? 'Überlege...' : 'Thinking...';
    chatContainer.appendChild(botBubble);

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: {
                systemInstruction: `You are an AI medical assistant for the website of Dr. Romana Wass, PhD, a specialist in pulmonary medicine and oncology. 
                Your tone is professional, empathetic, and scientifically accurate but accessible. 
                Answer general questions about lung cancer, precision medicine, and the doctor's areas of expertise.
                CRITICAL: Always include a disclaimer that you are an AI and your answers do not replace a consultation with a human doctor.
                Keep answers concise. Language: ${currentLang === 'de' ? 'German' : 'English'}.`,
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

// --- Global Exposure for HTML ---
(window as any).switchLanguage = switchLanguage;
(window as any).toggleMobileMenu = toggleMobileMenu;
(window as any).toggleModal = toggleModal;
(window as any).toggleAIChat = toggleAIChat;
(window as any).sendAIMessage = sendAIMessage;

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Determine initial language
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

    // AI Input Enter Key
    const aiInput = document.getElementById('ai-input');
    aiInput?.addEventListener('keypress', (e) => {
        if ((e as KeyboardEvent).key === 'Enter') sendAIMessage();
    });

    // Final reveal check
    setTimeout(handleReveal, 500);
});