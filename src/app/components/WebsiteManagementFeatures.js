import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSyncAlt,
    faPuzzlePiece,
    faShieldAlt,
    faDatabase,
    faTachometerAlt,
    faHeadset,
    faUserTie,
    faChartLine,
    faCloudUploadAlt,
} from '@fortawesome/free-solid-svg-icons';

export default function WebsiteManagementFeatures() {
    const features = [
        {
            title: 'Regular Website Updates',
            description:
                'Keep your website up-to-date with the latest WordPress core, theme, and plugin updates for optimal performance and security.',
            icon: faSyncAlt,
        },
        {
            title: 'Plugin and Theme Management',
            description:
                "We meticulously manage your website's plugins and themes, optimizing their performance and compatibility.",
            icon: faPuzzlePiece,
        },
        {
            title: 'Ironclad Security',
            description:
                'Protect your website with advanced security measures, including regular security audits, malware scans, and firewall protection.',
            icon: faShieldAlt,
        },
        {
            title: 'Daily Backups and Restore',
            description:
                'Rest easy knowing your website is safe with our daily backup and restore services.',
            icon: faDatabase,
        },
        {
            title: 'Performance Optimization',
            description:
                'Continuously monitor and optimize your website’s performance, ensuring lightning-fast load times and seamless user experiences.',
            icon: faTachometerAlt,
        },
        {
            title: '24/7 Expert Support',
            description:
                'Our dedicated support team is available 24/7 to assist you with any technical issues.',
            icon: faHeadset,
        },
        {
            title: 'Personalized Service',
            description:
                'Enjoy a tailored approach with a dedicated account manager who understands your unique needs.',
            icon: faUserTie,
        },
        {
            title: 'SEO Optimization',
            description:
                'Improve your website’s visibility in search engine results pages (SERPs) and attract more organic traffic.',
            icon: faChartLine,
        },
        {
            title: 'Website Backups',
            description:
                'We create regular backups of your website to ensure data security and easy restoration in case of accidents or cyberattacks.',
            icon: faCloudUploadAlt,
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-lightBlue to-trustworthyBlue text-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">
                        Your Digital Peace of Mind
                    </h2>
                    <p className="mt-4 text-lg text-white-600 lg:max-w-5xl lg:mx-auto">
                        In today’s fast-paced digital world, maintaining a high-performing
                        website can be complex. Let us take care of the technicalities so
                        you can focus on growing your business.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
                        >
                            {/* Icon */}
                            <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 bg-lightBlue/10 rounded-full">
                                <FontAwesomeIcon
                                    icon={feature.icon}
                                    className="w-8 h-8 text-lightBlue"
                                />
                            </div>
                            {/* Title */}
                            <h3 className="text-xl font-semibold text-trustworthyBlue">
                                {feature.title}
                            </h3>
                            {/* Description */}
                            <p className="mt-4 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
