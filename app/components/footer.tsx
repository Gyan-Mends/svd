import { Facebook, X, LinkedinIcon, Instagram } from 'lucide-react';

const Footer = () => {

    return (
        <footer className=" ">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {/* Company Info */}
                <div className="lg:col-span-1">
                    <div className="flex items-center space-x-2 mb-6">
                       
                        <span className="text-2xl font-bold"> <span className="text-blue-600">Dennislaw</span> SVD Services</span>
                    </div>
                    <p className=" mb-6 leading-relaxed">
                        Your trusted partner for comprehensive court search, document verification, and legal data access services across Ghana.
                    </p>
                    <div className="flex space-x-4">
                        <a href='https://web.facebook.com/dennislawnews' className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                            <span className="text-sm font-bold text-white"><Facebook /></span>
                        </a>
                        <a href="https://x.com/dennislawnews" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                            <span className="text-sm font-bold text-white"><X /></span>
                        </a>
                        <a href="https://www.linkedin.com/company/dennis-law-ghana" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300">
                            <span className="text-sm font-bold text-white"><LinkedinIcon /></span>
                        </a>
                        <a href='https://www.instagram.com/dennislawnews/' className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300">
                            <span className="text-sm font-bold text-white"><Instagram /></span>
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
                        <li><a href="/requestForm/request?service=court-search" className=" hover:text-[#32ADE6] transition-colors duration-300">Court Search</a></li>
                        <li><a href="/requestForm/request?service=document-verification" className=" hover:text-[#32ADE6] transition-colors duration-300">Document Verification</a></li>
                        <li><a href="/requestForm/request?service=document-request" className=" hover:text-[#32ADE6] transition-colors duration-300"> Document Request</a></li>
                        
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
                                <p className="">No. 15 Netflix Street,</p>
                                <p className=""> Madina Estate, Off-UPSA Road</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-5 h-5 text-blue-400">
                                <svg fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                            <a 
                                href="https://wa.me/233596252127"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#32ADE6] transition-colors duration-300"
                            >
                                +233 596 252 127
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-5 h-5 text-blue-400">
                                <svg fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <a 
                                href="mailto:dlservices@dennislawgh.com?subject=Inquiry%20from%20SVD%20Website"
                                className="hover:text-[#32ADE6] transition-colors duration-300 cursor-pointer"
                            >
                                dlservices@dennislawgh.com
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-5 h-5 text-blue-400">
                                <svg fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <p className="">Mon - Fri: 9:00 AM - 5:00 PM</p>
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
                        <a href="/privacy-policy" className=" hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
                        <a href="/terms-of-service" className=" hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;