import PricingTable from '../components/PricingTable';
import PriceComparisonTable from '../components/PriceComparisonTable';
import FAQ from '../components/FAQ';
import CallToAction from '../components/callToAction';

export default function Pricing() {
    return (
        <>
            <section className="py-16 bg-gradient-to-r from-lightBlue to-trustworthyBlue text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold text-white">Our Pricing Plans</h1>
                    <p className="mt-4 text-lg text-white">
                        Choose the plan that fits your business needs. Flexible, scalable, and reliable.
                    </p>
                </div>
            </section>
            <PricingTable />
            <PriceComparisonTable />
            <FAQ />
            <CallToAction />
        </>
    );
}
