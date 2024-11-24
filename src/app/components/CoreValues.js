import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faHandshake, faTools } from '@fortawesome/free-solid-svg-icons';

const values = [
    {
        title: 'Reliability',
        description: 'Ensuring businesses can depend on us for consistent and prompt support.',
        icon: faShieldAlt,
    },
    {
        title: 'Trustworthiness',
        description: 'Building long-term relationships through transparency and honesty.',
        icon: faHandshake,
    },
    {
        title: 'Skilled Expertise',
        description: 'Providing high-quality, technically adept solutions for non-tech-savvy users.',
        icon: faTools,
    },
];

export default function CoreValues() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-trustworthyBlue">Our Core Values</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="flex justify-center items-center mb-4">
                                <FontAwesomeIcon icon={value.icon} className="w-12 h-12 text-lightBlue" />
                            </div>
                            <h3 className="text-2xl font-bold text-trustworthyBlue">{value.title}</h3>
                            <p className="mt-2 text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
