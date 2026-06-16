import { Clock, Calendar, Truck, Shield, ArrowRight } from 'lucide-react';

const galleryItems = [
  {
    icon: Clock,
    title: '24-Hour Rush & Urgent Courier Transport',
    subtitle: 'Around-the-clock emergency delivery',
    gradient: 'from-red-900/40 to-navy-900/40',
    accent: 'text-red-400',
    accentBorder: 'border-red-500/20',
  },
  {
    icon: Calendar,
    title: 'Scheduled Route Operations & Business Deliveries',
    subtitle: 'Reliable pre-planned distribution',
    gradient: 'from-blue-900/40 to-navy-900/40',
    accent: 'text-blue-400',
    accentBorder: 'border-blue-500/20',
  },
  {
    icon: Truck,
    title: 'F-250 Truck & Trailer Heavy Hauling',
    subtitle: 'Marketplace pickups & oversized cargo',
    gradient: 'from-amber-900/40 to-navy-900/40',
    accent: 'text-amber-400',
    accentBorder: 'border-amber-500/20',
  },
  {
    icon: Shield,
    title: 'Secure Asset Loading & Fleet Operations',
    subtitle: 'Professional handling & logistics',
    gradient: 'from-green-900/40 to-navy-900/40',
    accent: 'text-green-400',
    accentBorder: 'border-green-500/20',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-navy-800/50">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mx-auto mb-4">
            <Truck className="w-3 h-3" />
            Gallery
          </div>
          <h2 className="heading-primary mb-4">
            Service <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            Visual showcase of Tony Drives operations across the Upstate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group cursor-pointer"
            >
              <div className={`relative min-h-[260px] rounded-xl overflow-hidden border ${item.accentBorder} card-hover`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

                {/* Placeholder grid pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }} />

                {/* Content overlay */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-black/30 border ${item.accentBorder} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-8 h-8 ${item.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-navy-600">{item.subtitle}</p>
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-medium ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    View <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
