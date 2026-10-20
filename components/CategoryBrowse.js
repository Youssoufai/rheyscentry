import Link from "next/link";
import { browseGroups, getVehicle } from "@/lib/vehicles";
import Photo from "./Photo";
import Reveal from "./Reveal";

export default function CategoryBrowse() {
  return (
    <section className="bg-obsidian py-20 text-ivory md:py-28" aria-labelledby="browse-heading">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Browse by category</p>
          <h2 id="browse-heading" className="mt-4 max-w-[14ch] font-display text-5xl leading-[0.92] sm:text-6xl">
            Four ways into the house.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {browseGroups.map((group) => {
            const vehicle = getVehicle(group.slug);
            const image = vehicle.images[0];
            return (
              <Link
                key={group.id}
                href={`/inventory?category=${group.id}`}
                className="zoom-frame group relative block min-h-[26rem] bg-graphite"
              >
                <Photo src={image.src} alt={image.alt} sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="zoom-target" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-4xl italic">{group.title}</h3>
                  <p className="mt-3 max-w-[16rem] text-sm leading-6 text-mist">{group.line}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
