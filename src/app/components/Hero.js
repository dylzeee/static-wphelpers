export default function Hero() {
    return (
        <section className="relative gradient-bg text-white py-4 pt-0 md:py-24 lg:py-32 lg:px-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                        Reclaim Your Time. Elevate Your Business.
                    </h1>
                    <p className="mt-6 text-lg text-gray-200">
                        Imagine a world where your website runs seamlessly, 24/7. A world where you're free to focus on what truly matters: growing your business.
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                        <button className="bg-white text-trustworthyBlue px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
                            Get Started
                        </button>
                        <button className="bg-lightBlue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="mb-4 mt-12 lg:mt-0 md:ml-20 lg:w-1/2">
                    <img
                        src="/busy-business-owner.png"
                        alt="Fast Web Hosting Graphic"
                        className="rounded-lg mx-auto lg:mx-0"
                    />
                </div>
            </div>
        </section>
    );
}
