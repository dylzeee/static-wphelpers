import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Benefits({ benefits }) {


    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-trustworthyBlue">
                    Your Website, Your Vision, Our Expertise.
                </h2>
                <p className="mt-4 text-lg text-gray-600 lg:max-w-4xl lg:mx-auto">
                    We're not just a service provider; we're your dedicated partner. Our team of digital experts understands your unique needs and goals. We're committed to delivering personalized solutions that drive results.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 bg-lightBlue/10 rounded-full">
                                <FontAwesomeIcon
                                    icon={benefit.icon}
                                    className="w-8 h-8 text-lightBlue"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-trustworthyBlue">
                                {benefit.title}
                            </h3>
                            <p className="mt-4 text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <a
                        href="/services"
                        className="bg-lightBlue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500"
                    >
                        Learn More About Our Services
                    </a>
                </div>
            </div>
        </section>
    );
}
