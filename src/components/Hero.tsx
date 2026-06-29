import { ArrowRight, Clock, Shield, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              <div className="badge">
                <Shield className="w-3 h-3" />
                Military Veteran-Owned Business
              </div>
              <div className="badge">
                <Clock className="w-3 h-3" />
                24-Hour Service
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="heading-primary">
                Military Veteran-Owned{' '}
                <span className="text-gradient">24-Hour Rush Delivery</span>,
                Courier & Scheduled Transport
              </h1>
              <div className="flex items-center gap-2 text-amber-500 font-semibold">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  Serving the Upstate of South Carolina — Anderson, Greenville & Clemson
                </span>
              </div>
            </div>

            <p className="text-base md:text-lg text-navy-600 leading-relaxed max-w-2xl">
              With over 21 years of professional driving experience, Tony Drives
              offers elite local transport services. We specialize in high-priority 24-hour rush
              courier logistics and time-sensitive deliveries, while also offering convenient
              scheduled route services and direct Facebook Marketplace pickup assistance.
            </p>

            <div className="text-sm font-medium text-white/80">
              Lead Specialist:{' '}
              <span className="text-amber-500 font-semibold">Tony Zamberlin</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#quote" className="btn-primary gap-2">
                Get a Free Quote Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-secondary gap-2">
                Book 24/7 Rush Courier
              </a>
              <a href="#contact" className="btn-secondary gap-2">
                Schedule a Delivery
              </a>
            </div>
          </div>

          {/* Right — Fleet Photo */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-500/5 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl">
                <img
                  src="/May_17,_2026,_11_03_17_PM.png"
                  alt="Tony Drives fleet — white Kia Sedona van and Ford F-250 with trailer"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-sm">The Tony Drives Fleet</div>
                      <div className="text-amber-500 text-xs">Kia Sedona Van + F-250 with Trailer</div>
                    </div>
                    <div className="flex gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold text-gradient">21+</div>
                        <div className="text-[10px] text-white/60">Yrs Exp.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
