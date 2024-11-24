export default function SuccessStories() {
    const caseStudies = [
        {
            title: 'Increased Traffic by 200%',
            description: 'Learn how we helped Client X double their website traffic in just 3 months.',
            image: 'https://via.placeholder.com/400x300', // Replace with real case study image
        },
        {
            title: '99.9% Uptime for Small Businesses',
            description: 'Discover how we provide reliable hosting solutions to over 500 small businesses.',
            image: 'https://via.placeholder.com/400x300', // Replace with real case study image
        },
        {
            title: 'Seamless WordPress Migration',
            description: 'Find out how we helped Client Y move their site with zero downtime.',
            image: 'https://via.placeholder.com/400x300', // Replace with real case study image
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-trustworthyBlue">
                    Success Stories
                </h2>
                <p className="mt-4 text-lg text-center text-gray-600">
                    Real results for real businesses. See what we’ve achieved for our clients.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((caseStudy, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={caseStudy.image}
                                alt={caseStudy.title}
                                className="rounded-lg shadow-lg mx-auto"
                            />
                            <h3 className="mt-6 text-xl font-semibold text-trustworthyBlue">
                                {caseStudy.title}
                            </h3>
                            <p className="mt-4 text-gray-600">{caseStudy.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
