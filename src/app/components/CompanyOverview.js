export default function CompanyOverview() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:justify-between">
                {/* Image Section */}
                <div className="lg:w-1/2 lg:pr-12">
                    <img
                        src="https://via.placeholder.com/600x400"
                        alt="About WP Helpers"
                        className="rounded-lg shadow-lg mx-auto"
                    />
                </div>
                {/* Text Section */}
                <div className="mt-12 lg:mt-0 lg:w-1/2">
                    <h2 className="text-4xl font-bold text-trustworthyBlue">
                        About Our Company
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        At WP Helpers, we are committed to empowering businesses online.
                        Our mission is to provide hassle-free, reliable WordPress support and services that help small and medium-sized businesses thrive in today’s digital world.
                    </p>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        Since our founding, we’ve worked tirelessly to become a trusted partner for businesses across Australia.
                        With a team of skilled professionals, we ensure that every client receives personalized attention and expert solutions tailored to their needs.
                    </p>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        Whether it’s maintaining your website, providing secure hosting, or delivering custom development solutions,
                        WP Helpers is here to make your online journey seamless and successful.
                    </p>
                </div>
            </div>
        </section>
    );
}
