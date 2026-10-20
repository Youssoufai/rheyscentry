import Reveal from "./Reveal";

const principles = [
  {
    number: "01",
    title: "Selection",
    copy: "A short list. A car is presented when it has a clear reason to be there: condition worth discussing, a shape with character, and a use a person can name. We do not borrow a manufacturer’s authority, and we do not invent an inspection we have not made.",
  },
  {
    number: "02",
    title: "Presentation",
    copy: "One photograph large enough to judge the car. A description in plain language. The specification a conversation needs, marked as an example until a real vehicle replaces it. Nothing is hidden behind a badge or a countdown.",
  },
  {
    number: "03",
    title: "Service",
    copy: "An enquiry goes to a person, not a queue of automated replies. On this demonstration the form stays on the screen and WhatsApp waits for a real number. A live house would answer directly, and take the time the decision deserves.",
  },
];

export default function VelocityStandard() {
  return (
    <section className="bg-paper py-20 text-obsidian md:py-28" aria-labelledby="standard-heading">
      <div className="shell">
        <Reveal>
          <p className="eyebrow !text-steel">The Velocity standard</p>
          <h2 id="standard-heading" className="mt-4 max-w-[14ch] font-display text-5xl leading-[0.92] sm:text-6xl md:text-7xl">
            How a car earns its place.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {principles.map((item, index) => (
            <Reveal key={item.number} delay={index * 80}>
              <article>
                <p className="font-display text-5xl text-crimson">{item.number}</p>
                <h3 className="mt-4 font-display text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
