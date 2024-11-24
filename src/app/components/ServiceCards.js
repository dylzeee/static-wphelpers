const services = [
    {
        title: 'Website Maintenance',
        description: 'Keep your website running smoothly with regular updates and support.',
        image: 'https://via.placeholder.com/400x300',
    },
    {
        title: 'Secure Hosting',
        description: 'Reliable and secure hosting solutions tailored for your business.',
        image: 'https://via.placeholder.com/400x300',
    },
    {
        title: 'Custom Development',
        description: 'Tailored solutions to meet your unique business needs.',
        image: 'https://via.placeholder.com/400x300',
    },
    {
        title: 'Performance Monitoring',
        description: 'Track and optimize your website’s performance with ease.',
        image: 'https://via.placeholder.com/400x300',
    },
];

export default function ServiceCards() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-trustworthyBlue">
                    What We Offer
                </h2>
                <p className="mt-4 text-lg text-center text-gray-600">
                    Explore our comprehensive range of services designed to empower your business.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-trustworthyBlue">
                                    {service.title}
                                </h3>
                                <p className="mt-4 text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
