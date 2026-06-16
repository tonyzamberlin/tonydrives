import { Clock, Calendar, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: Clock,
    title: '24-Hour Rush Deliveries',
    description:
      'Round-the-clock, ultra-urgent courier services for businesses, medical assets, legal documents, or critical parts that need to get across the Upstate immediately.',
    accent: 'from-red-500/20 to-amber-500/20',
    iconBg: 'bg-red-500/10 border-red-500/20',
    iconColor: 'text-red-400',
  },
  {
    icon: Calendar,
    title: 'Scheduled Deliveries & Routes',
    description:
      'Reliable, pre-planned delivery options for recurring routes, commercial distribution, or retail drop-offs tailored completely around your personal timeline.',
    accent: 'from-blue-500/20 to-amber-500/20',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: ShoppingCart,
    title: 'Facebook Marketplace Pickup & Delivery',
    description:
      'Eliminating the hassle of buying large items online. Secure loading, transit, and door-to-door delivery for furniture, appliances, electronics, and bulky items.',
    accent: 'from-green-500/20 to-amber-500/20',
    iconBg: 'bg-green-500/10 border-green-500/20',
    iconColor: 'text-green-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mx-auto mb-4">
            <Clock className="w-3 h-3" />
            Core Services
          </div>
          <h2 className="heading-primary mb-4">
            Focused <span className="text-gradient">Service Offerings</span>
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            High-impact delivery solutions tailored to the Upstate South Carolina region.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-base card-hover p-8 relative overflow-hidden group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative space-y-5">
                <div
                  className={`w-14 h-14 rounded-xl border ${service.iconBg} flex items-center justify-center`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-navy-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
