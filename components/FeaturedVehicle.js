import Link from "next/link";
import { getVehicle } from "@/lib/vehicles";
import CinematicFrame from "./CinematicFrame";
import Photo from "./Photo";
import WhatsAppEnquiry from "./WhatsAppEnquiry";
import { DemoPrice, SpecList } from "./VehicleFacts";

export default function FeaturedVehicle() {
  const vehicle = getVehicle("porsche-911");
  const image = vehicle.images[0];

  return (
    <section id="featured" className="bg-obsidian text-ivory">
      <div className="grid lg:min-h-[100svh] lg:grid-cols-12">
        <CinematicFrame className="relative min-h-[70vw] bg-graphite sm:min-h-[28rem] lg:col-span-7 lg:min-h-full">
          <div className="shift absolute inset-0">
            <Photo
              src={image.src}
              alt={image.alt}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-[center_60%]"
            />
          </div>
        </CinematicFrame>

        <div className="flex flex-col justify-center bg-ink px-5 py-14 sm:px-10 lg:col-span-5 lg:px-12 lg:py-20">
          <p className="eyebrow">Featured vehicle</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.92] sm:text-6xl">
            {vehicle.make}
            <span className="mt-1 block italic">{vehicle.model}</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-mist">{vehicle.description}</p>
          <div className="mt-8">
            <SpecList vehicle={vehicle} />
          </div>
          <div className="mt-8">
            <DemoPrice amount={vehicle.priceNgn} size="text-4xl" />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppEnquiry vehicle={vehicle} className="btn btn-light w-full sm:w-auto" />
            <Link href={`/inventory/${vehicle.slug}`} className="btn btn-ghost w-full sm:w-auto">
              View details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
