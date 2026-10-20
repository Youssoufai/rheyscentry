import Link from "next/link";
import Photo from "@/components/Photo";
import { media } from "@/lib/media";

export const metadata = {
  title: "Our Story",
  description:
    "Velocity Motors is a fictional demonstration of how a luxury automotive house can present selection, photography, and enquiry.",
};

export default function StoryPage() {
  return (
    <article className="pt-[var(--header-h)]">
      <header className="shell py-16 md:py-24">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-4 max-w-[12ch] font-display text-5xl leading-[0.9] sm:text-7xl md:text-8xl">
          The list is the work.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-mist">
          A demonstration house. Not a showroom you can visit, and not a yard of cars waiting
          for a deposit.
        </p>
      </header>

      <figure>
        <div className="relative min-h-[24rem] bg-graphite sm:min-h-[36rem]">
          <Photo src={media.story.src} alt={media.story.alt} sizes="100vw" className="object-[center_40%]" />
        </div>
        <figcaption className="shell py-4 text-xs leading-6 text-silver">
          Rolls-Royce Wraith. Atmosphere for this chapter, not a listed car.
        </figcaption>
      </figure>

      <div className="shell grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <p className="font-display text-3xl leading-snug italic sm:text-4xl">
            Most automotive sites behave like a yard. A buyer at this level is not browsing a yard.
          </p>
        </div>
        <div className="space-y-6 text-sm leading-8 text-mist md:col-span-6 md:col-start-7">
          <p>
            Velocity Motors presents a small number of luxury and performance vehicles. The point
            is not to show everything. The point is to show a machine clearly enough that a
            person can decide whether to ask about it.
          </p>
          <p>
            The house is fictional. It is not a registered dealership, it holds no manufacturer
            appointment, and it has inspected nothing. The catalogue, the prices in naira, and
            the contact details exist so a real business can see how its own cars could be
            presented — and so a visitor is never asked to believe a car is for sale.
          </p>
          <p>
            Selection comes first. A car earns a place when there is a reason to talk about it:
            the way it looks, the way it will be used, the condition a buyer should expect to
            discuss. Presentation follows with a large photograph and a short specification,
            marked as an example until a real vehicle replaces it. Service is a conversation.
            The form on this site does not send a message. On a live site it would reach the
            house, and WhatsApp would open a number the house actually answers.
          </p>
          <p>
            If you sell cars at this level, the website should feel like the car: edited,
            physical, and unwilling to shout.
          </p>
          <Link href="/contact#enquiry" className="btn btn-light mt-4 w-full sm:w-auto">
            Begin an enquiry
          </Link>
        </div>
      </div>
    </article>
  );
}
