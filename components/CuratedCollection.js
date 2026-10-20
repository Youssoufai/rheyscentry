import Link from "next/link";
import { catalogueNotice } from "@/lib/dealership";
import { categoryLabel, getVehicle } from "@/lib/vehicles";
import { formatKm, formatNgn } from "@/lib/format";
import { DemoPrice } from "./VehicleFacts";
import Photo from "./Photo";
import Reveal from "./Reveal";

function specLine(vehicle) {
  const parts = [vehicle.powertrain, vehicle.transmission];
  if (vehicle.mileageKm != null) parts.push(formatKm(vehicle.mileageKm));
  return parts.join(" · ");
}

function OverlayTile({ vehicle, className, sizes, titleClass }) {
  const image = vehicle.images[0];
  return (
    <Link
      href={`/inventory/${vehicle.slug}`}
      className={`zoom-frame group relative block min-h-[22rem] bg-graphite ${className}`}
    >
      <Photo src={image.src} alt={image.alt} sizes={sizes} className="zoom-target" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/15" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <p className="eyebrow text-mist">{categoryLabel(vehicle.category)}</p>
        <h3 className={`mt-2 font-display leading-[0.95] ${titleClass}`}>
          {vehicle.make}
          <span className="block italic">{vehicle.model}</span>
        </h3>
        <p className="mt-3 text-sm text-mist">{vehicle.year}</p>
        <p className="mt-2 max-w-sm text-xs leading-5 text-mist">{specLine(vehicle)}</p>
        <p className="mt-4 font-display text-2xl leading-none">{formatNgn(vehicle.priceNgn)}</p>
        <p className="mt-2 text-[0.62rem] tracking-[0.18em] uppercase text-mist">Demonstration price</p>
      </div>
    </Link>
  );
}

export default function CuratedCollection() {
  const rangeRover = getVehicle("range-rover");
  const amg = getVehicle("mercedes-amg-gt");
  const porsche = getVehicle("porsche-911");
  const gClass = getVehicle("mercedes-g-class");
  const bmw = getVehicle("bmw-7-series");
  const tesla = getVehicle("tesla-roadster");

  return (
    <section id="collection" className="bg-obsidian py-20 text-ivory md:py-28">
      <div className="shell">
        <Reveal>
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">The collection</p>
              <h2 className="mt-4 max-w-[12ch] font-display text-5xl leading-[0.92] sm:text-6xl md:text-7xl">
                Six machines. Nothing incidental.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-silver md:col-span-4 md:col-start-9">
              {catalogueNotice}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 lg:grid-cols-12 lg:gap-5">
          <OverlayTile
            vehicle={rangeRover}
            className="min-h-[28rem] lg:col-span-7 lg:row-span-2 lg:min-h-full"
            sizes="(min-width: 1024px) 58vw, 100vw"
            titleClass="text-5xl sm:text-6xl"
          />
          <OverlayTile
            vehicle={amg}
            className="lg:col-span-5 lg:min-h-[24rem]"
            sizes="(min-width: 1024px) 40vw, 100vw"
            titleClass="text-4xl"
          />
          <OverlayTile
            vehicle={porsche}
            className="lg:col-span-5 lg:min-h-[24rem]"
            sizes="(min-width: 1024px) 40vw, 100vw"
            titleClass="text-4xl"
          />

          <article className="grid bg-ink lg:col-span-12 lg:grid-cols-12">
            <Link
              href={`/inventory/${gClass.slug}`}
              className="zoom-frame relative block min-h-[18rem] lg:col-span-8 lg:min-h-[26rem]"
            >
              <Photo
                src={gClass.images[0].src}
                alt={gClass.images[0].alt}
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="zoom-target"
              />
            </Link>
            <div className="flex flex-col justify-between px-5 py-8 sm:px-8 lg:col-span-4">
              <div>
                <p className="eyebrow">{categoryLabel(gClass.category)}</p>
                <h3 className="mt-3 font-display text-4xl leading-none">
                  {gClass.make}
                  <span className="mt-1 block italic">{gClass.model}</span>
                </h3>
                <p className="mt-5 text-sm leading-7 text-silver">{gClass.summary}</p>
                <p className="mt-4 text-xs leading-5 text-mist">{specLine(gClass)}</p>
              </div>
              <div className="mt-8">
                <DemoPrice amount={gClass.priceNgn} size="text-2xl" />
                <Link href={`/inventory/${gClass.slug}`} className="mt-6 inline-flex text-[0.68rem] tracking-[0.2em] uppercase">
                  View details
                </Link>
              </div>
            </div>
          </article>

          {[bmw, tesla].map((vehicle) => (
            <article key={vehicle.slug} className="grid bg-graphite sm:grid-cols-2 lg:col-span-6">
              <Link href={`/inventory/${vehicle.slug}`} className="zoom-frame relative block min-h-[16rem]">
                <Photo
                  src={vehicle.images[0].src}
                  alt={vehicle.images[0].alt}
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="zoom-target"
                />
              </Link>
              <div className="flex flex-col justify-between p-5 sm:p-6">
                <div>
                  <p className="eyebrow">{categoryLabel(vehicle.category)}</p>
                  <h3 className="mt-3 font-display text-3xl leading-none">
                    {vehicle.make}
                    <span className="mt-1 block italic">{vehicle.model}</span>
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-silver">{vehicle.summary}</p>
                  <p className="mt-3 text-xs leading-5 text-mist">{specLine(vehicle)}</p>
                </div>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <DemoPrice amount={vehicle.priceNgn} size="text-2xl" />
                  <Link
                    href={`/inventory/${vehicle.slug}`}
                    className="shrink-0 text-[0.68rem] tracking-[0.18em] uppercase"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link href="/inventory" className="text-[0.68rem] tracking-[0.22em] uppercase text-mist">
            View the full catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}
