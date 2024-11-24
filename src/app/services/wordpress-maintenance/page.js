import ServiceHero from '@/app/components/ServiceHero';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import WebsiteManagementFeatures from '@/app/components/WebsiteManagementFeatures';
import WebsiteManagementOverview from '@/app/components/WebsiteManagementOverview';
import SpecializedPlugins from '@/app/components/SpecializedPlugins';
import WebsiteManagementFAQ from '@/app/components/FAQ/WebsiteManagementFAQ';

export default function WordPressMaintenance() {
    const serviceDetails = [
        'Our WordPress Maintenance service ensures your website stays up-to-date, secure, and optimized.',
        'We handle core updates, plugin management, and regular backups so you can focus on growing your business.',
        'With real-time monitoring and detailed reports, you’ll have peace of mind knowing your site is in good hands.',
    ];

    return (
        <>
            <ServiceHero
                title="WordPress Maintenance"
                subtitle="Keep your website running smoothly and securely with expert maintenance."
            />
            <WebsiteManagementOverview />
            <WebsiteManagementFeatures />
            <SpecializedPlugins />
            <WebsiteManagementFAQ />
        </>
    );
}
