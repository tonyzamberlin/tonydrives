import { Shield } from 'lucide-react';

const stats = [
  { icon: Shield, value: '21+', label: 'Years Experience' },
  { icon: Shield, value: '24/7', label: 'Rush Service Available' },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-navy-800/50"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Stats */}
          <dl className="grid grid-cols-2 gap-4" aria-label="Tony Drives key statistics">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`card-base p-6 text-center card-hover${i === stats.length - 1 && stats.length % 2 !== 0 ? ' col-span-2' : ''}`}>
                <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-3" aria-hidden="true" />
                <dd className="text-3xl font-bold text-white" itemProp={stat.label === 'Years Experience' ? 'foundingDate' : undefined}>
                  {stat.value}
                </dd>
                <dt className="text-xs text-navy-600 mt-1">{stat.label}</dt>
              </div>
            ))}
          </dl>

          {/* Right — Text */}
          <div className="space-y-6">
            <div className="badge">
              <Shield className="w-3 h-3" />
              About Tony Drives
            </div>
            <h2 id="about-heading" className="heading-primary">
              Dependable Transport from a{' '}
              <span className="text-gradient">Proud Veteran-Owned Business</span>
            </h2>
            <p className="text-navy-600 leading-relaxed" itemProp="description">
              Tony Drives is a highly disciplined, veteran-owned transport service founded by
              professional driver{' '}
              <span itemProp="founder" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">Tony Zamberlin</span>
              </span>
              . Bringing over 21 years of flawless operational experience on South Carolina
              roadways and interstate lanes, Tony specializes strictly in professional delivery
              driving, precision vehicle handling, and high-standard package and product transport.
            </p>
            <p className="text-navy-600 leading-relaxed">
              We excel in urgent time-critical hotshots, routine scheduled contracts, heavy
              physical loading, and close-proximity urban maneuvering across the{' '}
              <span itemProp="areaServed">Anderson, Greenville, and Spartanburg</span> regions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
