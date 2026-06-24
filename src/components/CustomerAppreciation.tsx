import { Heart } from 'lucide-react';

const photos = [
  {
    src: '/images/appreciation/web-thank-you-snacks.jpg',
    alt: 'Customer thank-you basket of snacks and drinks left out for delivery drivers',
  },
  {
    src: '/images/appreciation/web-thank-you-holidays.jpg',
    alt: 'Handwritten holiday thank-you note and treats left for Tony by a grateful customer',
  },
];

export default function CustomerAppreciation() {
  return (
    <section
      id="customer-appreciation"
      className="section-padding"
      aria-labelledby="appreciation-heading"
    >
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mx-auto mb-4">
            <Heart className="w-3 h-3" />
            Customer Appreciation
          </div>
          <h2 id="appreciation-heading" className="heading-primary mb-4">
            Customer <span className="text-gradient">Appreciation</span>
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            Reliable service builds real relationships. These are a few of the
            thank-you notes and treats customers have left out to show their
            appreciation along the route.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative min-h-[300px] md:min-h-[380px] rounded-xl overflow-hidden border border-navy-700/50 card-hover bg-navy-900/50"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
