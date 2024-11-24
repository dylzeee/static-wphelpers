export default function ProcessOverview() {
    const steps = [
        {
            title: '1. Contact Us',
            description: 'Reach out to our team with your requirements, and we’ll schedule a consultation.',
        },
        {
            title: '2. Plan',
            description: 'We’ll create a tailored plan to meet your business goals and needs.',
        },
        {
            title: '3. Execute',
            description: 'Our team will implement your project with efficiency and precision.',
        },
        {
            title: '4. Support',
            description: 'We’ll be here to provide ongoing support and maintenance.',
        },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-trustworthyBlue">
                    Our Process
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    From start to finish, we make your journey seamless and straightforward.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold text-trustworthyBlue">
                                {step.title}
                            </h3>
                            <p className="mt-4 text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
