import { Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Stelton+Lumber+Co/@40.539468,-74.42297,16z/data=!4m8!3m7!1s0x89c3c7f61cdca3cb:0xdc701739f085f5ef!8m2!3d40.5394676!4d-74.4229698!9m1!1b1!16s%2Fg%2F1tqtbm8w?hl=en&entry=ttu";

const reviews = [
  {
    text: "Very helpful staff had everything I needed and were extremely knowledgeable on making material recommendations. Purchased items were of very high quality. I will definitely be coming back next time I have a home project to do!",
    date: "2020",
  },
  {
    text: "Great place! I love the personal experience. Carmine is the best",
    date: "2020",
  },
  {
    text: "Nice guy at the front desk helpful loading guy on the fork in the yard.. just make sure you measure right and have an idea of what you want",
    date: "2021",
  },
  {
    text: "Very friendly willing to help in any way possible. Highly recommend this place",
    date: "2021",
  },
];

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < Math.floor(rating)) {
          // Full star
          return <Star key={i} className="h-5 w-5 fill-primary text-primary" />;
        }
        if (i < rating) {
          // Half star — clip the fill to 50%
          return (
            <span key={i} className="relative h-5 w-5">
              <Star className="absolute inset-0 h-5 w-5 text-primary" />
              <span className="absolute inset-0 overflow-hidden w-[50%]">
                <Star className="h-5 w-5 fill-primary text-primary" />
              </span>
            </span>
          );
        }
        // Empty star
        return <Star key={i} className="h-5 w-5 text-text-muted/20" />;
      })}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <Stars rating={4.5} />
            <span className="font-heading text-2xl font-bold text-text-main">
              4.5
            </span>
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-text-main">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-text-muted text-lg">
            Real reviews from our Google Business profile.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {reviews.map((review, i) => (
            <blockquote
              key={i}
              className="rounded-xl bg-bg p-6 shadow-sm"
            >
              <Stars />
              <p className="mt-4 text-text-muted leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-3 text-xs text-text-muted/60">
                Google Review &middot; {review.date}
              </p>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            Read All Reviews on Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
