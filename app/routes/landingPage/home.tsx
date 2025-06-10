import React, { useEffect, useState, useRef } from 'react';
import Navigation from '../../components/navigation';
import image from '~/components/images/image1.avif';
import image2 from '~/components/images/image2.avif';
import image3 from '~/components/images/image3.avif';
import { ArrowRight, Settings, Target, FileCheck, HandHeart, Shield, Clock, MessageCircle, Phone, Mail, Smartphone } from 'lucide-react';
import type { MetaFunction } from 'react-router';

// meta for the page
export const meta: MetaFunction = () => {
    return [
        { title: "DL SVD | Home" },
        { name: "description", content: "DL SVD is a platform that allows you to search for court documents and verify them." },
        { name: "keywords", content: "DL SVD, court documents, verification, search, legal technology" },
        { name: "author", content: "DL SVD" },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "og:title", content: "DL SVD | Home" },
        { name: "og:description", content: "DL SVD is a platform that allows you to search for court documents and verify them." },
    ];
};

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

    // Background images for slideshow - you can replace these with your actual images
    const backgroundImages = [
        image, // Your existing image
        image2, // Placeholder - replace with second image
        image3, // Placeholder - replace with third image
    ];

    const services = [
        {
            image: image,
            title: 'Court Search',
            link: '/requestForm/request?service=court-search',
        },
        {
            image: image2,
            title: 'Request for Court Documents',
            link: '/requestForm/request?service=document-request',
        },
        {
            image: image3,
            title: 'Verify of Court Documents',
            link: '/requestForm/request?service=document-verification',
        },
    ]

    const whyChooseUs = [
        {
            icon: <Settings className="w-16 h-16 text-blue-500" />,
            title: 'Efficiency',
            description: 'We simplify the process of searching, verifying, and retrieving court documents, saving you time.',
        },
        {
            icon: <Target className="w-16 h-16 text-blue-500" />,
            title: 'Accuracy',
            description: 'Our direct access to court records ensures reliable and verified information.',
        },
        {
            icon: <FileCheck className="w-16 h-16 text-blue-500" />,
            title: 'Compliance',
            description: 'Strengthen due diligence efforts with regulatory-compliant services.',
        },
        {
            icon: <HandHeart className="w-16 h-16 text-blue-500" />,
            title: 'Convenience',
            description: 'We simplify the process of searching, verifying, and retrieving court documents.',
        },
        {
            icon: <Shield className="w-16 h-16 text-blue-500" />,
            title: 'Secure Digital Access',
            description: 'We simplify the process of searching, verifying, and retrieving court documents.',
        },
        {
            icon: <Clock className="w-16 h-16 text-blue-500" />,
            title: 'Flexible Payment Options',
            description: 'We simplify the process of searching, verifying, and retrieving court documents.',
        }
    ]

    const howItWorksSteps = [
        {
            number: '1',
            title: 'Make a Request',
            description: '• Contact us via WhatsApp, phone call, email, or SMS.\n• Provide details of your search, document request, or verification need.',
            icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
            position: 'bottom-left'
        },
        {
            number: '2',
            title: 'Evaluation & Invoice Generation',
            description: '• Our team will assess your request and provide an invoice for payment.',
            icon: <FileCheck className="w-8 h-8 text-blue-500" />,
            position: 'top-left'
        },
        {
            number: '3',
            title: 'Payment & Processing',
            description: '• Our team will assess your request and provide an invoice for payment.',
            icon: <Smartphone className="w-8 h-8 text-blue-500" />,
            position: 'bottom-center'
        },
        {
            number: '4',
            title: 'Receive Your Results',
            description: '• Get your verified court documents or search results via email, WhatsApp, or our online platform.',
            icon: <Mail className="w-8 h-8 text-blue-500" />,
            position: 'top-right'
        }
    ]

    const beneficiaries = [

        {
            title: 'Banks & Financial ',
            subtitle: 'Institutions',
            image: image2,
            bgColor: 'bg-purple-100',
        },
        {
            title: 'Insurance Companies',
            image: image3,
            bgColor: 'bg-yellow-100',
        },
        {
            title: 'Researchers & Academics',
            image: image,
            bgColor: 'bg-pink-100',
        }
    ]

    const commitments = [
        {
            title: 'Direct Court Access & Legal Expertise',
            description: 'We work closely with the court registrars and the judicial service of Ghana, ensuring legitimate and certified access to court-related information.'
        },
        {
            title: 'Technology-Driven Efficiency',
            description: 'Our digital-first approach ensures seamless, lightning-fast processes, allowing companies to request, access, and manage court documents efficiently.'
        },
        {
            title: 'Fast Turnaround & Priority Processing',
            description: 'We understand urgency in legal matters—which is why we prioritize timely delivery and provide same-day service for urgent requests.'
        },
        {
            title: 'Data Security & Confidentiality',
            description: 'All requests and documents are securely processed to guarantee confidentiality and data protection laws.'
        }
    ]

    // Refs for scroll animations
    const servicesRef = useRef<HTMLDivElement>(null);
    const servicesTitleRef = useRef<HTMLHeadingElement>(null);
    const servicesDescRef = useRef<HTMLDivElement>(null);
    const serviceCardsRef = useRef<HTMLDivElement>(null);

    // Why Choose Us refs
    const whyChooseUsRef = useRef<HTMLDivElement>(null);
    const whyChooseUsTitleRef = useRef<HTMLHeadingElement>(null);
    const whyChooseUsCardsRef = useRef<HTMLDivElement>(null);

    // How It Works refs
    const howItWorksRef = useRef<HTMLDivElement>(null);
    const howItWorksTitleRef = useRef<HTMLHeadingElement>(null);
    const howItWorksStepsRef = useRef<HTMLDivElement>(null);

    // Who Can Benefit refs
    const whoBenefitRef = useRef<HTMLDivElement>(null);
    const whoBenefitTitleRef = useRef<HTMLHeadingElement>(null);
    const whoBenefitDescRef = useRef<HTMLDivElement>(null);
    const whoBenefitCardsRef = useRef<HTMLDivElement>(null);

    // Our Commitment refs
    const commitmentRef = useRef<HTMLDivElement>(null);
    const commitmentTitleRef = useRef<HTMLHeadingElement>(null);
    const commitmentCardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Trigger animations after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Auto-advance slideshow every 8 seconds
        const slideTimer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
        }, 8000);

        return () => clearInterval(slideTimer);
    }, [backgroundImages.length]);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const elementId = entry.target.getAttribute('data-scroll-id');
                    if (elementId) {
                        setVisibleElements(prev => new Set([...prev, elementId]));
                    }
                }
            });
        }, observerOptions);

        // Observe elements
        const elementsToObserve = [
            { ref: servicesTitleRef, id: 'services-title' },
            { ref: servicesDescRef, id: 'services-desc' },
            { ref: serviceCardsRef, id: 'service-cards' },
            { ref: whyChooseUsTitleRef, id: 'why-choose-us-title' },
            { ref: whyChooseUsCardsRef, id: 'why-choose-us-cards' },
            { ref: howItWorksTitleRef, id: 'how-it-works-title' },
            { ref: howItWorksStepsRef, id: 'how-it-works-steps' },
            { ref: whoBenefitTitleRef, id: 'who-benefit-title' },
            { ref: whoBenefitDescRef, id: 'who-benefit-desc' },
            { ref: whoBenefitCardsRef, id: 'who-benefit-cards' },
            { ref: commitmentTitleRef, id: 'commitment-title' },
            { ref: commitmentCardsRef, id: 'commitment-cards' }
        ];

        elementsToObserve.forEach(({ ref, id }) => {
            if (ref.current) {
                ref.current.setAttribute('data-scroll-id', id);
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Helper function to check if element is visible
    const isElementVisible = (elementId: string) => visibleElements.has(elementId);

    return (
        <div className="flex flex-col ">
            {/* Hero Section */}
            <div className="min-h-screen bg-gradient-to-r from-[#840243] to-[#D9D9D9] relative overflow-hidden">
                {/* Background Image Slideshow */}
                <div className="absolute inset-0">
                    {backgroundImages.map((bg, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                                ? 'opacity-40 scale-100'
                                : 'opacity-0 scale-105'
                                }`}
                        >
                            <img
                                src={bg}
                                alt={`Legal technology workspace ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Animated Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#840243]/70 to-[#D9D9D9]/30 animate-pulse-slow"></div>

                {/* Floating Elements for Added Animation */}


                {/* Hero Content */}
                <section id="home" className="relative z-20 min-h-screen flex items-center">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-4xl">
                            {/* Main Heading with Enhanced Animation */}
                            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight hero-text-shadow transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
                                }`}>
                                <span className={`inline-block transition-all duration-1000 delay-100 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                                    Your Trusted Partner
                                </span><br />
                                <span className={`inline-block transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                                    for Court Searches &
                                </span><br />
                                <span className={`inline-block transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                                    Document Verification
                                </span>
                            </h1>

                            {/* Subtitle with Typewriter Effect */}
                            <p className={`text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}>
                                From your home to your car, your business to your travels, we've got you covered.
                            </p>

                            {/* CTA Buttons with Staggered Animation */}
                            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}>
                                <a href="/requestForm/request" className={`customed-button text-md py-2 hover:bg-[#2a9bd4] hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 ${isVisible ? 'animate-bounce-in' : ''} text-center`}>
                                    Request Court Search
                                    {/* icon */}
                                </a>
                                <a href="/pricing" className={`customed-bordered-button !text-md py-2 border-white transform hover:scale-105 transition-all duration-300 !text-white px-8 py-4  delay-200 ${isVisible ? 'animate-slide-in-right' : ''} text-center`}>
                                    View Pricing
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Enhanced Scroll Indicator */}
                    <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="animate-bounce-slow">
                            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover:border-blue-400 transition-colors duration-300">
                                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slideshow Indicators */}
                <div className="absolute bottom-20 right-8 z-30 flex flex-col gap-2">
                    {backgroundImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-white scale-125'
                                : 'bg-white/40 hover:bg-white/70'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Services Section with Scroll Animations */}
            <div className='bg-gradient-to-r from-blue-50 to-white min-h-screen'>

                <section id="services" ref={servicesRef} className="container mx-auto px-4 py-8 md:py-16 flex flex-col gap-8 md:gap-12">
                    {/* Services Title with Scroll Animation */}
                    <h1
                        ref={servicesTitleRef}
                        className={`text-3xl md:text-5xl customed-text-color font-bold text-center transition-all duration-1000 transform ${isElementVisible('services-title')
                            ? 'translate-y-0 opacity-100 scale-100'
                            : 'translate-y-20 opacity-0 scale-95'
                            }`}
                    >
                        Our Services
                    </h1>

                    {/* Services Description with Scroll Animation */}
                    <div
                        ref={servicesDescRef}
                        className={`text-center transition-all duration-1000 delay-200 transform ${isElementVisible('services-desc')
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-20 opacity-0'
                            }`}
                    >
                        <p className="text-md md:text-md text-gray-600 ">
                            We offer a Subscription-Based and On-Demand Search, Document, and Verification (SVD) service
                        </p>
                        <p className="text-md md:text-md text-gray-600">
                            to help businesses and individuals access, verify, and request court-related documents efficiently.
                        </p>
                    </div>

                    {/* Service Cards with Staggered Scroll Animation */}
                    <div
                        ref={serviceCardsRef}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`flex flex-col gap-3 md:gap-4 items-center justify-center transform transition-all duration-1000 ${isElementVisible('service-cards')
                                    ? 'translate-y-0 opacity-100 scale-100'
                                    : 'translate-y-20 opacity-0 scale-95'
                                    }`}
                                style={{
                                    transitionDelay: isElementVisible('service-cards') ? `${index * 200}ms` : '0ms'
                                }}
                            >
                                <div className="relative group overflow-hidden rounded-lg w-full">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-[30vh] md:h-[50vh] rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Enhanced Button with Hover Effects */}
                                <a href={service.link} className="customed-button w-full text-sm md:text-base py-2 flex justify-between items-center group hover:shadow-xl transition-all duration-300">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                                        {service.title}
                                    </span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Why Choose DL SVD Section with Scroll Animations */}
            <section id="about" ref={whyChooseUsRef} className="container mx-auto px-4 py-12 md:py-40 flex flex-col gap-8 md:gap-12">
                {/* Why Choose Us Title with Scroll Animation */}
                <h1
                    ref={whyChooseUsTitleRef}
                    className={`text-3xl md:text-5xl font-bold customed-text-color text-center transition-all duration-1000 transform ${isElementVisible('why-choose-us-title')
                        ? 'translate-y-0 opacity-100 scale-100'
                        : 'translate-y-20 opacity-0 scale-95'
                        }`}
                >
                    Why Choose DL SVD
                </h1>

                {/* Why Choose Us Cards with Staggered Scroll Animation */}
                <div
                    ref={whyChooseUsCardsRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {whyChooseUs.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col gap-4 md:gap-6 items-center justify-center text-center p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-1000 transform ${isElementVisible('why-choose-us-cards')
                                ? 'translate-y-0 opacity-100 scale-100'
                                : 'translate-y-20 opacity-0 scale-95'
                                }`}
                            style={{
                                transitionDelay: isElementVisible('why-choose-us-cards') ? `${index * 150}ms` : '0ms'
                            }}
                        >
                            {/* Icon with Hover Animation */}
                            <div className="transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                                {item.icon}
                            </div>

                            {/* Title and Description */}
                            <div className="flex flex-col gap-3 md:gap-4 items-center justify-center">
                                <h3 className="font-bold text-xl md:text-3xl text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="text-center text-gray-600 text-base md:text-lg leading-relaxed max-w-sm">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works Section with Scroll Animations */}
            <section id="how-it-works" ref={howItWorksRef} className="relative py-8 md:py-20 px-4 md:px-10 overflow-hidden">
                {/* Large Blue Circular Background Element - Responsive */}
                <div className="absolute top-0 mt-10 md:mt-20 right-0 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-[#269DD4] rounded-full opacity-20 md:opacity-30 transform translate-x-1/4 -translate-y-1/4"></div>

                <div className="container mx-auto relative z-10">
                    {/* How It Works Title with Scroll Animation - Responsive */}
                    <h1
                        ref={howItWorksTitleRef}
                        className={`text-3xl md:text-5xl font-bold customed-text-color mb-8 md:mb-16 text-center md:text-left transition-all duration-1000 transform ${isElementVisible('how-it-works-title')
                            ? 'translate-y-0 opacity-100 scale-100'
                            : 'translate-y-20 opacity-0 scale-95'
                            }`}
                    >
                        How It Works
                    </h1>

                    {/* Steps Container - Responsive Layout */}
                    <div
                        ref={howItWorksStepsRef}
                        className="relative min-h-[500px] md:min-h-[700px] w-full"
                    >
                        {/* Animated Curved Path - Responsive */}
                        <svg
                            className={`absolute top-0 left-0 w-full h-1/3 md:h-1/2 transition-all duration-2000 ${isElementVisible('how-it-works-steps') ? 'opacity-100' : 'opacity-0'}`}
                            viewBox="0 0 1000 300"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M100,250 Q300,150 500,180 Q700,210 900,80"
                                stroke="url(#gradient)"
                                strokeWidth="4"
                                fill="none"
                                strokeDasharray="15,8"
                                className={`${isElementVisible('how-it-works-steps') ? 'animate-pulse' : ''} md:stroke-[6]`}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#EC4899" />
                                    <stop offset="100%" stopColor="#3B82F6" />
                                </linearGradient>
                            </defs>

                            {/* Animated Dots on the Path - Responsive */}
                            <circle cx="100" cy="250" r="4" fill="url(#gradient)" className={`${isElementVisible('how-it-works-steps') ? 'animate-pulse' : ''} md:r-6`}>
                                <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="350" cy="165" r="4" fill="url(#gradient)" className={`${isElementVisible('how-it-works-steps') ? 'animate-pulse' : ''} md:r-6`}>
                                <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" begin="0.5s" />
                            </circle>
                            <circle cx="650" cy="195" r="4" fill="url(#gradient)" className={`${isElementVisible('how-it-works-steps') ? 'animate-pulse' : ''} md:r-6`}>
                                <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" begin="1s" />
                            </circle>
                            <circle cx="900" cy="80" r="4" fill="url(#gradient)" className={`${isElementVisible('how-it-works-steps') ? 'animate-pulse' : ''} md:r-6`}>
                                <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" begin="1.5s" />
                            </circle>
                        </svg>

                        {/* Mobile Layout - Stacked */}
                        <div className="block md:hidden space-y-8 mt-20">
                            {/* Step 1 Mobile */}
                            <div className={`w-full transition-all duration-1000 transform ${isElementVisible('how-it-works-steps')
                                ? 'translate-y-0 opacity-100 scale-100'
                                : 'translate-y-20 opacity-0 scale-95'
                                }`}>
                                <div className="p-4 transition-all duration-300">
                                    <div className="text-center">
                                        <p className='text-6xl font-bold text-gray-400 mb-4'>1</p>
                                        <h3 className="font-bold text-xl text-gray-800 mb-3">
                                            Make a Request
                                        </h3>
                                        <div className="text-gray-600 text-base leading-relaxed">
                                            <p className="mb-2">• Contact us via WhatsApp, phone call, email, or SMS.</p>
                                            <p className="mb-2">• Provide details of your search, document request, or verification need.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 Mobile */}
                            <div className={`w-full transition-all duration-1000 transform ${isElementVisible('how-it-works-steps')
                                ? 'translate-y-0 opacity-100 scale-100'
                                : 'translate-y-20 opacity-0 scale-95'
                                }`}>
                                <div className="p-4 transition-all duration-300">
                                    <div className="text-center">
                                        <p className='text-6xl font-bold text-gray-400 mb-4'>2</p>
                                        <h3 className="font-bold text-xl text-gray-800 mb-3">
                                            Evaluation & Invoice Generation
                                        </h3>
                                        <div className="text-gray-600 text-base leading-relaxed">
                                            <p className="mb-2">• Our team will assess your request and provide an invoice for payment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 Mobile */}
                            <div className={`w-full transition-all duration-1000 transform ${isElementVisible('how-it-works-steps')
                                ? 'translate-y-0 opacity-100 scale-100'
                                : 'translate-y-20 opacity-0 scale-95'
                                }`}>
                                <div className="p-4 transition-all duration-300">
                                    <div className="text-center">
                                        <p className='text-6xl font-bold text-gray-400 mb-4'>3</p>
                                        <h3 className="font-bold text-xl text-gray-800 mb-3">
                                            Payment & Processing
                                        </h3>
                                        <div className="text-gray-600 text-base leading-relaxed">
                                            <p className="mb-2">• Our team will assess your request and provide an invoice for payment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 Mobile */}
                            <div className={`w-full transition-all duration-1000 transform ${isElementVisible('how-it-works-steps')
                                ? 'translate-y-0 opacity-100 scale-100'
                                : 'translate-y-20 opacity-0 scale-95'
                                }`}>
                                <div className="p-4 transition-all duration-300">
                                    <div className="text-center">
                                        <p className='text-6xl font-bold text-gray-400 mb-4'>4</p>
                                        <h3 className="font-bold text-xl text-gray-800 mb-3">
                                            Receive Your Results
                                        </h3>
                                        <div className="text-gray-600 text-base leading-relaxed">
                                            <p className="mb-2">• Get your verified court documents or search results via email, WhatsApp, or our online platform.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop/Tablet Layout - Positioned */}
                        <div className="hidden md:block">
                            {/* Step 1 - Bottom Left (under the line) */}
                            <div
                                className={`absolute top-40 lg:top-60 left-0 w-64 lg:w-80 transition-all duration-1000 transform ${isElementVisible('how-it-works-steps')
                                    ? 'translate-y-0 opacity-100 scale-100'
                                    : 'translate-y-20 opacity-0 scale-95'
                                    }`}
                                style={{
                                    transitionDelay: isElementVisible('how-it-works-steps') ? '0ms' : '0ms'
                                }}
                            >
                                <div className="mt-10 lg:mt-20 p-4 lg:p-6 transition-all duration-300">
                                    <div className="items-start gap-4">
                                        <p className='text-6xl lg:text-8xl text-center font-bold text-gray-400 mb-4'>1</p>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-xl lg:text-2xl text-gray-800 mb-3">
                                                Make a Request
                                            </h3>
                                            <div className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                                <p className="mb-2">• Contact us via WhatsApp, phone call, email, or SMS.</p>
                                                <p className="mb-2">• Provide details of your search, document request, or verification need.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 - Top Left (under the line) */}
                            <div
                                className={`absolute top-24 lg:top-40 left-1/4 w-64 lg:w-80 transition-all duration-1000 transform ${isElementVisible('how-it-works-steps')
                                    ? 'translate-y-0 opacity-100 scale-100'
                                    : 'translate-y-20 opacity-0 scale-95'
                                    }`}
                                style={{
                                    transitionDelay: isElementVisible('how-it-works-steps') ? '300ms' : '0ms'
                                }}
                            >
                                <div className="mt-6 lg:mt-10 p-4 lg:p-6 transition-all duration-300">
                                    <div className="items-start gap-4">
                                        <p className='text-6xl lg:text-8xl text-center font-bold text-gray-400 mb-4'>2</p>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-xl lg:text-2xl text-gray-800 mb-3">
                                                Evaluation & Invoice Generation
                                            </h3>
                                            <div className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                                <p className="mb-2">• Our team will assess your request and provide an invoice for payment.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 - Bottom Center (under the line) */}
                            <div
                                className={`absolute top-32 lg:top-48 right-1/4 w-64 lg:w-80 transition-all duration-1000 transform ${isElementVisible('how-it-works-steps')
                                    ? 'translate-y-0 opacity-100 scale-100'
                                    : 'translate-y-20 opacity-0 scale-95'
                                    }`}
                                style={{
                                    transitionDelay: isElementVisible('how-it-works-steps') ? '600ms' : '0ms'
                                }}
                            >
                                <div className="mt-6 lg:mt-10 p-4 lg:p-6 transition-all duration-300">
                                    <div className="items-start gap-4">
                                        <p className='text-6xl lg:text-8xl text-center font-bold text-gray-400 mb-4'>3</p>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-xl lg:text-2xl text-gray-800 mb-3">
                                                Payment & Processing
                                            </h3>
                                            <div className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                                <p className="mb-2">• Our team will assess your request and provide an invoice for payment.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 - Top Right (under the line, within blue circle area) */}
                            <div
                                className={`absolute top-20 lg:top-32 right-0 w-64 lg:w-80 transition-all duration-1000 transform ${isElementVisible('how-it-works-steps')
                                    ? 'translate-y-0 opacity-100 scale-100'
                                    : 'translate-y-20 opacity-0 scale-95'
                                    }`}
                                style={{
                                    transitionDelay: isElementVisible('how-it-works-steps') ? '900ms' : '0ms'
                                }}
                            >
                                <div className="mt-6 lg:mt-10 p-4 lg:p-6 transition-all duration-300">
                                    <div className="items-start gap-4">
                                        <p className='text-6xl lg:text-8xl text-center font-bold text-gray-400 mb-4'>4</p>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-xl lg:text-2xl text-gray-800 mb-3">
                                                Receive Your Results
                                            </h3>
                                            <div className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                                <p className="mb-2">• Get your verified court documents or search results via email, WhatsApp, or our online platform.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Can Benefit Section with Scroll Animations - Fixed Mobile Layout */}
            <section id="who-can-benefit" ref={whoBenefitRef} className="container mx-auto px-4 py-16 md:py-40 min-h-screen flex flex-col gap-12 md:gap-40">

                <div className='flex flex-col lg:flex-row gap-12 lg:gap-80 items-center'>
                    <div
                        className={`bg-primary-100 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center hover:shadow-lg w-full lg:w-[30vw] transition-all duration-1000 transform ${isElementVisible('who-benefit-cards')
                            ? 'translate-y-0 opacity-100 scale-100'
                            : 'translate-y-20 opacity-0 scale-95'
                            }`}
                    >
                        {/* Circular Image */}
                        <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6 overflow-hidden rounded-full bg-white shadow-md">
                            <img
                                src={image2}
                                alt="Banks & Financial Institutions"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-lg md:text-2xl text-gray-800 mb-3 text-center">
                            Law Firm & Legal 
                        </h3>
                        <h3 className="font-bold text-lg md:text-2xl text-gray-800 mb-3 text-center">
                        Department
                        </h3>
                    </div>
                    
                    <div className='flex justify-center items-center w-full lg:w-auto'>
                        <div className='flex flex-col gap-4 text-center lg:text-left'>
                            <h1
                                ref={whoBenefitTitleRef}
                                className={`text-3xl md:text-5xl font-bold customed-text-color transition-all duration-1000 transform ${isElementVisible('who-benefit-title')
                                    ? 'translate-y-0 opacity-100 scale-100'
                                    : 'translate-y-20 opacity-0 scale-95'
                                    }`}
                            >
                                Who can Benefit?
                            </h1>

                            {/* Description with Scroll Animation */}
                            <div
                                ref={whoBenefitDescRef}
                                className={`max-w-2xl transition-all duration-1000 delay-200 transform ${isElementVisible('who-benefit-desc')
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-20 opacity-0'
                                    }`}
                            >
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    We offer a Subscription-Based and On-Demand Search, Document, and Verification (SVD) service
                                    to help businesses and individuals access, verify, and request court-related documents efficiently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Beneficiary Cards with Staggered Scroll Animation */}
                <div
                    ref={whoBenefitCardsRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {beneficiaries.map((beneficiary, index) => (
                        <div
                            key={index}
                            className={`${beneficiary.bgColor} rounded-2xl p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-1000 transform ${isElementVisible('who-benefit-cards')
                                ? 'translate-y-0 opacity-100 scale-100'
                                : 'translate-y-20 opacity-0 scale-95'
                                }`}
                            style={{
                                transitionDelay: isElementVisible('who-benefit-cards') ? `${index * 200}ms` : '0ms'
                            }}
                        >
                            {/* Circular Image */}
                            <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6 overflow-hidden rounded-full bg-white shadow-md">
                                <img
                                    src={beneficiary.image}
                                    alt={beneficiary.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-3">
                                {beneficiary.title}
                            </h3>

                            {/* Description */}
                            <p className="font-bold text-lg md:text-xl text-gray-800 mb-3">
                                {beneficiary.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Commitment to Excellence Section with Scroll Animations - Fixed Mobile Layout */}
            <section id="our-commitment" ref={commitmentRef} className="relative py-16 px-4 min-h-screen bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto flex flex-col gap-12">
                    {/* Our Commitment Title with Scroll Animation */}
                    <h1 
                        ref={commitmentTitleRef}
                        className={`text-3xl md:text-5xl font-bold mb-8 md:mb-20 customed-text-color text-center transition-all duration-1000 transform ${isElementVisible('commitment-title')
                            ? 'translate-y-0 opacity-100 scale-100' 
                            : 'translate-y-20 opacity-0 scale-95'
                        }`}
                    >
                        OUR COMMITMENT<br />
                        <span className="customed-text-color">TO EXCELLENCE</span>
                    </h1>

                    {/* Commitment Cards - Fixed Mobile Layout */}
                    <div 
                        ref={commitmentCardsRef}
                        className="w-full max-w-7xl mx-auto"
                    >
                        {/* Mobile Layout - Stacked */}
                        <div className="md:hidden space-y-8">
                            {commitments.map((commitment, index) => (
                                <div 
                                    key={index}
                                    className={`flex flex-col gap-4 p-4 transition-all duration-1000 transform ${isElementVisible('commitment-cards')
                                        ? 'translate-y-0 opacity-100 scale-100'
                                        : 'translate-y-20 opacity-0 scale-95'
                                    }`}
                                    style={{
                                        transitionDelay: isElementVisible('commitment-cards') ? `${index * 200}ms` : '0ms'
                                    }}
                                >
                                    <h3 className="text-xl font-bold text-[#32ADE6] leading-tight">
                                        {commitment.title}
                                    </h3>
                                    <p className="text-gray-600 text-base leading-relaxed">
                                        {commitment.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Layout - Two Columns with Staggered Positioning */}
                        <div className="hidden md:flex justify-between gap-8 lg:gap-40 px-4 relative">
                            {/* Left Column */}
                            <div className="flex flex-col gap-20 lg:gap-32 w-1/2">
                                <div 
                                    className={`flex flex-col gap-4 transition-all duration-1000 transform ${isElementVisible('commitment-cards')
                                        ? 'translate-y-0 opacity-100 scale-100'
                                        : 'translate-y-20 opacity-0 scale-95'
                                    }`}
                                    style={{
                                        transitionDelay: isElementVisible('commitment-cards') ? '0ms' : '0ms'
                                    }}
                                >
                                    <h3 className="text-2xl lg:text-4xl font-bold text-[#32ADE6] leading-tight">
                                        Direct Court Access &<br />
                                        Legal Expertise
                                    </h3>
                                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                        We work closely with the court registrars and the judicial service of Ghana, ensuring legitimate and certified access to court-related information.
                                    </p>
                                </div>

                                <div 
                                    className={`flex flex-col gap-4 transition-all duration-1000 transform ${isElementVisible('commitment-cards')
                                        ? 'translate-y-0 opacity-100 scale-100'
                                        : 'translate-y-20 opacity-0 scale-95'
                                    }`}
                                    style={{
                                        transitionDelay: isElementVisible('commitment-cards') ? '400ms' : '0ms'
                                    }}
                                >
                                    <h3 className="text-2xl lg:text-4xl font-bold text-[#32ADE6] leading-tight">
                                        Fast Turnaround &<br />
                                        Priority Processing
                                    </h3>
                                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                        We understand urgency in legal matters—which is why we prioritize timely delivery and provide same-day service for urgent requests.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column - Offset */}
                            <div className="flex flex-col gap-20 lg:gap-32 w-1/2 mt-16 lg:mt-32">
                                <div 
                                    className={`flex flex-col gap-4 transition-all duration-1000 transform ${isElementVisible('commitment-cards')
                                        ? 'translate-y-0 opacity-100 scale-100'
                                        : 'translate-y-20 opacity-0 scale-95'
                                    }`}
                                    style={{
                                        transitionDelay: isElementVisible('commitment-cards') ? '200ms' : '0ms'
                                    }}
                                >
                                    <h3 className="text-2xl lg:text-4xl font-bold text-[#32ADE6] leading-tight">
                                        Technology-Driven<br />
                                        Efficiency
                                    </h3>
                                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                        Our digital-first approach ensures seamless, lightning-fast processes, allowing companies to request, access, and manage court documents efficiently.
                                    </p>
                                </div>

                                <div 
                                    className={`flex flex-col gap-4 transition-all duration-1000 transform ${isElementVisible('commitment-cards')
                                        ? 'translate-y-0 opacity-100 scale-100'
                                        : 'translate-y-20 opacity-0 scale-95'
                                    }`}
                                    style={{
                                        transitionDelay: isElementVisible('commitment-cards') ? '600ms' : '0ms'
                                    }}
                                >
                                    <h3 className="text-2xl lg:text-4xl font-bold text-[#32ADE6] leading-tight">
                                        Data Security &<br />
                                        Confidentiality
                                    </h3>
                                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                        All requests and documents are securely processed to guarantee confidentiality and data protection laws.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className=" ">
                {/* Main Footer Content */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className=" font-bold text-xl">DL</span>
                                </div>
                                <span className="text-2xl font-bold">SVD</span>
                            </div>
                            <p className=" mb-6 leading-relaxed">
                                Your trusted partner for comprehensive court search, document verification, and legal data access services across Ghana.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                                    <span className="text-sm font-bold text-white">f</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                                    <span className="text-sm font-bold text-white">t</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300">
                                    <span className="text-sm font-bold text-white">in</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300">
                                    <span className="text-sm font-bold text-white">ig</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><a href="#home" className=" hover:[#32ADE6] transition-colors duration-300">Home</a></li>
                                <li><a href="#services" className=" hover:[#32ADE6] transition-colors duration-300">Our Services</a></li>
                                <li><a href="#about" className=" hover:[#32ADE6] transition-colors duration-300">Why Choose Us</a></li>
                                <li><a href="#how-it-works" className=" hover:[#32ADE6] transition-colors duration-300">How It Works</a></li>
                                <li><a href="#who-can-benefit" className=" hover:[#32ADE6] transition-colors duration-300">Who Can Benefit</a></li>
                                <li><a href="#our-commitment" className=" hover:text-white transition-colors duration-300">Our Commitment</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">Our Services</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className=" hover:[#32ADE6] transition-colors duration-300">Court Search</a></li>
                                <li><a href="#" className=" hover:[#32ADE6] transition-colors duration-300">Document Verification</a></li>
                                <li><a href="#" className=" hover:[#32ADE6] transition-colors duration-300">Legal Data Access</a></li>
                                <li><a href="#" className=" hover:[#32ADE6] transition-colors duration-300">Background Checks</a></li>
                                <li><a href="#" className=" hover:[#32ADE6] transition-colors duration-300">Compliance Services</a></li>
                                <li><a href="#" className=" hover:[#32ADE6] transition-colors duration-300">Priority Processing</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-5 h-5 mt-1 text-blue-400">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="">123 Legal District</p>
                                        <p className="">Accra, Ghana</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-5 h-5 text-blue-400">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <p className="">+233 XX XXX XXXX</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-5 h-5 text-blue-400">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <p className="">info@dlsvd.com</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-5 h-5 text-blue-400">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="">Mon - Fri: 8:00 AM - 6:00 PM</p>
                                        <p className="">Sat: 9:00 AM - 2:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-800">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-gray-400 text-sm">
                                © 2024 DL SVD. All rights reserved.
                            </div>
                            <div className="flex space-x-6 text-sm">
                                <a href="#" className=" hover:text-white transition-colors duration-300">Privacy Policy</a>
                                <a href="#" className=" hover:text-white transition-colors duration-300">Terms of Service</a>
                                <a href="#" className=" hover:text-white transition-colors duration-300">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;