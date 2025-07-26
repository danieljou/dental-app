import React from 'react';
import AnimatedBackground from '../../components/ecommercehome/AnimatedBackground';
import FeaturesSection from '../../components/ecommercehome/FeaturesSection';
import Footer from '../../components/ecommercehome/Footer';
import FloatingDecoration from '../../components/ecommercehome/FloatingDecoration';
import HeroSection from '../../components/ecommercehome/HeroSection';
import NavigationHeader from '../../components/ecommercehome/NavigationHeader';
import NewsletterCTA from '../../components/ecommercehome/NewsletterCTA';
import ProductsPreviewSection from '../../components/ecommercehome/ProductsPreviewSection';
import TestimonialsSection from '../../components/ecommercehome/TestimonialsSection';
import ToastNotifications from '../../components/ecommercehome/ToastNotifications';
import AIShoppingAssistant from '@/components/ecommercehome/AIShoppingAssistant';
import '../../styles/ecommerce-home.css';

const EcommercePage = () => {
    return (
        <div className="font-sans antialiased bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 min-h-screen relative">
            {/* Animated Background */}
            <div className="parallax-bg" />
            {/* Floating Decoration Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <FloatingDecoration />
            </div>
            {/* Main Content */}
            <div className="relative z-10">
                <NavigationHeader />
                <HeroSection />
                <ProductsPreviewSection />
                <FeaturesSection />
                <TestimonialsSection />
                <NewsletterCTA />
                <Footer />
            </div>
            {/* Toast Notifications */}
            <div className="fixed top-20 right-6 z-50 space-y-3">
                <ToastNotifications />
            </div>
            {/* AI Shopping Assistant */}
            <div className="fixed bottom-8 right-8 z-40">
                <AIShoppingAssistant />
            </div>
        </div>
    );
};

export default EcommercePage;