import Link from "next/link";
import { media } from "@/lib/media";
import Photo from "./Photo";

export default function FinalCta() {
  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-obsidian text-ivory">
      <Photo src={media.finale.src} alt={media.finale.alt} sizes="100vw" className="object-[center_45%]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.15)_0%,rgba(8,8,8,0.28)_40%,rgba(8,8,8,0.88)_100%)]" />
      <div className="relative z-10 shell pb-16 pt-40 md:pb-20">
        <p className="eyebrow text-mist">The next conversation</p>
        <h2 className="mt-4 max-w-[12ch] font-display text-5xl leading-[0.9] sm:text-7xl md:text-8xl">
          Ask for the machine, not the catalogue.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-7 text-mist">
          The Ferrari in this frame sets the tone. It is not a listed car. When you are ready,
          enquire about one that is — or about the kind of car you actually want.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact#enquiry" className="btn btn-light w-full sm:w-auto">
            Begin an enquiry
          </Link>
          <Link href="/inventory" className="btn btn-ghost w-full sm:w-auto">
            Return to the collection
          </Link>
        </div>
      </div>
    </section>
  );
}
