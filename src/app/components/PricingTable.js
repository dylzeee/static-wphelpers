const pricingPlans = [
    {
        name: 'One-Time Task',
        price: '$99/hr',
        description: 'For individual jobs',
        features: ['Website Maintenance', 'Basic Support'],
        popular: false,
    },
    {
        name: 'Business',
        price: '$199/month',
        description: 'Perfect for growing businesses.',
        features: ['Advanced Maintenance', 'Priority Support', 'Secure Hosting'],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: '$499/month',
        description: 'Full support for enterprises.',
        features: ['Custom Development', '24/7 Support', 'Performance Monitoring'],
        popular: false,
    },
];

export default function PricingTable() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-lg shadow-lg ${plan.popular
                                ? 'border-2 border-lightBlue bg-gradient-to-b from-lightBlue/10 to-white'
                                : 'bg-white'
                                }`}
                        >
                            {plan.popular && (
                                <div className="mb-4 text-sm uppercase font-bold text-lightBlue">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-trustworthyBlue">{plan.name}</h3>
                            <p className="mt-2 text-gray-600">{plan.description}</p>
                            <p className="mt-4 text-4xl font-extrabold">{plan.price}</p>
                            <ul className="mt-6 space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="text-gray-600 flex items-center">
                                        <span className="w-2 h-2 bg-lightBlue rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`mt-6 w-full py-3 rounded-lg text-white font-medium ${plan.popular
                                    ? 'bg-lightBlue hover:bg-blue-500'
                                    : 'bg-trustworthyBlue hover:bg-blue-700'
                                    }`}
                            >
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
