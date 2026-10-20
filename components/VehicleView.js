import Link from "next/link";
import { catalogueNotice } from "@/lib/dealership";
import { categoryLabel } from "@/lib/vehicles";
import Gallery from "./Gallery";
import Photo from "./Photo";
import WhatsAppEnquiry from "./WhatsAppEnquiry";
import { DemoPrice, SpecList } from "./VehicleFacts";

export default function VehicleView({ vehicle, related }) {
  return (
    <article className="pb-20 pt-28 md:pt-32">
      <div className="shell">
        <Link href="/inventory" className="text-[0.68rem] tracking-[0.2em] uppercase text-silver">
          Back to inventory
        </Link>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-silver">{catalogueNotice}</p>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Gallery images={vehicle.images} name={`${vehicle.make} ${vehicle.model}`} />
          </div>
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="eyebrow">{categoryLabel(vehicle.category)}</p>
            <h1 className="mt-3 font-display text-5xl leading-[0.92] sm:text-6xl">
              {vehicle.make}
              <span className="mt-1 block italic">{vehicle.model}</span>
            </h1>
            <p className="mt-3 text-sm text-silver">{vehicle.year}</p>
            <div className="mt-6">
              <DemoPrice amount={vehicle.priceNgn} size="text-4xl" />
            </div>
            <p className="mt-6 text-sm leading-7 text-mist">{vehicle.description}</p>
            <div className="mt-8">
              <SpecList vehicle={vehicle} />
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <WhatsAppEnquiry vehicle={vehicle} className="btn btn-light w-full" />
              <Link
                href={`/contact?vehicle=${vehicle.slug}#enquiry`}
                className="btn btn-ghost w-full"
              >
                Enquire in writing
              </Link>
            </div>
          </div>
        </div>

        <section className="mt-20" aria-labelledby="related-heading">
          <h2 id="related-heading" className="font-display text-4xl sm:text-5xl">
            Continue through the house
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/inventory/${item.slug}`} className="zoom-frame group block bg-graphite">
                <div className="relative aspect-[16/10]">
                  <Photo
                    src={item.images[0].src}
                    alt={item.images[0].alt}
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="zoom-target"
                  />
                </div>
                <div className="px-1 py-4">
                  <p className="eyebrow">{categoryLabel(item.category)}</p>
                  <h3 className="mt-2 font-display text-3xl leading-none">
                    {item.make} <span className="italic">{item.model}</span>
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
