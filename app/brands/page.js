import Link from "next/link";
import Photo from "@/components/Photo";
import { getVehicle } from "@/lib/vehicles";

export const metadata = {
  title: "Brands",
  description:
    "The marques in the Velocity Motors demonstration: Land Rover, Mercedes-Benz, BMW, Porsche, and Tesla. Not a claim of franchise or authorisation.",
};

const chapters = [
  {
    brand: "Land Rover",
    title: "The long body.",
    slug: "range-rover",
    copy: "Range Rover is the luxury SUV in this catalogue. People ask for it when they want height without looking as though they are trying. We present the model. We do not claim a franchise.",
  },
  {
    brand: "Mercedes-Benz",
    title: "Two answers.",
    slug: "mercedes-g-class",
    copy: "The G-Class and the AMG GT share a house and almost nothing else. One is upright and already famous. The other is a low coupe with a wide grille. Both are demonstration listings, not authorised stock.",
  },
  {
    brand: "BMW",
    title: "The formal one.",
    slug: "bmw-7-series",
    copy: "The 7 Series is here as the executive sedan: a long car for a quiet arrival. The photograph is a grey example beside the water. The figures beside it are examples, too.",
  },
  {
    brand: "Porsche",
    title: "Still the silhouette.",
    slug: "porsche-911",
    copy: "The 911 does not need a new argument. It needs to be shown clearly, against a landscape that does not compete with it. That is the sports car in this set.",
  },
  {
    brand: "Tesla",
    title: "Electric, without the apology.",
    slug: "tesla-roadster",
    copy: "The Roadster is a display example of a luxury electric car, photographed on a gallery floor. It is not a promise that one can be delivered, and it is not described as available.",
  },
];

export default function BrandsPage() {
  return (
    <div className="pt-[var(--header-h)]">
      <header className="shell py-16 md:py-24">
        <p className="eyebrow">Brands</p>
        <h1 className="mt-4 max-w-[14ch] font-display text-5xl leading-[0.92] sm:text-7xl">
          Marques, not a franchise wall.
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-7 text-silver">
          These are the names in the demonstration catalogue. Velocity Motors is not an
          authorised dealer for any of them.
        </p>
      </header>

      {chapters.map((chapter, index) => {
        const vehicle = getVehicle(chapter.slug);
        const image = vehicle.images[0];
        const reversed = index % 2 === 1;
        return (
          <section key={chapter.brand} className="grid lg:min-h-[78vh] lg:grid-cols-2">
            <div className={`relative min-h-[22rem] bg-graphite ${reversed ? "lg:order-2" : ""}`}>
              <Photo src={image.src} alt={image.alt} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="flex flex-col justify-center px-5 py-14 sm:px-10 lg:px-16">
              <p className="eyebrow">0{index + 1}</p>
              <h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">{chapter.brand}</h2>
              <p className="mt-3 font-display text-2xl italic text-silver">{chapter.title}</p>
              <p className="mt-6 max-w-md text-sm leading-7 text-mist">{chapter.copy}</p>
              <Link
                href={`/inventory?brand=${encodeURIComponent(chapter.brand)}`}
                className="btn btn-ghost mt-8 w-full sm:w-auto"
              >
                View in the catalogue
              </Link>
            </div>
          </section>
        );
      })}
    </div>
  );
}
