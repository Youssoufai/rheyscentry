"use client";

import { useSearchParams } from "next/navigation";
import { getVehicle } from "@/lib/vehicles";
import EnquiryForm from "./EnquiryForm";

export default function ContactEnquiry() {
  const params = useSearchParams();
  const vehicle = getVehicle(params.get("vehicle") || "");

  return <EnquiryForm key={vehicle?.slug || "general"} preset={vehicle} />;
}
