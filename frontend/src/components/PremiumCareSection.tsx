import ContentSectionBase from "./ContentSectionBase";

const PremiumCareSection = () => {
  return (
    <ContentSectionBase
      eyebrow="Premium Care"
      title="Every vehicle is inspected, detailed, and road-ready."
      description="We go beyond a simple wash. DLIFE vehicles are inspected for safety, cleaned inside and out, and equipped with the essentials you need for the trip."
      bullets={[
        "Multi-point safety inspection before every pickup",
        "Contactless check-in available",
        "Free phone mounts and charging cables",
        "GPS and toll tags available on request",
      ]}
      stats={[
        { label: "Average vehicle age", value: "2.1 yrs" },
        { label: "Cleanliness score", value: "4.9/5" },
        { label: "Vehicles inspected weekly", value: "100%" },
      ]}
      imageUrl="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200"
      imageAlt="Luxury car interior"
      tone="muted"
    />
  );
};

export default PremiumCareSection;
