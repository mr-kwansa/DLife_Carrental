export type ContentStat = {
  label: string;
  value: string;
};

export type ContentSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  stats?: ContentStat[];
  imageUrl?: string;
  imageAlt?: string;
  reverse?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  tone?: "light" | "muted";
};

const toneStyles = {
  light: "bg-white text-gray-900",
  muted: "bg-gray-50 text-gray-900",
};

const ContentSectionBase = ({
  eyebrow,
  title,
  description,
  bullets,
  stats,
  imageUrl,
  imageAlt,
  reverse,
  ctaLabel,
  ctaHref,
  tone = "light",
}: ContentSectionProps) => {
  return (
    <section className={`${toneStyles[tone]} py-16 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${reverse ? "lg:order-2" : ""}`}>
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              {description}
            </p>

            {bullets && bullets.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-600" />
                    <p className="text-sm text-gray-700">{bullet}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {stats && stats.length > 0 ? (
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {ctaLabel ? (
              <div className="mt-8">
                <a
                  href={ctaHref ?? "#"}
                  className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-red-700 transition-colors"
                >
                  {ctaLabel}
                </a>
              </div>
            ) : null}
          </div>

          {imageUrl ? (
            <div className={`${reverse ? "lg:order-1" : ""}`}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={imageUrl}
                  alt={imageAlt ?? "Car rental experience"}
                  className="w-full h-[360px] lg:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ContentSectionBase;
