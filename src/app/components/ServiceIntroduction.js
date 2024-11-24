import Link from 'next/link';

export default function ServiceIntroduction() {
    return (
        <section className="py-24 bg-gradient-to-r from-trustworthyBlue to-lightBlue text-white text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    Our Services
                </h1>
                <p className="mt-6 text-lg text-gray-200">
                    Discover how WP Helpers can support your business with tailored services for WordPress maintenance, hosting, and development.
                </p>
                <div className="mt-8">
                    <Link
                        href="/pricing"
                        className="bg-white text-trustworthyBlue px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
                    >
                        See Pricing
                    </Link>
                </div>
            </div>
        </section>
    );
}
