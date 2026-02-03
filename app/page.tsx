import Hero from "@/components/hero";
import WhoWeAre from "@/components/who-we-are";
import Services from "@/components/services";
import Differentials from "@/components/differentials";
import About from "@/components/about";
import WorkWithUs from "@/components/work-with-us";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <WhoWeAre />
      <Services />
      <Differentials />
      <About />
      <WorkWithUs />
      <Contact />
      <Footer />
    </div>
  );
}
