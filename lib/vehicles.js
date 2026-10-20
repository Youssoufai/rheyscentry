import { unsplash } from "./media.js";

/**
 * Demonstration inventory.
 * Replace this list for a real client. Years, prices, and mileages are
 * illustrative. Photographs show the model, not a car held in stock.
 */
export const categories = [
  { id: "luxury-suv", label: "Luxury SUV" },
  { id: "executive-sedan", label: "Executive sedan" },
  { id: "performance-coupe", label: "Performance coupe" },
  { id: "sports-car", label: "Sports car" },
  { id: "luxury-electric", label: "Luxury electric" },
  { id: "premium-off-road", label: "Premium off-road" },
];

export const priceBands = [
  { id: "any", label: "Any price", min: 0, max: Number.POSITIVE_INFINITY },
  { id: "under-160", label: "Under ₦160m", min: 0, max: 160_000_000 },
  { id: "160-220", label: "₦160m – ₦220m", min: 160_000_000, max: 220_000_000 },
  { id: "220-280", label: "₦220m – ₦280m", min: 220_000_000, max: 280_000_000 },
  { id: "over-280", label: "Above ₦280m", min: 280_000_000, max: Number.POSITIVE_INFINITY },
];

export const enquiryBudgets = [
  { id: "under-160", label: "Under ₦160 million" },
  { id: "160-220", label: "₦160 – ₦220 million" },
  { id: "220-280", label: "₦220 – ₦280 million" },
  { id: "over-280", label: "Above ₦280 million" },
  { id: "discuss", label: "I would rather discuss it" },
];

const image = (id, alt, width) => ({ src: unsplash(id, width), alt });

export const vehicles = [
  {
    slug: "range-rover",
    make: "Land Rover",
    model: "Range Rover",
    brand: "Land Rover",
    year: 2018,
    category: "luxury-suv",
    priceNgn: 112_000_000,
    mileageKm: 42800,
    powertrain: "Petrol",
    transmission: "Automatic",
    summary:
      "A black Range Rover, square to the camera, in front of a private garage. Height without noise.",
    description:
      "This demonstration listing uses a black Range Rover photographed at a closed entrance. It stands in for the luxury SUVs a house of this kind is asked for: a high driving position, a long body, and a face people recognise before the badge is read. The year, price, and mileage are examples, not a record of a specific car.",
    images: [
      image(
        "photo-1563720223185-11003d516935",
        "Black Range Rover facing the camera in front of a dark garage door",
        2000,
      ),
    ],
  },
  {
    slug: "bmw-7-series",
    make: "BMW",
    model: "7 Series",
    brand: "BMW",
    year: 2023,
    category: "executive-sedan",
    priceNgn: 174_000_000,
    mileageKm: 18400,
    powertrain: "Petrol",
    transmission: "Automatic",
    summary:
      "A grey 7 Series beside open water. An executive sedan with the proportion of a quiet room.",
    description:
      "The photograph shows a grey BMW 7 Series on a pale shore. In this catalogue it represents the executive sedan: long, formal, and meant for days that start before the city does. Treat the year, price, and mileage as demonstration figures. They are not a claim about a car in stock.",
    images: [
      image(
        "photo-1601362840469-51e4d8d58785",
        "Grey BMW 7 Series parked on a pale shore beside a lake",
        2000,
      ),
    ],
  },
  {
    slug: "mercedes-amg-gt",
    make: "Mercedes-AMG",
    model: "GT",
    brand: "Mercedes-Benz",
    year: 2019,
    category: "performance-coupe",
    priceNgn: 156_000_000,
    mileageKm: 21600,
    powertrain: "Petrol",
    transmission: "Dual-clutch automatic",
    summary:
      "A low bonnet and a wide grille. Three photographs of the AMG GT, in three finishes.",
    description:
      "The AMG GT is the performance coupe in this demonstration. The frames show the model line in grey, yellow, and matte black — different cars, same silhouette — so the listing is honest about what the pictures are. They are model photography, not a single vehicle waiting in a hall. The specification beside them is an example.",
    images: [
      image(
        "photo-1618843479313-40f8afb4b4d8",
        "Grey Mercedes-AMG GT with yellow brake calipers on an open lot",
        2000,
      ),
      image(
        "photo-1605559424843-9e4c228bf1c2",
        "Yellow Mercedes-AMG GT driving toward the camera on a ribbed road",
        2000,
      ),
      image(
        "photo-1617814076367-b759c7d7e738",
        "Matte black Mercedes-AMG GT parked by a harbour with yachts behind it",
        2000,
      ),
    ],
  },
  {
    slug: "porsche-911",
    make: "Porsche",
    model: "911",
    brand: "Porsche",
    year: 2018,
    category: "sports-car",
    priceNgn: 208_000_000,
    mileageKm: 16200,
    powertrain: "Petrol",
    transmission: "Manual or dual-clutch",
    summary:
      "A white 911 against snow and a high ridgeline. The sports car, with nothing extra in the silhouette.",
    description:
      "A white Porsche 911, photographed on cold asphalt with the mountains still white behind it. It is the sports car in this edited set: low, familiar, and difficult to improve by adding more. Transmission depends on the specification a buyer actually wants, so this listing does not pretend one gearbox. Year, price, and mileage are examples.",
    images: [
      image(
        "photo-1614162692292-7ac56d7f7f1e",
        "White Porsche 911 parked on asphalt with snow-covered mountains behind it",
        2200,
      ),
    ],
  },
  {
    slug: "tesla-roadster",
    make: "Tesla",
    model: "Roadster",
    brand: "Tesla",
    year: 2024,
    category: "luxury-electric",
    priceNgn: 340_000_000,
    mileageKm: null,
    powertrain: "Electric",
    transmission: "Automatic",
    summary:
      "A white Roadster on a gallery floor. An electric performance car, shown as a display example.",
    description:
      "The photograph is a Tesla Roadster in a showroom, not a car recorded with a delivery mileage. It is here so the catalogue can show how a luxury electric vehicle should be presented: one calm picture, a clear powertrain, and no invented availability. The year and price are demonstration figures for the layout.",
    images: [
      image(
        "photo-1617788138017-80ad40651399",
        "White Tesla Roadster on a showroom floor, with the Tesla name on the wall behind it",
        2000,
      ),
    ],
  },
  {
    slug: "mercedes-g-class",
    make: "Mercedes-Benz",
    model: "G-Class",
    brand: "Mercedes-Benz",
    year: 2018,
    category: "premium-off-road",
    priceNgn: 246_000_000,
    mileageKm: 33500,
    powertrain: "Petrol",
    transmission: "Automatic",
    summary:
      "A silver G-Class on a cobbled street. Upright, immediate, and already known.",
    description:
      "The G-Class is the premium off-road vehicle in this set. The picture shows a silver example on an old street, which is the point: the shape was made for difficult ground and is just as often asked to arrive in a city. Year, price, and mileage are examples for the demonstration, not a stock record.",
    images: [
      image(
        "photo-1520031441872-265e4ff70366",
        "Silver Mercedes-Benz G-Class parked on a cobbled street",
        2000,
      ),
    ],
  },
];

export const brands = ["Land Rover", "Mercedes-Benz", "BMW", "Porsche", "Tesla"];

export const browseGroups = [
  {
    id: "luxury-suv",
    title: "SUVs",
    line: "Height, calm, and a long view.",
    slug: "range-rover",
  },
  {
    id: "executive-sedan",
    title: "Sedans",
    line: "A quieter kind of authority.",
    slug: "bmw-7-series",
  },
  {
    id: "sports-car",
    title: "Sports cars",
    line: "Low, exact, unwilling to be ordinary.",
    slug: "porsche-911",
  },
  {
    id: "luxury-electric",
    title: "Electric",
    line: "Silence, with voltage behind it.",
    slug: "tesla-roadster",
  },
];

export function categoryLabel(id) {
  return categories.find((item) => item.id === id)?.label ?? id;
}

export function getVehicle(slug) {
  return vehicles.find((vehicle) => vehicle.slug === slug) ?? null;
}

export function getRelated(slug, count = 3) {
  return vehicles.filter((vehicle) => vehicle.slug !== slug).slice(0, count);
}

export function matchesPrice(priceNgn, bandId) {
  const band = priceBands.find((item) => item.id === bandId) ?? priceBands[0];
  if (band.id === "any") return true;
  if (band.id === "under-160") return priceNgn < band.max;
  if (band.id === "over-280") return priceNgn >= band.min;
  return priceNgn >= band.min && priceNgn < band.max;
}

export function filterVehicles(
  list,
  { category = "all", brand = "all", price = "any" } = {},
) {
  return list.filter((vehicle) => {
    if (category !== "all" && vehicle.category !== category) return false;
    if (brand !== "all" && vehicle.brand !== brand) return false;
    if (!matchesPrice(vehicle.priceNgn, price)) return false;
    return true;
  });
}

export function normalizeFilters({ category, brand, price }) {
  return {
    category: categories.some((item) => item.id === category) ? category : "all",
    brand: brands.includes(brand) ? brand : "all",
    price: priceBands.some((item) => item.id === price) ? price : "any",
  };
}
