import ContentSectionBase from "./ContentSectionBase";

const FlexiblePlansSection = () => {
  return (
    <ContentSectionBase
      eyebrow="Flexible Plans"
      title="Short trips, long drives, and everything in between."
      description="Choose the rental plan that matches your schedule. Switch vehicles, add drivers, and extend your booking straight from your dashboard."
      bullets={[
        "Hourly, daily, and weekly plans",
        "One-way rentals between major cities",
        "Unlimited mileage options on select vehicles",
        "Easy extensions without rebooking",
      ]}
      stats={[
        { label: "Cities covered", value: "35+" },
        { label: "On-time returns", value: "97%" },
        { label: "Live support response", value: "< 2 mins" },
      ]}
      imageUrl="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200"
      imageAlt="Car parked in an urban setting"
      reverse
      tone="light"
    />
  );
};

export default FlexiblePlansSection;
