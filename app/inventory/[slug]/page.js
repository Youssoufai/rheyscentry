import { Suspense } from "react";
import { notFound } from "next/navigation";
import VehicleView from "@/components/VehicleView";
import { getRelated, getVehicle, vehicles } from "@/lib/vehicles";

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) return { title: "Listing not found" };

  return {
    title: `${vehicle.make} ${vehicle.model}`,
    description: vehicle.summary,
    openGraph: {
      title: `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
      description: vehicle.summary,
      images: [{ url: vehicle.images[0].src, alt: vehicle.images[0].alt }],
    },
  };
}

function Fallback() {
  return (
    <div className="shell pb-24 pt-32">
      <div className="aspect-[16/10] bg-graphite" />
    </div>
  );
}

async function Listing({ params }) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) notFound();
  return <VehicleView vehicle={vehicle} related={getRelated(vehicle.slug)} />;
}

export default function VehiclePage({ params }) {
  return (
    <Suspense fallback={<Fallback />}>
      <Listing params={params} />
    </Suspense>
  );
}
