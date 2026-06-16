import { Star, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    header: 'Commercial Courier Review',
    placeholder:
      '[Placeholder for verified client quote regarding a Tony Drives 24-hour rush delivery or commercial route in Anderson/Greenville/Spartanburg]',
    attribution: 'Client Name / Company, Upstate SC',
  },
  {
    header: 'Facebook Marketplace Pickup Review',
    placeholder:
      '[Placeholder for verified customer quote regarding bulky item transit, furniture loading, or direct-to-consumer delivery support from Tony Drives]',
    attribution: 'Customer Name, Local Route',
  },
  {
    header: 'Scheduled Route Delivery Review',
    placeholder:
      '[Placeholder for verified supervisor, rideshare client, or business manager text regarding routine scheduled drops or safe asset transportation]',
    attribution: 'Logistics Partner',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding" aria-labelledby="testimonials-heading">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mx-auto mb-4">
            <Star className="w-3 h-3" />
            Testimonials
          </div>
          <h2 id="testimonials-heading" className="heading-primary mb-4">
            Client Reviews & <span className="text-gradient">Feedback</span>
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            Verified client feedback from across the Upstate delivery network.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <article
              key={t.header}
              className="card-base card-hover p-8 space-y-5"
              aria-label={t.header}
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center gap-2 text-amber-500" aria-hidden="true">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {t.header}
                </span>
              </div>
              <blockquote
                className="border-l-2 border-amber-500/30 pl-4"
                itemProp="reviewBody"
              >
                <p className="text-navy-600 italic text-sm leading-relaxed">
                  {t.placeholder}
                </p>
              </blockquote>
              <footer>
                <cite className="text-xs text-navy-700 font-medium not-italic" itemProp="author">
                  — {t.attribution}
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
