export default function AboutIntroduction() {
    return (
        <section className="py-24 bg-gradient-to-r from-trustworthyBlue to-lightBlue text-white">
            <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-1/2">
                    <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                        About WP Helpers
                    </h1>
                    <p className="mt-6 text-lg text-gray-200">
                        Our mission is to empower businesses online by providing reliable, hassle-free technical support
                        and services. We aim to be the go-to partner for small and medium-sized businesses in Australia.
                    </p>
                </div>
                <div className="mt-12 lg:mt-0 lg:w-1/2">
                    <img
                        src="https://via.placeholder.com/600x400"
                        alt="Placeholder graphic"
                        className="rounded-lg shadow-lg mx-auto lg:mx-0"
                    />
                </div>
            </div>
        </section>
    );
}
