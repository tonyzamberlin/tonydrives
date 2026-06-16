import { Car, Package, Users } from 'lucide-react';

const metrics = [
  {
    icon: Car,
    role: 'Precision Driver & Transport Operator',
    years: '21+',
    detail:
      'Years of experience in high-stakes transport, defensive driving, and precision vehicle positioning.',
  },
  {
    icon: Package,
    role: 'Delivery Driver Specialist',
    years: '21+',
    detail:
      'Years of commercial local hauling, route logistics, asset security, and tight delivery timeline fulfillment.',
  },
  {
    icon: Users,
    role: 'Rideshare Driver Experience',
    years: '21+',
    detail:
      'Years of high-level passenger transport, close-proximity urban navigation, and premier customer service across South Carolina.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-navy-800/50" aria-labelledby="experience-heading">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mx-auto mb-4">
            <Car className="w-3 h-3" />
            Experience
          </div>
          <h2 id="experience-heading" className="heading-primary mb-4">
            Driving Experience <span className="text-gradient">Overview</span>
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            Over two decades of proven, accident-free professional driving across South Carolina.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric) => (
            <article
              key={metric.role}
              className="card-base card-hover p-8 space-y-5"
              aria-label={`${metric.role}: ${metric.years} years`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <metric.icon className="w-6 h-6 text-amber-500" />
                </div>
                <div className="text-4xl font-bold text-gradient" aria-label={`${metric.years} years`}>
                  {metric.years}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{metric.role}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{metric.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
