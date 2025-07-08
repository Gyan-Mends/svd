import { Shield, Lock, Eye, Users, FileText, Clock, Phone, Mail, MapPin, Check, Info } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-400 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <Shield className="w-16 h-16 mx-auto mb-4 text-blue-200" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Your privacy is our priority. Learn how we protect and handle your personal information.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Key Points Summary */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                        <Lock className="w-8 h-8 text-blue-600 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Protection</h3>
                        <p className="text-gray-600">Your data is encrypted and stored securely with industry-standard protection measures.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                        <Eye className="w-8 h-8 text-green-600 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Transparency</h3>
                        <p className="text-gray-600">We clearly explain what data we collect, how we use it, and your rights regarding your information.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                        <Users className="w-8 h-8 text-purple-600 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Rights</h3>
                        <p className="text-gray-600">You have full control over your data with rights to access, correct, or delete your information.</p>
                    </div>
                </div>

                <div className=" rounded-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b">
                        <div className="flex items-center space-x-3">
                            <Info className="w-6 h-6 text-blue-600" />
                            <div>
                                <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
                                <p className="text-gray-700 mt-1">At DL SVD Services, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 space-y-10">
                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                                    <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                                        <Users className="w-5 h-5 text-blue-600 mr-2" />
                                        Personal Information
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Name and contact information (email, phone, address)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Country of residence</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Reason for service request</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Documents and files you upload</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Payment information (processed securely)</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                                    <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                                        <Eye className="w-5 h-5 text-purple-600 mr-2" />
                                        Automatically Collected
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>IP address and device information</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Browser type and version</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Pages visited and time spent</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Referral source</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Cookies and tracking technologies</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                                <p className="text-gray-700 mb-4">We use the information we collect to provide you with exceptional legal services:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Provide court search services</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Process service requests</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Verify identity and documents</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Comply with legal requirements</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Improve our services</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Send service updates</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Prevent fraud</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Enhance user experience</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-yellow-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Information Sharing</h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
                                <p className="text-gray-700 mb-4">We may share your information only in specific, necessary circumstances:</p>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-blue-600 text-sm font-medium">1</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Court Systems</p>
                                            <p className="text-gray-600">When performing court searches or document verification</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-blue-600 text-sm font-medium">2</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Legal Compliance</p>
                                            <p className="text-gray-600">To comply with applicable laws and regulations</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-blue-600 text-sm font-medium">3</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Service Providers</p>
                                            <p className="text-gray-600">With trusted third-party providers who assist our operations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                    <Lock className="w-5 h-5 text-red-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Data Security</h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6">
                                <p className="text-gray-700 mb-4">We implement comprehensive security measures to protect your information:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <Shield className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">End-to-end encryption</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Shield className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Secure file storage</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Shield className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Regular security audits</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <Shield className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Access control systems</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Shield className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Staff training programs</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Shield className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">Incident response procedures</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-indigo-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Data Retention</h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                                <p className="text-gray-700 mb-4">We retain your information only as long as necessary:</p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Clock className="w-5 h-5 text-indigo-600" />
                                        <span className="text-gray-700">7 years after service completion (standard retention)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Clock className="w-5 h-5 text-indigo-600" />
                                        <span className="text-gray-700">Longer if required by law or regulation</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Clock className="w-5 h-5 text-indigo-600" />
                                        <span className="text-gray-700">Until disputes are resolved</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                                    <Users className="w-5 h-5 text-teal-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Your Rights</h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6">
                                <p className="text-gray-700 mb-4">You have comprehensive rights regarding your personal information:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium text-gray-800">Access</p>
                                                <p className="text-gray-600 text-sm">Request copies of your data</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium text-gray-800">Correction</p>
                                                <p className="text-gray-600 text-sm">Fix inaccurate information</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium text-gray-800">Deletion</p>
                                                <p className="text-gray-600 text-sm">Request data removal</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium text-gray-800">Portability</p>
                                                <p className="text-gray-600 text-sm">Transfer your data</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium text-gray-800">Objection</p>
                                                <p className="text-gray-600 text-sm">Object to processing</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium text-gray-800">Withdrawal</p>
                                                <p className="text-gray-600 text-sm">Withdraw consent</p>
                                            </div>
                                        </div>
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