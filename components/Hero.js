import Link from "next/link";
import { media } from "@/lib/media";
import Photo from "./Photo";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-obsidian">
      <div className="hero-drift absolute inset-0">
        <Photo
          src={media.hero.src}
          alt={media.hero.alt}
          priority
          sizes="100vw"
          className="object-[center_82%]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.82)_0%,rgba(8,8,8,0.42)_34%,rgba(8,8,8,0.08)_62%,rgba(8,8,8,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.5)_0%,transparent_22%,transparent_48%,rgba(8,8,8,0.82)_100%)]" />
      <div className="pointer-events-none absolute inset-x-3 bottom-3 top-[calc(var(--header-h)+0.4rem)] border border-white/15 sm:inset-x-5 sm:bottom-5" />

      <div className="relative z-10 w-full px-5 pb-12 pt-32 sm:px-8 md:px-14 md:pb-16">
        <p className="rise rise-1 eyebrow text-mist">Lagos · Curated performance</p>
        <h1 className="rise rise-2 mt-5 font-display text-[clamp(2.45rem,6.5vw,6.15rem)] uppercase leading-[0.88] tracking-[-0.045em]">
          <span className="block">Engineered</span>
          <span className="block italic">
            to move you<span className="text-crimson">.</span>
          </span>
        </h1>
        <p className="rise rise-3 mt-6 max-w-md text-base text-mist sm:text-lg">
          Exceptional machines. Carefully selected.
        </p>
        <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="#collection" className="btn btn-light w-full sm:w-auto">
            Explore the Collection
          </Link>
          <Link href="#enquiry" className="btn btn-ghost w-full sm:w-auto">
            Find Your Next Drive
          </Link>
        </div>
        <p className="rise rise-4 mt-8 text-[0.62rem] tracking-[0.22em] uppercase text-silver">
          A demonstration — not a showroom listing
        </p>
      </div>
    </section>
  );
}
