import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function WebsiteManagementTwoColumn() {
    const benefits = [
        {
            title: 'Peace of Mind',
            description:
                'Our advanced security measures, regular backups, and 24/7 support ensure your website is always protected and running smoothly.',
        },
        {
            title: 'Increased Revenue',
            description:
                'A faster, more secure, and optimized website can lead to higher conversion rates and increased sales.',
        },
        {
            title: 'Improved Brand Reputation',
            description:
                "A well-maintained website reflects positively on your brand's professionalism and credibility.",
        },
        {
            title: 'More Free Time',
            description:
                'By outsourcing your website management to us, you can focus on what you do best: running your business.',
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Column */}
                <div>
                    <h2 className="text-4xl font-bold text-trustworthyBlue mb-6">
                        Your Website, Your Way: Personalized Management Solutions
                    </h2>
                    <p className="text-gray-600 text-lg mb-4">
                        Tired of the endless cycle of website maintenance? Let's face it.
                        Managing a website can be a time-consuming and complex task. From
                        updating plugins to optimizing performance, there's always something
                        to do.
                    </p>
                    <p className="text-gray-600 text-lg mb-4">
                        Imagine a world where your website runs seamlessly, 24/7. A world
                        where you're free to focus on what truly matters: growing your
                        business.
                    </p>
                    <p className="text-gray-600 text-lg">
                        That's the power of our expert website management service.
                    </p>
                </div>

                {/* Benefits List Column */}
                <div>
                    <h3 className="text-2xl font-bold text-trustworthyBlue mb-4">
                        Here’s what our expert website management service can do for you:
                    </h3>
                    <ul className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className="text-lightBlue w-6 h-6 mt-1"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold text-trustworthyBlue">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
