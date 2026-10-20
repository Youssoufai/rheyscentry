"use client";

import { useState } from "react";
import { dealership } from "@/lib/dealership";
import Dialog from "./Dialog";

export default function FooterSocial() {
  const [notice, setNotice] = useState("");

  return (
    <>
      <ul className="flex flex-wrap gap-x-6 gap-y-3">
        {dealership.social.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                className="text-[0.68rem] tracking-[0.22em] uppercase text-silver hover:text-ivory"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <button
                type="button"
                className="text-[0.68rem] tracking-[0.22em] uppercase text-silver hover:text-ivory"
                onClick={() =>
                  setNotice(
                    `${item.label} is not connected in this demonstration. Add the profile address in the site configuration before launch.`,
                  )
                }
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ul>
      <Dialog open={Boolean(notice)} onClose={() => setNotice("")} title="Profile not connected">
        <p className="text-sm leading-7 text-mist">{notice}</p>
      </Dialog>
    </>
  );
}
