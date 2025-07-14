import { useState, useEffect } from "react";
import { Users, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";

const navigation = [
    { name: "Home", to: "/", isExternal: true },
    { name: "Our Services", to: "#services", isExternal: false },
    { name: "Pricing", to: "/pricing", isExternal: true },
    { name: "Request Form", to: "/requestForm/request", isExternal: true },
];
export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'how-it-works', 'who-can-benefit', 'our-commitment'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        return;
                    }
                }
            }
            setActiveSection('');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
        if (isExternal) {
            // Let the browser handle external navigation
            setMobileMenuOpen(false);
            return;
        }
        
        e.preventDefault();
        
        // Check if we're on the home page
        if (window.location.pathname !== '/') {
            // Navigate to home page first, then scroll to section
            window.location.href = `/${href}`;
            return;
        }
        
        // We're already on home page, just scroll to section
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className="border border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    <Link 
                        to="/" 
                        className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200 flex-col items-center h-full justify-center"
                    >
                       <div className="flex items-center space-x-2 mb-6">                               
                                <span className="text-2xl font-bold"><span className="text-[#32ADE6]">Dennislaw</span> SVD Services</span>
                            </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            item.isExternal ? (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    className={({ isActive }) => 
                                        `text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group ${
                                            isActive ? 'text-blue-600' : ''
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {item.name}
                                            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                                                isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                        </>
                                    )}
                                </NavLink>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.to}
                                    className={`font-medium transition-colors duration-200 relative group ${
                                        activeSection === item.to.replace('#', '') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                                    }`}
                                    onClick={(e) => handleSmoothScroll(e, item.to, item.isExternal)}
                                >
                                    {item.name}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                                        activeSection === item.to.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                                </a>
                            )
                        ))}
                        <button className="customed-bordered-button">
                            <NavLink to="/contact">Contact Us</NavLink>
                        </button>

                       
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in ">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                item.isExternal ? (
                                    <NavLink 
                                        key={item.name}
                                        to={item.to} 
                                        className={({ isActive }) => 
                                            `text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 ${
                                                isActive ? 'text-blue-600 bg-blue-50 px-3 py-2 rounded-md' : ''
                                            }`
                                        }
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </NavLink>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.to}
                                        className={`font-medium transition-colors duration-200 py-2 ${
                                            activeSection === item.to.replace('#', '') ? 'text-blue-600 bg-blue-50 px-3 py-2 rounded-md' : 'text-gray-700 hover:text-blue-600'
                                        }`}
                                        onClick={(e) => handleSmoothScroll(e, item.to, item.isExternal)}
                                    >
                                        {item.name}
                                    </a>
                                )
                            ))}
                            
                            {/* Mobile Action Buttons */}
                            <div className="flex flex-col space-y-3 pt-4 border-t">
                                <button className="customed-bordered-button text-center">
                                    <NavLink to="/contact">Contact Us</NavLink>
                                </button>
                               
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
