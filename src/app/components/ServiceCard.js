import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faCog, faCode } from '@fortawesome/free-solid-svg-icons';

const services = [
    { title: 'WordPress Maintenance', icon: faCog, description: 'Keep your site running smoothly with our expert care.' },
    { title: 'Hosting Services', icon: faServer, description: 'Reliable and secure hosting tailored for your needs.' },
    { title: 'Development Services', icon: faCode, description: 'Custom WordPress solutions to power your business.' },
];

export default function ServiceCards() {
    return (
        <section className="py-12 bg-gray-50">
            <h2 className="text-4xl font-bold text-center text-trustworthyBlue">Our Services</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
                    >
                        <FontAwesomeIcon icon={service.icon} className="w-12 h-12 text-lightBlue mx-auto" />
                        <h3 className="text-2xl font-bold text-trustworthyBlue mt-4">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
