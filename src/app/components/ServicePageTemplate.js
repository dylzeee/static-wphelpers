import ServiceHero from './ServiceHero';
import ServiceDetails from './ServiceDetails';
import CallToAction from './callToAction';
import ServiceFeatures from './ServiceFeatures';

export default function ServicePageTemplate({ title, subtitle, details, image }) {
    return (
        <>
            <ServiceHero title={title} subtitle={subtitle} />
            <ServiceDetails details={details} image={image} />
            <ServiceFeatures />
            <CallToAction />
        </>
    );
}
