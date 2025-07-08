import { Scale, FileText, Shield, Users, CreditCard, Clock, Phone, Mail, MapPin, Check, AlertTriangle, Gavel, Star, Award } from "lucide-react";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <Scale className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Clear, fair terms that protect both you and us while we deliver exceptional legal services.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Services Overview */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                        <FileText className="w-8 h-8 text-blue-600 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Court Services</h3>
                        <p className="text-gray-600">Comprehensive court search, document verification and document request services across Ghana.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                        <Shield className="w-8 h-8 text-green-600 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Process</h3>
                        <p className="text-gray-600">Professional-grade security and confidentiality for all your legal documents.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                        <Award className="w-8 h-8 text-purple-600 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Standards</h3>
                        <p className="text-gray-600">Adhering to the highest legal and ethical standards in all our operations.</p>
                    </div>
                </div>

                <div className=" rounded-xl  overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b">
                        <div className="flex items-center space-x-3">
                            <Scale className="w-6 h-6 text-gray-600" />
                            <div>
                                <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
                                <p className="text-gray-700 mt-1">Welcome to DL SVD Services. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 space-y-10">
                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Star className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Our Services</h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                                <p className="text-gray-700 mb-4">DL SVD provides comprehensive legal services tailored to your needs:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Court search services</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Document verification and authentication</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Legal data access and retrieval</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Background checks</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Court document requests</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Priority processing services</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <Users className="w-5 h-5 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Your Responsibilities</h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                                <p className="text-gray-700 mb-4">When using our services, you agree to:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Provide accurate information</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Maintain account security</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Use services lawfully</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Respect others' rights</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Avoid unauthorized access</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">No malicious content</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Comply with all laws</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Pay fees promptly</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Service Availability</h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
                                <p className="text-gray-700 mb-4">While we strive for excellence, we cannot guarantee:</p>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Continuous Access</p>
                                            <p className="text-gray-600">Uninterrupted service availability</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Error-Free Operation</p>
                                            <p className="text-gray-600">Perfect platform performance</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Document Availability</p>
                                            <p className="text-gray-600">All court records will be accessible</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <CreditCard className="w-5 h-5 text-purple-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Fees and Payment</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                                    <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                                        <CreditCard className="w-5 h-5 text-purple-600 mr-2" />
                                        Service Fees
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Transparent pricing structure</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Court search fees</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Document verification charges</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Priority service premiums</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6">
                                    <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                                        <Clock className="w-5 h-5 text-indigo-600 mr-2" />
                                        Payment Terms
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Payment due on completion</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Multiple payment methods</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Late payment charges may apply</span>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-cyan-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Professional Standards</h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg p-6">
                                <p className="text-gray-700 mb-4">We maintain the highest professional standards:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <Shield className="w-4 h-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Strict confidentiality protocols</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Shield className="w-4 h-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Professional legal service standards</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Shield className="w-4 h-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Restricted access protocols</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <Shield className="w-4 h-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Secure document handling</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Shield className="w-4 h-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Legal compliance requirements</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Shield className="w-4 h-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Professional staff training</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-red-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Limitation of Liability</h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6">
                                <p className="text-gray-700 mb-4">To the fullest extent permitted by law, DL SVD Services shall not be liable for:</p>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-red-600 text-sm font-medium">1</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Consequential Damages</p>
                                            <p className="text-gray-600">Indirect, incidental, or consequential damages</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-red-600 text-sm font-medium">2</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Business Losses</p>
                                            <p className="text-gray-600">Loss of profits, data, or business opportunities</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-red-600 text-sm font-medium">3</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">System Issues</p>
                                            <p className="text-gray-600">Technical failures or system downtime</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 p-3 bg-red-100 rounded-lg">
                                    <p className="text-red-800 text-sm font-medium">Our total liability for any claim shall not exceed the amount paid by you for the specific service in question.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                    <Gavel className="w-5 h-5 text-orange-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Governing Law</h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6">
                                <p className="text-gray-700 mb-4">These Terms are governed by the laws of Ghana. Disputes will be resolved through:</p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                            <span className="text-orange-600 text-sm font-medium">1</span>
                                        </div>
                                        <span className="text-gray-700 font-medium">Good faith negotiations</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                            <span className="text-orange-600 text-sm font-medium">2</span>
                                        </div>
                                        <span className="text-gray-700 font-medium">Mediation, if necessary</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                            <span className="text-orange-600 text-sm font-medium">3</span>
                                        </div>
                                        <span className="text-gray-700 font-medium">The competent courts of Ghana</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        
                    </div>
                </div>
            </div>
        </div>
    );
} 