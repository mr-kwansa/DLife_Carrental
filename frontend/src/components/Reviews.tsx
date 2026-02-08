type Review = {
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  avatarUrl: string;
};

const defaultReviews: Review[] = [
  {
    name: "Alicia Monroe",
    role: "Product Manager",
    location: "Atlanta, GA",
    rating: 5,
    text: "Booked a SUV in under five minutes. Clean car, clear pricing, and the drop-off was smooth. DLIFE is now my go-to for weekend trips.",
    avatarUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200",
  },
  {
    name: "Jordan Lee",
    role: "Entrepreneur",
    location: "Dallas, TX",
    rating: 5,
    text: "I needed a same-day upgrade for a client meeting. They had options ready and the pickup was fast. Great fleet and great service.",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
  },
  {
    name: "Priya Shah",
    role: "Photographer",
    location: "San Diego, CA",
    rating: 5,
    text: "Loved the transparent pricing and the protection plan. The car was spotless and had plenty of space for my gear.",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
  },
  {
    name: "Marcus Alvarez",
    role: "Consultant",
    location: "Chicago, IL",
    rating: 4,
    text: "Easy booking, solid communication, and no surprises at pickup. I appreciate the flexible change options.",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
  },
];

const Stars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${
            index < rating ? "text-amber-400" : "text-gray-300"
          }`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.154c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.36-2.444a1 1 0 00-1.176 0l-3.36 2.444c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.17 9.382c-.783-.57-.38-1.81.588-1.81h4.154a1 1 0 00.95-.69l1.286-3.955z" />
        </svg>
      ))}
    </div>
  );
};

const Reviews = ({ reviews = defaultReviews }: { reviews?: Review[] }) => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3">
              Reviews
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold">
              Drivers love the DLIFE experience
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl">
              Real feedback from customers who book with us for road trips,
              work travel, and family weekends.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4">
            <p className="text-sm text-gray-500">Average rating</p>
            <div className="flex items-center gap-3">
              <p className="text-3xl font-bold text-gray-900">4.9</p>
              <Stars rating={5} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatarUrl}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">
                    {review.role} · {review.location}
                  </p>
                </div>
              </div>
              <Stars rating={review.rating} />
              <p className="text-gray-600 mt-4 leading-relaxed">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
