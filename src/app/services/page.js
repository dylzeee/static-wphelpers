import ServiceIntroduction from '../components/ServiceIntroduction';
import ServiceCards from '../components/ServiceCards';
import CallToAction from '../components/callToAction';
import FAQ from '../components/FAQ';

export default function Services() {
    return (
        <>
            <ServiceIntroduction />
            <ServiceCards />
            <FAQ />
            <CallToAction />
        </>
    );
}
