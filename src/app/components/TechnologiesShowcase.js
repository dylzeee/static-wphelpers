import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faPhp,
    faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export default function TechnologiesShowcase() {
    const technologies = [
        { name: 'HTML5', icon: faHtml5 },
        { name: 'CSS3', icon: faCss3Alt },
        { name: 'JavaScript', icon: faJsSquare },
        { name: 'PHP', icon: faPhp },
        { name: 'MySQL', icon: faDatabase },
        { name: 'WordPress', icon: faWordpress },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-trustworthyBlue mb-12">
                    Technologies We’re Proficient In
                </h2>
                {/* Icons Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center space-y-4 hover:scale-110 transition-transform"
                        >
                            <div className="text-lightBlue text-6xl">
                                <FontAwesomeIcon icon={tech.icon} />
                            </div>
                            <p className="text-gray-600 font-medium">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
