import { useState } from "react";
import { Users, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";

const navigation = [
    { name: "Home", to: "/", isExternal: true },
    { name: "Our Services", to: "/#services", isExternal: true },
    { name: "Pricing", to: "/pricing", isExternal: true },
    { name: "Request Form", to: "/requestForm/request", isExternal: true },
];
export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
        if (isExternal) {
            // Let the browser handle external navigation
            setMobileMenuOpen(false);
            return;
        }
        
        e.preventDefault();
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
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className=" font-bold text-xl">DL</span>
                                </div>
                                <span className="text-2xl font-bold">SVD</span>
                            </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            item.isExternal ? (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.to}
                                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                                    onClick={(e) => handleSmoothScroll(e, item.to, item.isExternal)}
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
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
                    <nav className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                item.isExternal ? (
                                    <Link 
                                        key={item.name}
                                        to={item.to} 
                                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.to}
                                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
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
