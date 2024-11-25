import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/callToAction';
import WhyChooseUs from './components/Benefits';
import SuccessStories from './components/SuccessStories';
import ProcessOverview from './components/ProcessOverview';
import StatisticsSection from './components/StatisticsSection';
import WaveEffect from './components/WafeEffect';
import { faHeadset, faCogs, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {

  const benefits = [
    {
      title: '24/7 Support',
      description:
        'Round-the-clock assistance, whenever you need it.',
      icon: faHeadset,
    },
    {
      title: 'Deep Understanding',
      description:
        'In-depth knowledge of your business and industry.',
      icon: faCogs,
    },
    {
      title: 'Tailored Straregies',
      description:
        'Custom solutions to meet your specific goals.',
      icon: faShieldAlt,
    },
  ];

  return (
    <>
      <Hero
        title="Reclaim Your Time. Elevate Your Business."
        subtitle="Imagine a world where your website runs seamlessly, 24/7. A world where you're free to focus on what truly matters: growing your business."
        button="Get Started"
        buttonLink="/pricing"
        image="/busy-business-owner.png"
        gradientDirection="ltr"
        buttonRight="See Pricing"
        buttonRightLink="/pricing"
      />
      <Features />
      <WaveEffect color="rgb(249 250 251)" />
      <WhyChooseUs
        benefits={benefits}
      />
      <SuccessStories />
      <Testimonials />
      <ProcessOverview />
      <StatisticsSection />
      <CallToAction />
    </>
  );
}
