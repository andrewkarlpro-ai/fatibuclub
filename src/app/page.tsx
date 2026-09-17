import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Philosophy } from "@/components/site/philosophy";
import { Stats } from "@/components/site/stats";
import { Timeline } from "@/components/site/timeline";
import { Engagement } from "@/components/site/engagement";
import { Committee } from "@/components/site/committee";
import { HowWeOperate } from "@/components/site/how-we-operate";
import { Voices } from "@/components/site/voices";
import { ContactForm } from "@/components/site/contact-form";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-[100svh] flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Stats />
        <Timeline />
        <Engagement />
        <Committee />
        <HowWeOperate />
        <Voices />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
