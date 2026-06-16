import { Car, Truck } from 'lucide-react';

const vehicles = [
  {
    icon: Car,
    title: '2019 Kia Sedona Minivan',
    capability:
      'Rapid, secure, weather-proof transit. Ideal for express 24-hour rush deliveries, high-priority courier packages, medical or legal assets, and medium-sized Marketplace electronics or goods.',
    placeholderLabel: 'Kia Sedona Photo',
  },
  {
    icon: Truck,
    title: 'Ford F-250 Pickup Truck (with Trailer)',
    capability:
      'Heavy-duty hauling and high-capacity loading. Perfect for oversized Facebook Marketplace pickups, scheduled furniture and appliance distribution, building materials, and large-scale cargo across Upstate SC terrain.',
    placeholderLabel: 'F-250 Truck & Trailer Photo',
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="section-padding bg-navy-800/50" aria-labelledby="fleet-heading">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mx-auto mb-4">
            <Truck className="w-3 h-3" />
            Our Fleet
          </div>
          <h2 id="fleet-heading" className="heading-primary mb-4">
            Current Fleet & <span className="text-gradient">Capability</span>
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            Delivery assets ready to roll across the Upstate of South Carolina.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {vehicles.map((vehicle) => (
            <article
              key={vehicle.title}
              className="card-base card-hover overflow-hidden group"
              aria-label={vehicle.title}
              itemScope
              itemType="https://schema.org/Vehicle"
            >
              {/* Image Placeholder */}
              <div
                className="image-placeholder min-h-[240px] md:min-h-[300px] rounded-none rounded-t-xl flex-col gap-3 border-x-0 border-t-0 border-amber-500/10"
                role="img"
                aria-label={`Photo placeholder for ${vehicle.title}`}
              >
                <vehicle.icon className="w-16 h-16 text-amber-500/30" aria-hidden="true" />
                <span className="text-navy-600 font-medium">{vehicle.placeholderLabel}</span>
                <span className="text-navy-700 text-xs">Drop your vehicle photo here</span>
              </div>

              {/* Details */}
              <div className="p-6 md:p-8 space-y-3">
                <h3 className="text-xl font-bold text-white" itemProp="name">{vehicle.title}</h3>
                <p className="text-navy-600 leading-relaxed text-sm" itemProp="description">{vehicle.capability}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
