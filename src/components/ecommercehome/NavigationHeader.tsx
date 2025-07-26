"use client";
import React, { useState } from 'react';
import VoiceSearchModal from '../product/VoiceSearchModal';

const NavigationHeader = () => {
    const [voiceOpen, setVoiceOpen] = useState(false);
    return (
        <>
            <header className="backdrop-blur sticky top-0 z-30 shadow-card animate-slide-down">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <div className="flex items-center group">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300 group-hover:scale-110">
                                    <i className="fas fa-gem text-white text-xl animate-float"></i>
                                </div>
                                <h1 className="ml-4 text-3xl font-black gradient-text">
                                    LUXE Store
                                </h1>
                            </div>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="index.html" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-all duration-300 hover:scale-105 font-medium">Accueil</a>
                            <a href="./product.html" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-all duration-300 hover:scale-105 font-medium">Produits</a>
                            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-all duration-300 hover:scale-105 font-medium">À propos</a>
                            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-all duration-300 hover:scale-105 font-medium">Contact</a>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <button className="interactive-btn p-3 text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-2xl transition-all duration-300 hover:scale-110">
                                <i className="fas fa-search"></i>
                            </button>
                            {/* Voice Search Button */}
                            <button className="interactive-btn p-3 text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-2xl transition-all duration-300 hover:scale-110" aria-label="Recherche vocale" onClick={() => setVoiceOpen(true)}>
                                <i className="fas fa-microphone"></i>
                            </button>
                            <button className="interactive-btn relative p-3 text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-2xl transition-all duration-300 hover:scale-110">
                                <i className="fas fa-shopping-bag"></i>
                                <span className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs rounded-full flex items-center justify-center animate-bounce-soft shadow-glow">0</span>
                            </button>
                            <button className="interactive-btn px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105 shadow-glow font-semibold">
                                Connexion
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {voiceOpen && <VoiceSearchModal open={voiceOpen} setOpen={setVoiceOpen} />}
        </>
    );
};

export default NavigationHeader;