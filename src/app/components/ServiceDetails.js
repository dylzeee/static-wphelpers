export default function ServiceDetails({ details, image }) {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:justify-between">
                {/* Text Section */}
                <div className="lg:w-1/2">
                    {details.map((paragraph, index) => (
                        <p key={index} className="mt-6 text-lg text-gray-600 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
                {/* Image Section */}
                <div className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-12">
                    <img
                        src={image}
                        alt="Service Graphic"
                        className="rounded-lg shadow-lg mx-auto"
                    />
                </div>
            </div>
        </section>
    );
}
