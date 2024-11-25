import Link from "next/link";
import Button from "./Button";

const features = [
    {
        title: 'WordPress Site Management',
        description: "Don’t let your website become a time-consuming burden. With our expert WordPress site management, you can reclaim your valuable time and focus on what truly matters: growing your business. Our team of skilled professionals will handle every aspect of your website, from routine maintenance to complex updates. Experience the peace of mind that comes with knowing your website is in the hands of experts.",
        image: '/website-maintenance.png',
        link: '/services/website-maintenance',
    },
    {
        title: 'Web Development',
        description: "Your website is your digital storefront. Make sure it’s making a lasting impression. Our expert web development team will craft a stunning, high-performing website that captures your brand’s essence and drives results. From sleek designs to seamless functionality, we’ll create a digital experience that sets you apart from the competition. Whether you need a brand new website or want to revitalize your existing site with custom solutions, we’ve got you covered.",
        image: '/website-development.png',
        link: "/services/web-development",
    },
    {
        title: 'Superfast Hosting',
        description: 'Don’t let slow load times, frequent downtime, and security vulnerabilities hinder your online success. Our superfast hosting solution is designed to deliver peak performance, 24/7. Experience the difference of a website that loads in a flash, stays online, and is protected by advanced security measures. Let us handle the technical complexities, so you can focus on growing your business.',
        image: '/wp-world-hosting.png',
        link: '/wordpress-hosting',
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-white home-features">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold tracking-tight text-center text-trustworthyBlue">
                    Mastering the Digital Landscape.
                </h2>
                <p className="mt-4 text-lg text-center text-gray-600 lg:max-w-5xl lg:mx-auto">
                    Navigating the complex digital landscape can be daunting. Let us handle the technicalities, while you focus on what you do best. Our expert services include:
                </p>
                <div className="mt-12 space-y-0">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`lg:flex lg:items-center feature ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                        >
                            <div className="lg:w-1/2 p-24">
                                <img
                                    src={feature.image}
                                    alt={`${feature.title} graphic`}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:px-12 text-center lg:text-left">
                                <h3 className="text-3xl font-bold text-trustworthyBlue">{feature.title}</h3>
                                <p className="my-4 md:mb-6 text-gray-600">{feature.description}</p>
                                <Link href={feature.link}>
                                    <Button>Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
