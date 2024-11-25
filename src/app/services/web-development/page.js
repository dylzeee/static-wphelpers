import Hero from "@/app/components/Hero";
import TechnologiesShowcase from "@/app/components/TechnologiesShowcase";
import TwoColumnWithImage from "@/app/components/TwoColumnWithImage";
import CustomPluginsAndThemes from "@/app/components/web-development/CustomPluginsAndThemes";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import { faHeadset, faCogs, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default function WebDevelopment() {


    return (
        <>
            <Hero
                title="Custom-Built Websites That Drives Results"
                subtitle="Stunning Design, Seamless Functionality, and Custom Features Tailored to Your Brand—Plus 3 Months of Free Maintenance & Support!"
                button="Get a quote"
                buttonLink="/contact"
                image="/website-development.png"
                gradientDirection="rtl"
            />
            <TwoColumnWithImage />
            <WhyChooseUs />
            <CustomPluginsAndThemes />
            <TechnologiesShowcase />
        </>
    )
}