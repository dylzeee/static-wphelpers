import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/callToAction';
import WhyChooseUs from './components/WhyChooseUs';
import SuccessStories from './components/SuccessStories';
import ProcessOverview from './components/ProcessOverview';
import StatisticsSection from './components/StatisticsSection';
import WaveEffect from './components/WafeEffect';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WaveEffect color="rgb(249 250 251)" />
      <WhyChooseUs />
      <SuccessStories />
      <Testimonials />
      <ProcessOverview />
      <StatisticsSection />
      <CallToAction />
    </>
  );
}
