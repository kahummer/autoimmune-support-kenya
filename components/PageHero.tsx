export default function PageHero({
  eyebrow,
  title,
  subtitle,
  tone = "violet",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  tone?: "violet" | "coral";
}) {
  const bg = tone === "coral" ? "bg-coral" : "bg-violet-deep";
  return (
    <section className={`${bg} text-white`}>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 text-center">
        {eyebrow && (
          <p className="font-bold uppercase tracking-[0.25em] text-sm text-white/80">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold leading-tight">
          {title}
        </h1>
        <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
