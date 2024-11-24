import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="bg-gradient-to-r from-lightBlue to-trustworthyBlue text-white py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold">Experience the Difference, Risk-Free.</h2>
                <p className="mt-4 text-lg lg:max-w-5xl lg:mx-auto">Ready to take your website to the next level? Start a 7-day trial and discover the power of our expert website management. <br />No strings attached.</p>
                <Link href="/pricing">
                    <button className="mt-6 bg-white text-trustworthyBlue px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
                        Start Your 7-Day Free Trial
                    </button>
                </Link>
            </div>
        </section>
    );
}
