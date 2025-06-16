import { Check, Star } from 'lucide-react';

const PricingPage = () => {
    const pricingPlans = [
        {
            name: "Due Diligence Search",
            subtitle: "Comprehensive court registry  searches across all levels",
          
            features: [
               {
                name: "High Court Per Registry =  ",
                price: " 400 GHC"
               },
               {
                name: "Court of Appeal = ",
                price: " 450 GHC"
               },
               {    
                name: "Supreme Court = ",
                price: " 450 GHC"
               },
               {    
                name: "Others = ",
                price: "Available upon request"
               }
            ],
            buttonText: "TRY FOR FREE",
            isRecommended: false,
            bgColor: "bg-white"
        },
        
        {
            name: "Document Verification",
            subtitle: "Professional verification of legal  documents and certificates",
            price: "450 GHC",
            period: "per document verification",
            features: [
                "Authenticity verification",
                "Legal compliance check",
                "Detail verification report",
            ],
            buttonText: "TRY FOR FREE",
            isRecommended: true,
            bgColor: "bg-white"
        },
        {
            name: "Document Request",
            subtitle: "Custom document procurement and legal documents and certificates",
            price: "Upon Request",
            period: "Pricing varies by document type and complexity",
            features: [
                "Custom \ qoute provided",
                "Fast turnaround time",
                "Professional handling",
               
            ],
            buttonText: "CONTACT US",
            isRecommended: false,
            bgColor: "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute bg-gradient-to-br from-cyan-300/30 to-purple-400/30 top-10 left-10 w-20 shadow-sm h-20 bg-white/20 rounded-full"></div>
            <div className="absolute top-20 right-20 w-40 shadow-sm h-40 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-10 left-20 w-20 shadow-sm h-20 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-20 shadow-sm h-20 bg-white/20 rounded-full"></div>
            
            {/* Navigation Header */}
           

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                        SVD Services Pricing 
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Professional Legal Document Verification Services   
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 flex items-center justify-center w-full lg:ml-80 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 shadow-xl transition-all duration-300 hover:scale-105 ${
                                plan.isRecommended ? 'ring-4 ring-white/50 transform scale-105' : ''
                            } ${plan.bgColor}`}
                        >
                            {/* Recommended Badge */}
                            {plan.isRecommended && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span>Recommended</span>
                                    </div>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-8">
                                <h3 className={`text-xl font-bold mb-2 ${plan.name === 'Document Request' ? 'text-white' : 'text-gray-800'}`}>
                                    {plan.name}
                                </h3>
                                {plan.subtitle && (
                                    <p className={`text-sm ${plan.name === 'Document Request' ? 'text-white/80' : 'text-gray-600'}`}>
                                        {plan.subtitle}
                                    </p>
                                )}
                                <div className="mt-4">
                                    <span className={`text-sm ${plan.name === 'Document Request' ? 'text-white font-bold text-xl' : 'text-gray-900 font-bold text-xl'}`}>
                                        {plan.price}
                                    </span><br/>
                                    <span className={`text-lg ml-2 ${plan.name === 'Document Request' ? 'text-white/80' : 'text-gray-600'}`}>
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-start space-x-3">
                                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                            plan.name === 'Document Request' ? 'text-white' : 'text-green-500'
                                        }`} />
                                        <span className={`text-sm ${
                                            plan.name === 'Document Request' ? 'text-white/90' : 'text-gray-600'
                                        }`}>
                                            {typeof feature === 'object' ? feature.name : feature}
                                            <span className={`text-sm ${
                                                plan.name === 'Document Request' ? 'text-white/90 font-bold' : 'text-gray-600 font-bold text-sm'
                                            }`}>
                                                {typeof feature === 'object' ? feature.price : ''}
                                            </span>
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                                plan.name === 'Enterprise'
                                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                                    : plan.isRecommended
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-12">
                    <p className="text-white/80 text-sm">
                        *The above pricing is valid for Pro Task Subscription users only.
                    </p>
                </div>
            </div>

            {/* Background Gradient Circles */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-300/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/30 to-transparent rounded-full blur-3xl"></div>
        </div>
    );
};

export default PricingPage; 