import { Suspense } from "react";
import InventoryBrowser from "@/components/InventoryBrowser";

export const metadata = {
  title: "Inventory",
  description:
    "Demonstration catalogue of six luxury and performance vehicles. Filter by category, brand, and price. Not live stock.",
};

export default function InventoryPage() {
  return (
    <Suspense fallback={<div className="min-h-[70vh] bg-obsidian" />}>
      <InventoryBrowser />
    </Suspense>
  );
}
