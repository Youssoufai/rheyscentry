"use client";

import { useState } from "react";
import { createWhatsAppEnquiry } from "@/lib/whatsapp";
import Dialog from "./Dialog";

export default function WhatsAppEnquiry({
  vehicle,
  message,
  label = "Enquire on WhatsApp",
  className = "btn btn-light",
}) {
  const [open, setOpen] = useState(false);
  const enquiry = createWhatsAppEnquiry({ vehicle, message });

  if (enquiry.configured && enquiry.href) {
    return (
      <a
        href={enquiry.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {label}
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} title="WhatsApp is not connected">
        <p className="text-sm leading-7 text-mist">
          This demonstration will not open WhatsApp. The dealership number is still the
          placeholder in the site configuration, and that placeholder is not a working line.
        </p>
        <p className="mt-6 text-[0.68rem] tracking-[0.22em] uppercase text-silver">
          Prepared message
        </p>
        <p className="mt-3 text-sm leading-7 text-ivory">{enquiry.message}</p>
        <p className="mt-6 text-sm leading-7 text-silver">
          When a real international number is added, this button opens a chat with the message above.
          Nothing has been sent.
        </p>
      </Dialog>
    </>
  );
}
