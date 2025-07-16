import { Check, FileSearch, FileCheck, FileText } from 'lucide-react';
import { NavLink } from 'react-router';
import type { MetaFunction } from 'react-router';

// Meta for the page
export const meta: MetaFunction = () => {
    return [
        { title: "Pricing | DL SVD Services" },
        { name: "description", content: "Professional legal document services pricing." },
    ];
};

const PricingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full "></div>
            <div className="absolute top-20 right-20 w-48 h-48 bg-white/20 rounded-full "></div>
            <div className="absolute bottom-10 left-20 w-24 h-24 bg-white/20 rounded-full "></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/20 rounded-full "></div>
            
            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                        SVD Services Pricing
                    </h1>
                   
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    
                    {/* Due Diligence Search Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300" style={{ backgroundImage: 'url(/app/components/images/pricebg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <FileSearch className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-600 mb-2">Due Diligence Search</h3>
                            <p className="text-gray-600 text-sm">
                                Comprehensive court registry searches across all levels
                            </p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                <span className="text-gray-700">High Court</span>
                                <span className="text-2xl font-bold text-gray-900">400 GH₵</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                <span className="text-gray-700">Court of Appeal</span>
                                <span className="text-2xl font-bold text-gray-900">450 GH₵</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Supreme Court</span>
                                <span className="text-2xl font-bold text-gray-900">450 GH₵</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Others</span>
                                <span className="text-xl font-bold text-gray-900">Available Upon Request</span>
                            </div>
                        </div>

                        <NavLink 
                            to="/requestForm/request?service=court-search"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 text-center block"
                        >
                            Request Search
                        </NavLink>
                    </div>

                    {/* Document Verification Card */}
                    <div style={{ backgroundImage: 'url(/app/components/images/pricebg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <FileCheck className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-600 mb-2">Document Verification</h3>
                            <p className="text-gray-600 text-sm">
                                Professional verification of legal documents and certificates
                            </p>
                        </div>

                        <div className="text-center mb-6">
                            <div className="text-4xl font-bold text-gray-900 mb-2">450 GH₵</div>
                            <p className="text-gray-600">Per Document Verification</p>
                        </div>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center space-x-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-gray-700">Authenticity verification</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-gray-700">Legal compliance check</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-gray-700">Detail verification report</span>
                            </div>
                        </div>

                        <NavLink 
                            to="/requestForm/request?service=document-verification"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 text-center block"
                        >
                            Verify Documents
                        </NavLink>
                    </div>

                    {/* Document Request Card */}
                    <div style={{ backgroundImage: 'url(/app/components/images/pricebg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-600 mb-2">Document Request</h3>
                            <p className="text-gray-600 text-sm">
                               Request for court related documents
                            </p>
                        </div>

                        <div className="text-center mb-6">
                            <div className="text-4xl font-bold text-gray-900 mb-2">Upon Request</div>
                            <p className="text-gray-600">Pricing varies by document type and complexity</p>
                        </div>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center space-x-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-gray-700">Custom quote provided</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-gray-700">Fast turnaround time</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-gray-700">Professional handling</span>
                            </div>
                        </div>

                        <NavLink 
                            to="/requestForm/request?service=document-request"
                            className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 text-center block"
                        >
                            Get Quote
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Background Gradient Circles */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-300/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/30 to-transparent rounded-full blur-3xl"></div>
        </div>
    );
};

export default PricingPage; 