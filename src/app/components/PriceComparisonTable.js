const plans = ['Basic', 'Pro', 'Premium'];

const features = [
    { name: 'Website Maintenance', plans: [true, true, true] },
    { name: 'Priority Support', plans: [false, true, true] },
    { name: 'Secure Hosting', plans: [false, true, true] },
    { name: 'Custom Development', plans: [false, false, true] },
    { name: 'Performance Monitoring', plans: [false, false, true] },
];

export default function PriceComparisonTable() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-trustworthyBlue">
                    Compare Plans
                </h2>
                <p className="mt-4 text-lg text-center text-gray-600">
                    See what’s included in each plan to choose the right one for your business.
                </p>
                <div className="mt-12 overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-200">
                        <thead>
                            <tr>
                                <th className="text-left py-4 px-6 bg-gray-100 text-gray-700 font-bold">
                                    Features
                                </th>
                                {plans.map((plan, index) => (
                                    <th
                                        key={index}
                                        className={`py-4 px-6 bg-gray-100 text-gray-700 font-bold text-center ${index === 1 ? 'bg-lightBlue/10 text-lightBlue' : ''
                                            }`}
                                    >
                                        {plan}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                        } hover:bg-gray-100 transition-colors`}
                                >
                                    <td className="py-4 px-6 text-gray-600">{feature.name}</td>
                                    {feature.plans.map((included, i) => (
                                        <td
                                            key={i}
                                            className="py-4 px-6 text-center"
                                        >
                                            {included ? (
                                                <span className="text-lightBlue font-bold">✔</span>
                                            ) : (
                                                <span className="text-gray-400 font-bold">✘</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
