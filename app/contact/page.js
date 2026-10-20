import { Suspense } from "react";
import ContactEnquiry from "@/components/ContactEnquiry";
import { dealership } from "@/lib/dealership";

export const metadata = {
  title: "Contact",
  description:
    "Enquire with the Velocity Motors demonstration. The form is not connected to an inbox, and the contact details are examples.",
};

export default function ContactPage() {
  return (
    <div className="pt-[var(--header-h)]">
      <div className="shell grid gap-14 py-16 md:py-24 lg:grid-cols-12">
        <header className="lg:col-span-5">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-display text-5xl leading-[0.92] sm:text-7xl">
            A direct question is enough.
          </h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-silver">
            Tell us who you are, how to reach you, and the kind of vehicle you have in mind.
            This page will show you what you wrote. It will not transmit it.
          </p>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="eyebrow">Demonstration details</p>
            <address className="mt-4 space-y-1 text-sm leading-7 text-mist not-italic">
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
          </div>
        </header>

        <div className="lg:col-span-7">
          <Suspense fallback={<div className="min-h-80 bg-ink" />}>
            <ContactEnquiry />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
