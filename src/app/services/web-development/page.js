import CallToAction from "@/app/components/callToAction";
import WebsiteManagementFAQ from "@/app/components/FAQ/WebsiteManagementFAQ";
import Hero from "@/app/components/Hero";
import TechnologiesShowcase from "@/app/components/TechnologiesShowcase";
import TwoColumnWithImage from "@/app/components/TwoColumnWithImage";
import WaveEffect from "@/app/components/WafeEffect";
import CustomPluginsAndThemes from "@/app/components/web-development/CustomPluginsAndThemes";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import { faHeadset, faCogs, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const faqs = [
    {
        question: "How long does it take to build a custom website?",
        answer: "The timeline depends on the scope of your project. On average, a custom website takes 4–8 weeks from concept to launch. We’ll provide a detailed timeline during your consultation so you know exactly what to expect."
    },
    {
        question: "Can you update or improve my existing website?",
        answer: "Absolutely! Whether you need performance enhancements, design updates, or new features, we can transform your current site into a high-performing powerhouse."
    },
    {
        question: "What’s included in the 3 months of free maintenance and support?",
        answer: "Our maintenance package covers regular updates, security checks, bug fixes, and technical support. We’ll keep your site running smoothly while you focus on growing your business."
    },
    {
        question: "Do you offer custom functionality for my site?",
        answer: "Yes! Our custom plugin development services allow us to build features tailored to your specific business needs, from automation to unique user experiences."
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. Every website we design is fully responsive, ensuring it looks and works beautifully on all devices, including smartphones, tablets, and desktops."
    },
    {
        question: "What’s the difference between a custom theme and a pre-designed theme?",
        answer: "A custom theme is designed from scratch to match your brand’s style and functionality needs, making your site truly one-of-a-kind. A pre-designed theme is a template that may require significant adjustments to meet your requirements."
    },
    {
        question: "Can I manage my website after it’s launched?",
        answer: "Yes! We build websites with user-friendly content management systems (CMS) like WordPress, making it easy for you to update and manage your content. Plus, we’ll provide training if needed."
    },
    {
        question: "How do I get started?",
        answer: "It’s easy! Click the [Get Started Now] button to schedule your free consultation. We’ll discuss your goals, answer your questions, and outline the best path forward for your new or improved website."
    }
];


export default function WebDevelopment() {


    return (
        <>
            <Hero
                title="Custom-Built Websites That Drives Results"
                subtitle="Stunning Design, Seamless Functionality, and Custom Features Tailored to Your Brand—Plus 3 Months of Free Maintenance & Support!"
                button="Get a quote"
                buttonLink="/contact"
                image="/programming.png"
                gradientDirection="rtl"
            />
            <TwoColumnWithImage />
            <WhyChooseUs />
            <CustomPluginsAndThemes />
            <TechnologiesShowcase />
            <WebsiteManagementFAQ faqs={faqs} />
            <CallToAction
                title="Don’t Wait—Your Perfect Website is Just a Click Away"
                subtitle="Imagine the impact of a website that not only looks incredible but works tirelessly to grow your brand. Our expert team is ready to make it happen. Click below to schedule your FREE consultation today and take the first step toward a website that works as hard as you do."
                button="Get Started Now"
                buttonLink="/contact"
            />
        </>
    )
}