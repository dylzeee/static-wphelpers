import ServiceHero from '@/app/components/ServiceHero';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import WebsiteManagementFeatures from '@/app/components/WebsiteManagementFeatures';
import WebsiteManagementOverview from '@/app/components/WebsiteManagementOverview';
import SpecializedPlugins from '@/app/components/SpecializedPlugins';
import WebsiteManagementFAQ from '@/app/components/FAQ/WebsiteManagementFAQ';

const faqs = [
    {
        question: "What is Website Management?",
        answer: "Website management involves overseeing all aspects of your website, including updates, security, performance optimization, and more. It ensures your website runs smoothly, looks professional, and attracts visitors."
    },
    {
        question: "Why Do I Need Website Management?",
        answer: "Managing a website can be time-consuming and complex. Our expert team takes care of the technical details, allowing you to focus on your core business. By outsourcing website management you can Save Time, Improve Performance, Enhance Security, Boost SEO, and much more."
    },
    {
        question: "What Services Are Included in Your Website Management Package?",
        answer: "Our comprehensive website management package includes regular website updates, plugin and theme management, security monitoring and updates, performance optimization, backup and restore, SEO optimization, and 24/7 technical support"
    },
    {
        question: "How Often Do You Update My Website?",
        answer: "We regularly update your website to ensure optimal performance and security. This includes updating WordPress core, themes, and plugins. The frequency of updates depends on various factors, such as the number of plugins and the complexity of your website."
    },
    {
        question: "How Secure Is Your Website Management Service?",
        answer: "We prioritize website security. Our security measures include regular security audits, malware scanning, firewall protection, and regular security updates"
    },
    {
        question: "How Much Does Your Website Management Service Cost?",
        answer: "The cost of our website management service varies depending on the specific needs of your website. We offer flexible pricing plans to suit different budgets. To get an accurate quote, please contact us for a personalized assessment."
    }
];

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
            <WebsiteManagementFAQ faqs={faqs} />
        </>
    );
}
