import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaPhp,
    FaDatabase,
    FaWordpress,
    FaSass,
    FaReact,
    FaNodeJs,
    FaGithub,
} from "react-icons/fa";

export default function TechnologiesShowcase() {
    const technologies = [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJsSquare },
        { name: "PHP", icon: FaPhp },
        { name: "MySQL", icon: FaDatabase },
        { name: "WordPress", icon: FaWordpress },
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
    ];

    return (
        <section className="py-16 bg-trustworthyBlue">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-white mb-12">
                    Technologies We’re Proficient In
                </h2>
                {/* Alternating Icons Grid */}
                <div className="grid grid-cols-2 lg:py-12 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center space-y-4 ${index % 2 === 0 ? "sm:translate-y-4" : "sm:translate-y-0"
                                } hover:scale-110 transition-transform`}
                        >
                            <div className="text-lightBlue text-6xl">
                                <tech.icon />
                            </div>
                            <p className="text-gray-300 font-medium">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
