import Link from "next/link";

export const metadata = {
  title: "Page not found",
  description: "This page is not part of the Velocity Motors demonstration.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col justify-end px-5 pb-20 pt-32 sm:px-10">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 max-w-[12ch] font-display text-6xl leading-[0.9] sm:text-8xl">
        This page is not in the house.
      </h1>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-light w-full sm:w-auto">
          Return home
        </Link>
        <Link href="/inventory" className="btn btn-ghost w-full sm:w-auto">
          View the collection
        </Link>
      </div>
    </div>
  );
}
