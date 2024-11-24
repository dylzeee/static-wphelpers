import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faClipboardList, faAddressBook } from '@fortawesome/free-regular-svg-icons';

const features = [
    {
        title: 'Reporting',
        description: 'Stay on top of things with always up-to-date reporting features.',
        icon: faAddressBook,
    },
    {
        title: 'Inventory',
        description: 'Never lose track of what’s in stock with accurate inventory tracking.',
        icon: faAddressBook,
    },
    {
        title: 'Contacts',
        description: 'Organize all of your contacts, service providers, and invoices in one place.',
        icon: faAddressBook,
    },
];

export default function ServiceFeatures() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-trustworthyBlue">
                    Features of Our Services
                </h2>
                <p className="mt-4 text-lg text-center text-gray-600">
                    Explore the key features that make our services reliable and efficient for your business.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="text-center bg-white shadow-sm rounded-lg p-8 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 bg-lightBlue/10 rounded-full">
                                <FontAwesomeIcon icon={feature.icon} className="w-8 h-8 text-lightBlue" />
                            </div>
                            <h3 className="text-xl font-semibold text-trustworthyBlue">{feature.title}</h3>
                            <p className="mt-4 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
