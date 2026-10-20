import { formatKm, formatNgn } from "@/lib/format";

export function DemoPrice({ amount, light = false, size = "text-3xl" }) {
  return (
    <p>
      <span className={`font-display ${size} leading-none`}>{formatNgn(amount)}</span>
      <span
        className={`mt-2 block text-[0.62rem] tracking-[0.22em] uppercase ${
          light ? "text-steel" : "text-silver"
        }`}
      >
        Demonstration price
      </span>
    </p>
  );
}

export function SpecList({ vehicle, light = false }) {
  const rows = [
    ["Model year", String(vehicle.year)],
    ["Powertrain", vehicle.powertrain],
    ["Transmission", vehicle.transmission],
  ];

  if (vehicle.mileageKm != null) {
    rows.push(["Mileage", formatKm(vehicle.mileageKm)]);
  }

  return (
    <div>
      <p className={`eyebrow ${light ? "!text-steel" : ""}`}>Example specification</p>
      <dl className="mt-3">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className={`flex items-baseline justify-between gap-6 border-t py-3 text-sm ${
              light ? "border-black/10" : "border-white/10"
            }`}
          >
            <dt className={`text-[0.68rem] tracking-[0.16em] uppercase ${light ? "text-steel" : "text-silver"}`}>
              {label}
            </dt>
            <dd className="text-right">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
