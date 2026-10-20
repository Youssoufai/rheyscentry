import CategoryBrowse from "@/components/CategoryBrowse";
import CuratedCollection from "@/components/CuratedCollection";
import EnquiryForm from "@/components/EnquiryForm";
import FeaturedVehicle from "@/components/FeaturedVehicle";
import FinalCta from "@/components/FinalCta";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import VelocityStandard from "@/components/VelocityStandard";

export default function Home() {
  return (
    <>
      <Hero />
      <CuratedCollection />
      <FeaturedVehicle />
      <CategoryBrowse />
      <VelocityStandard />
      <section className="bg-obsidian py-20 text-ivory md:py-28" aria-labelledby="enquiry-heading">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Personal enquiry</p>
            <h2 id="enquiry-heading" className="mt-4 font-display text-5xl leading-[0.92] sm:text-6xl">
              Tell us the drive you want.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-silver">
              Name, a number, the kind of vehicle, and a budget. That is enough to begin.
              The note stays on this screen. A live house would receive it. This one does not.
            </p>
          </Reveal>
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
