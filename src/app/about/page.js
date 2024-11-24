import AboutIntroduction from '../components/AboutIntroduction';
import CoreValues from '../components/CoreValues';
import TeamSection from '../components/TeamSection';
import CallToAction from '../components/callToAction';
import CompanyOverview from '../components/CompanyOverview';

export default function About() {
    return (
        <>
            <AboutIntroduction />
            <CompanyOverview />
            <CoreValues />
            <TeamSection />
            <CallToAction />
        </>
    );
}
