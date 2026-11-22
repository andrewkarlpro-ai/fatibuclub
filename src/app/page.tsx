import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Stats } from "@/components/site/stats";
import { HowItWorks } from "@/components/site/how-it-works";
import { ReadingShelf } from "@/components/site/reading-shelf";
import { Team } from "@/components/site/team";
import { Transparency } from "@/components/site/transparency";
import { Faq } from "@/components/site/faq";
import { ContactForm } from "@/components/site/contact-form";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-[100svh] flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Stats />
        <HowItWorks />
        <ReadingShelf />
        <Team />
        <Transparency />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
