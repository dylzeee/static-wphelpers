import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const contactItems = [
    {
        icon: faEnvelope,
        label: 'Email',
        value: 'support@wphelpers.com',
    },
    {
        icon: faPhone,
        label: 'Phone',
        value: '(07) 3314 1283',
    },
    {
        icon: faMapMarkerAlt,
        label: 'Address',
        value: '110 Adealiade St, Brisbane, QLD, 4000',
    },
];

export default function ContactDetails() {
    return (
        <ul className="flex flex-col lg:flex-row lg:justify-center lg:space-x-12 space-y-6 lg:space-y-0 text-center lg:text-left">
            {contactItems.map((item, index) => (
                <li
                    key={index}
                    className="flex flex-col lg:flex-row items-center justify-center lg:justify-start"
                >
                    <FontAwesomeIcon icon={item.icon} className="w-8 h-8 text-lightBlue mb-2 lg:mb-0 lg:mr-4" />
                    <div>
                        <p className="font-medium text-white">{item.label}</p>
                        <p className="text-gray-200">{item.value}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
