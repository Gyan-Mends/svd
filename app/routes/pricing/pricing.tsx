import { Check, Star } from 'lucide-react';

const PricingPage = () => {
    const pricingPlans = [
        {
            name: "Startup Plan",
            price: "$69",
            period: "per month",
            features: [
                "Billed annually",
                "Fixed Pricing",
                "50 agents",
                "1000 tasks",
                "Branded Agent App & Dashboard",
                "Free Third party integration"
            ],
            buttonText: "TRY FOR FREE",
            isRecommended: false,
            bgColor: "bg-white"
        },
        {
            name: "Pro Agent",
            subtitle: "Usage Based",
            price: "$10",
            period: "per agent",
            features: [
                "Billed monthly",
                "Usage based",
                "Unlimited agents",
                "Pay for every task created"
            ],
            buttonText: "TRY FOR FREE",
            isRecommended: false,
            bgColor: "bg-white"
        },
        {
            name: "Pro Task",
            subtitle: "Usage Based",
            price: "$0.1",
            period: "per task",
            features: [
                "Billed monthly",
                "Usage based",
                "Unlimited Tasks",
                "Pay for every agent added"
            ],
            buttonText: "TRY FOR FREE",
            isRecommended: true,
            bgColor: "bg-white"
        },
        {
            name: "Enterprise",
            subtitle: "Custom Pricing",
            price: "Custom",
            period: "pricing",
            features: [
                "For more than 10k transactions",
                "Go live priority",
                "Territory-wise restricted forms",
                "Self-hosted Installation",
                "Broadcast Feature",
                "Branded Agent app and dashboard",
                "Custom 3rd party Integration"
            ],
            buttonText: "CONTACT US",
            isRecommended: false,
            bgColor: "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="absolute top-20 right-20 w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-10 left-20 w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-4 h-4 bg-white/20 rounded-full"></div>
            
            {/* Navigation Header */}
           

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Simple pricing that works at any scale
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Simple, transparent pricing for everyone. Whether you're a local restaurant or a multinational logistics company
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
                                <h3 className={`text-xl font-bold mb-2 ${plan.name === 'Enterprise' ? 'text-white' : 'text-gray-800'}`}>
                                    {plan.name}
                                </h3>
                                {plan.subtitle && (
                                    <p className={`text-sm ${plan.name === 'Enterprise' ? 'text-white/80' : 'text-gray-600'}`}>
                                        {plan.subtitle}
                                    </p>
                                )}
                                <div className="mt-4">
                                    <span className={`text-4xl font-bold ${plan.name === 'Enterprise' ? 'text-white' : 'text-gray-900'}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-lg ml-2 ${plan.name === 'Enterprise' ? 'text-white/80' : 'text-gray-600'}`}>
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-start space-x-3">
                                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                            plan.name === 'Enterprise' ? 'text-white' : 'text-green-500'
                                        }`} />
                                        <span className={`text-sm ${
                                            plan.name === 'Enterprise' ? 'text-white/90' : 'text-gray-600'
                                        }`}>
                                            {feature}
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