import FAQ from "@/components/faq";
import Service from "@/components/service";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import OurClients from "@/components/our-clients";
import OurTeam from "@/components/ourteam";
import Testimonial from "@/components/testimonial";
import WhatsAppBubble from "@/components/whatsapp-bubble";
import CtaAfterTeam from "@/components/cta-after-team";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <FAQ />
      <OurClients />
      <Testimonial />
      <OurTeam />
      <CtaAfterTeam />
      <Footer />
      <WhatsAppBubble />
    </>
  );
}
