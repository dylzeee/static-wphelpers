import Link from "next/link";

export default function Hero({ title, subtitle, button, buttonLink, image, gradientDirection, buttonRight, buttonRightLink }) {


    if (gradientDirection = 'ltr') {
        gradientDirection = 'bg-gradient-to-r from-lightBlue to-trustworthyBlue';
    } else {
        gradientDirection = 'bg-gradient-to-r from-trustworthyBlue to-lightBlue';
    }

    return (
        <section className={`relative ${gradientDirection} text-white py-4 pt-0 md:py-24 lg:py-32 lg:px-6 hero`}>
            <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg text-gray-200">
                        {subtitle}
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                        <Link href={buttonLink}>
                            <button className="bg-white text-trustworthyBlue px-12 py-3 rounded-lg font-medium hover:bg-gray-100">
                                {button}
                            </button>
                        </Link>
                        {buttonRight && (
                            <Link href={buttonRightLink}>
                                <button className="bg-lightBlue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500">
                                    {buttonRight}
                                </button>
                            </Link>
                        )}

                    </div>
                </div>
                <div className="mb-4 mt-12 lg:mt-0 md:ml-20 lg:w-1/2 hero-image-wrapper">
                    <img
                        src={image}
                        alt="Fast Web Hosting Graphic"
                        className="rounded-lg mx-auto lg:mx-0 image-animation"
                    />
                </div>
            </div>
        </section>
    );
}
