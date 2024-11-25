import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece, faPalette } from '@fortawesome/free-solid-svg-icons';

export default function CustomPluginsAndThemes() {
    const features = [
        {
            title: 'Custom Plugins',
            description:
                'Automate processes, add advanced features, or solve specific challenges with plugins built specifically for your needs.',
            icon: faPuzzlePiece,
        },
        {
            title: 'Tailored Themes',
            description:
                'Stand out with a one-of-a-kind design that reflects your brand identity and ensures your site looks and feels exactly how you envision it.',
            icon: faPalette,
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 space-y-12">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-trustworthyBlue">
                        Take Your Website Further with Custom Plugins & Themes
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Your business is unique—your website should be too. That’s why we
                        specialize in custom plugin and theme development, designed to
                        enhance functionality and deliver a seamless user experience.
                    </p>
                </div>

                {/* Features */}
                <div className="space-y-12 lg:max-w-6xl lg:mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`lg:py-12 flex flex-col-reverse md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                } items-center gap-8`}
                        >
                            {/* Text Block */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-trustworthyBlue mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-lg">{feature.description}</p>
                            </div>

                            {/* Icon Block */}
                            <div className="flex-1 flex justify-center">
                                <div className="w-32 h-32 bg-lightBlue/10 rounded-full flex items-center justify-center shadow-lg icon-block">
                                    <FontAwesomeIcon
                                        icon={feature.icon}
                                        className="text-lightBlue w-16 h-16"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
