import ContentSectionBase from "./ContentSectionBase";

const WhyDlifeSection = () => {
  return (
    <ContentSectionBase
      eyebrow="Why DLIFE"
      title="Built for modern drivers who value time and clarity."
      description="From smart search filters to lightning-fast pickup, DLIFE removes the friction from renting a car. Every booking includes transparent pricing, flexible changes, and real-time support."
      bullets={[
        "Instant confirmation with no hidden fees",
        "Flexible pickup windows at key locations",
        "Optional protection plans that are easy to understand",
        "24/7 roadside assistance with live agents",
      ]}
      stats={[
        { label: "Average pickup time", value: "8 mins" },
        { label: "Repeat customer rate", value: "62%" },
        { label: "Fleet options", value: "120+ models" },
      ]}
      imageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200"
      imageAlt="Sports car on a scenic road"
      tone="muted"
    />
  );
};

export default WhyDlifeSection;
