export default function Mark({ compact = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="block h-1.5 w-1.5 shrink-0 bg-crimson" aria-hidden="true" />
      <span
        className={`font-medium tracking-[0.28em] sm:tracking-[0.34em] ${
          compact ? "text-[0.62rem]" : "text-[0.64rem] sm:text-[0.72rem]"
        }`}
      >
        VELOCITY MOTORS
      </span>
    </span>
  );
}
