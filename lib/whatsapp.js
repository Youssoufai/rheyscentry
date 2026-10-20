import { dealership } from "./dealership.js";
import { formatNgn } from "./format.js";

/**
 * A configured number is 8–15 digits, country code included, with no plus sign.
 * The documented placeholder and any empty value are treated as not configured.
 */
export function isConfiguredWhatsAppNumber(number = dealership.whatsappNumber) {
  return /^\d{8,15}$/.test(String(number || ""));
}

export function vehicleEnquiryMessage(vehicle) {
  const price = formatNgn(vehicle.priceNgn);
  return `Hello ${dealership.name}, I would like to enquire about the demonstration listing for the ${vehicle.year} ${vehicle.make} ${vehicle.model} (reference: ${vehicle.slug}, example price ${price}).`;
}

export function generalEnquiryMessage() {
  return `Hello ${dealership.name}, I would like to enquire about a vehicle.`;
}

/**
 * Build a WhatsApp enquiry without opening a link.
 * `href` is empty when the dealership number has not been configured.
 */
export function createWhatsAppEnquiry({
  vehicle,
  message,
  number = dealership.whatsappNumber,
} = {}) {
  const text = message
    ? message
    : vehicle
      ? vehicleEnquiryMessage(vehicle)
      : generalEnquiryMessage();
  const configured = isConfiguredWhatsAppNumber(number);
  const digits = String(number || "").replace(/\D/g, "");

  return {
    configured,
    message: text,
    href: configured
      ? `https://wa.me/${digits}?text=${encodeURIComponent(text)}`
      : "",
  };
}
