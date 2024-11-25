export default function TwoColumnWithImage() {
    return (
        <section className="py-16 bg-gray-50 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Column */}
                <div>
                    <h2 className="text-4xl font-bold text-trustworthyBlue mb-6">
                        Transform Your Online Presence with Stunning, High-Performance Websites
                    </h2>
                    <p className="text-gray-600 text-lg mb-4">
                        Your website is more than just a digital address—it’s your first impression, your storefront, and your most powerful marketing tool. Don’t let a clunky, outdated, or poorly designed site hold your business back.
                    </p>
                    <p className="text-gray-600 text-lg mb-4">
                        At WP Helpers, we don’t just build websites—we craft experiences. Whether you’re starting fresh or want to elevate your current site, we deliver tailored designs that captivate your audience, drive engagement, and grow your business.
                    </p>
                </div>

                {/* Image Column */}
                <div>
                    <img
                        src="/stunning-website.webp" // Replace with your actual image path
                        alt="Website Management"
                        className="rounded-lg shadow-lg image-animation"
                    />
                </div>
            </div>
        </section>
    );
}
