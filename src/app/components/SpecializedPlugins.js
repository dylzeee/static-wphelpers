export default function SpecializedPlugins() {
    const plugins = [
        { name: 'WooCommerce', logo: '/logos/woocommerce.png' },
        { name: 'BuddyBoss', logo: '/logos/buddyboss.png' },
        { name: 'Elementor', logo: '/logos/elementor.png' },
        { name: 'Divi', logo: '/logos/divi.png' },
        { name: 'LearnDash', logo: '/logos/learndash.png' },
        { name: 'WPBakery', logo: '/logos/wpbakery.png' },
        { name: 'Advanced Custom Fields (ACF)', logo: '/logos/acf.png' },
        { name: 'Wordfence', logo: '/logos/wordfence.png' },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Title */}
                <h2 className="text-3xl font-bold text-trustworthyBlue">
                    Supporting thousands of themes and plugins since 2018
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Including some of the most popular tools in the WordPress ecosystem:
                </p>
                {/* Logo Grid */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {plugins.map((plugin, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <img
                                src={plugin.logo}
                                alt={plugin.name}
                                className="max-h-16 object-contain hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
