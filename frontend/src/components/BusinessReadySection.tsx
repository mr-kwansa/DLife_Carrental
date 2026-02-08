import ContentSectionBase from "./ContentSectionBase";

const BusinessReadySection = () => {
  return (
    <ContentSectionBase
      eyebrow="Business Ready"
      title="Corporate travel that feels seamless."
      description="Give your team a reliable way to get moving. DLIFE Business offers consolidated billing, priority support, and curated fleets for every role."
      bullets={[
        "Centralized billing with monthly invoices",
        "Priority pickup lanes for business accounts",
        "Dedicated account manager",
        "Custom fleet mix for teams and clients",
      ]}
      stats={[
        { label: "Business partners", value: "240+" },
        { label: "Support satisfaction", value: "98%" },
        { label: "Avg. booking lead time", value: "10 mins" },
      ]}
      imageUrl="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200"
      imageAlt="Driver stepping into a car"
      reverse
      tone="light"
      ctaLabel="Explore Business Plans"
      ctaHref="#"
    />
  );
};

export default BusinessReadySection;
