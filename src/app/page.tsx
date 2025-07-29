import { AboutSection } from '@/components/AboutSection';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { ColorGradientShowcase } from '@/components/ColorGradientShowcase';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className='min-h-screen relative'>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <ColorGradientShowcase />
      <FeaturedProducts />
      <AboutSection />
      <Footer />
    </main>
  )
}
