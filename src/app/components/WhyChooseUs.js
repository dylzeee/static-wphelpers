import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush, faRocket, faRedoAlt } from '@fortawesome/free-solid-svg-icons';

export default function WhyChooseUs() {
    const features = [
        {
            title: 'Custom Design, Built for You',
            description:
                'Every website we create is tailored to your brand, ensuring it’s not just beautiful but built to achieve your goals.',
            icon: faBrush,
        },
        {
            title: 'Performance That Converts',
            description:
                'Speed, functionality, and mobile optimization come standard, so your site not only looks amazing but performs flawlessly.',
            icon: faRocket,
        },
        {
            title: 'Enhance or Start Anew',
            description:
                'Whether you need a completely new site or upgrades to your existing one, we’re here to bring your vision to life.',
            icon: faRedoAlt,
        },
    ];

    return (
        <section className="py-16 bg-white py-16 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="lg:py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Heading and Supporting Text */}
                <div>
                    <h2 className="text-4xl font-bold text-trustworthyBlue mb-6">
                        Why Choose Us?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Your website should be more than just a digital presence—it should
                        be a growth engine for your business. Here’s why businesses like
                        yours trust us to bring their vision to life.
                    </p>
                </div>

                {/* Right Column: Features List */}
                <div className="space-y-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                            {/* Icon */}
                            <div className="feature-item w-12 h-12 bg-lightBlue/10 rounded-full flex justify-center items-center">
                                <FontAwesomeIcon
                                    icon={feature.icon}
                                    className="text-lightBlue w-6 h-6"
                                />
                            </div>
                            {/* Content */}
                            <div>
                                <h3 className="text-xl font-semibold text-trustworthyBlue">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
