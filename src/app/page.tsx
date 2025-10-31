import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import Services from '@/components/Services';
import DemoSection from '@/components/DemoSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <HowItWorks />
        <About />
        <Services />
        <DemoSection />
        <Footer />
      </main>
    </>
  );
}