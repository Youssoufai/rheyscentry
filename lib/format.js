export function formatNgn(amount) {
  const formatted = new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0,
  }).format(amount);
  return `₦${formatted}`;
}

export function formatKm(km) {
  return `${new Intl.NumberFormat("en-NG").format(km)} km`;
}
