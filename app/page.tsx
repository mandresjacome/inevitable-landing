import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PhysicalAlbum from '@/components/PhysicalAlbum';
import DigitalTemplate from '@/components/DigitalTemplate';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PhysicalAlbum />
      <DigitalTemplate />
      <AboutUs />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

