"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { catalogueNotice } from "@/lib/dealership";
import {
  brands,
  categories,
  categoryLabel,
  filterVehicles,
  normalizeFilters,
  priceBands,
  vehicles,
} from "@/lib/vehicles";
import Dialog from "./Dialog";
import Photo from "./Photo";
import WhatsAppEnquiry from "./WhatsAppEnquiry";
import { DemoPrice } from "./VehicleFacts";

export default function InventoryBrowser() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filters = normalizeFilters({
    category: searchParams.get("category"),
    brand: searchParams.get("brand"),
    price: searchParams.get("price"),
  });

  const results = filterVehicles(vehicles, filters);
  const activeCount = [
    filters.category !== "all",
    filters.brand !== "all",
    filters.price !== "any",
  ].filter(Boolean).length;

  const update = (patch) => {
    const next = new URLSearchParams(searchParams.toString());
    Object.entries(patch).forEach(([key, value]) => {
      if (!value || value === "all" || value === "any") next.delete(key);
      else next.set(key, value);
    });
    const query = next.toString();
    router.replace(query ? `/inventory?${query}` : "/inventory", { scroll: false });
  };

  const clear = () => {
    router.replace("/inventory", { scroll: false });
    setFiltersOpen(false);
  };

  const controls = (prefix) => (
    <FilterControls prefix={prefix} filters={filters} onChange={update} />
  );

  return (
    <div>
      <div className="shell pb-8 pt-28 md:pt-32">
        <p className="eyebrow">Demonstration catalogue</p>
        <h1 className="mt-4 max-w-[12ch] font-display text-5xl leading-[0.92] sm:text-7xl">
          The collection
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-7 text-silver">{catalogueNotice}</p>
      </div>

      <div className="sticky top-[var(--header-h)] z-30 border-y border-white/10 bg-obsidian/95 backdrop-blur">
        <div className="shell flex items-center justify-between gap-4 py-3">
          <p className="text-sm text-mist" aria-live="polite">
            {results.length === 0
              ? "No machines"
              : results.length === 1
                ? "1 machine"
                : `${results.length} machines`}
          </p>
          <div className="flex items-center gap-4">
            {activeCount > 0 ? (
              <button type="button" onClick={clear} className="text-[0.68rem] tracking-[0.18em] uppercase text-silver">
                Clear all filters
              </button>
            ) : null}
            <button
              type="button"
              className="btn btn-ghost px-4 lg:hidden"
              aria-expanded={filtersOpen}
              onClick={() => setFiltersOpen(true)}
            >
              Refine{activeCount ? ` · ${activeCount}` : ""}
            </button>
          </div>
        </div>
        <div className="shell hidden pb-5 lg:block">{controls("bar")}</div>
      </div>

      <Dialog open={filtersOpen} onClose={() => setFiltersOpen(false)} title="Refine the list">
        {controls("sheet")}
        <button type="button" className="btn btn-light mt-8 w-full" onClick={() => setFiltersOpen(false)}>
          Show {results.length} {results.length === 1 ? "machine" : "machines"}
        </button>
      </Dialog>

      <div className="shell py-6 md:py-10">
        {results.length === 0 ? (
          <div className="border border-white/10 px-6 py-20 text-center">
            <h2 className="font-display text-4xl sm:text-5xl">Nothing in this brief.</h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-silver">
              No demonstration vehicle matches this category, brand, and price together.
            </p>
            <button type="button" onClick={clear} className="btn btn-light mt-8">
              Clear all filters
            </button>
          </div>
        ) : (
          <ul key={`${filters.category}-${filters.brand}-${filters.price}`} className="fade-frame">
            {results.map((vehicle, index) => (
              <li key={vehicle.slug} className="border-b border-white/10 py-8 md:py-12">
                <article className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
                  <Link
                    href={`/inventory/${vehicle.slug}`}
                    className={`zoom-frame relative block aspect-[16/10] bg-graphite lg:col-span-7 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Photo
                      src={vehicle.images[0].src}
                      alt={vehicle.images[0].alt}
                      sizes="(min-width: 1024px) 52vw, 100vw"
                      className="zoom-target"
                    />
                  </Link>
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="eyebrow">{categoryLabel(vehicle.category)}</p>
                    <h2 className="mt-3 font-display text-4xl leading-[0.95] sm:text-5xl">
                      <Link href={`/inventory/${vehicle.slug}`}>
                        {vehicle.make}
                        <span className="mt-1 block italic">{vehicle.model}</span>
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm text-silver">{vehicle.year}</p>
                    <p className="mt-4 max-w-md text-sm leading-7 text-mist">{vehicle.summary}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                      <div>
                        <dt className="text-[0.62rem] tracking-[0.16em] uppercase text-silver">Powertrain</dt>
                        <dd className="mt-1">{vehicle.powertrain}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.62rem] tracking-[0.16em] uppercase text-silver">Transmission</dt>
                        <dd className="mt-1">{vehicle.transmission}</dd>
                      </div>
                      {vehicle.mileageKm != null ? (
                        <div>
                          <dt className="text-[0.62rem] tracking-[0.16em] uppercase text-silver">Mileage</dt>
                          <dd className="mt-1">{vehicle.mileageKm.toLocaleString("en-NG")} km</dd>
                        </div>
                      ) : null}
                    </dl>
                    <div className="mt-6">
                      <DemoPrice amount={vehicle.priceNgn} />
                    </div>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link href={`/inventory/${vehicle.slug}`} className="btn btn-light w-full sm:w-auto">
                        View details
                      </Link>
                      <WhatsAppEnquiry vehicle={vehicle} className="btn btn-ghost w-full sm:w-auto" />
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function FilterControls({ prefix, filters, onChange }) {
  return (
    <div className="grid gap-6">
      <fieldset>
        <legend className="eyebrow">Category</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          <Chip
            name={`${prefix}-category`}
            checked={filters.category === "all"}
            onChange={() => onChange({ category: "all" })}
            label="All"
          />
          {categories.map((item) => (
            <Chip
              key={item.id}
              name={`${prefix}-category`}
              checked={filters.category === item.id}
              onChange={() => onChange({ category: item.id })}
              label={item.label}
            />
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="eyebrow">Brand</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          <Chip
            name={`${prefix}-brand`}
            checked={filters.brand === "all"}
            onChange={() => onChange({ brand: "all" })}
            label="All"
          />
          {brands.map((brand) => (
            <Chip
              key={brand}
              name={`${prefix}-brand`}
              checked={filters.brand === brand}
              onChange={() => onChange({ brand })}
              label={brand}
            />
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="eyebrow">Price range</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {priceBands.map((band) => (
            <Chip
              key={band.id}
              name={`${prefix}-price`}
              checked={filters.price === band.id}
              onChange={() => onChange({ price: band.id })}
              label={band.label}
            />
          ))}
        </div>
      </fieldset>
    </div>
  );
}

function Chip({ name, checked, onChange, label }) {
  return (
    <label className="chip cursor-pointer">
      <input type="radio" name={name} checked={checked} onChange={onChange} className="sr-only" />
      {label}
    </label>
  );
}
