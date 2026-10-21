import Link from "next/link";
import { dealership } from "@/lib/dealership";
import FooterSocial from "./FooterSocial";
import Mark from "./Mark";
import WhatsAppEnquiry from "./WhatsAppEnquiry";

const links = [
  { href: "/inventory", label: "Inventory" },
  { href: "/brands", label: "Brands" },
  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-obsidian text-ivory">
      <div className="shell grid gap-14 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Mark />
          <p className="mt-6 max-w-sm text-sm leading-7 text-silver">
            A fictional house for curated luxury and performance vehicles. Built as a
            demonstration of how that house should feel online.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-5 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-mist hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow">Demonstration contact</p>
          <address className="mt-5 space-y-1 text-sm leading-7 text-mist not-italic">
            {dealership.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-4 text-sm text-mist">{dealership.email}</p>
          <p className="text-xs leading-6 text-silver">{dealership.emailNote}</p>
          <p className="mt-4 text-sm text-mist">Telephone: {dealership.phoneNote}</p>
          <p className="mt-4 text-sm text-mist">{dealership.hours}</p>
          <div className="mt-6">
            <WhatsAppEnquiry className="btn btn-ghost" label="WhatsApp enquiry" />
          </div>
        </div>
      </div>

      <div className="shell flex flex-col gap-6 border-t border-white/10 py-6 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xl text-xs leading-6 text-silver">
          DoctorAutomobiles Motors is not a trading company. Vehicles are not for sale. Prices,
          mileages, and contact details are examples. Photography is from Unsplash and shows
          the models, not stock held by this demonstration.
        </p>
        <FooterSocial />
      </div>
    </footer>
  );
}
