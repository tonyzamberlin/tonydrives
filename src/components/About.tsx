import { Shield, Award, Route } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-navy-800/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Visual */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="card-base p-6 text-center card-hover">
                <Shield className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">21+</div>
                <div className="text-xs text-navy-600 mt-1">Years Experience</div>
              </div>
              <div className="card-base p-6 text-center card-hover">
                <Award className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">0</div>
                <div className="text-xs text-navy-600 mt-1">Accidents</div>
              </div>
              <div className="card-base p-6 text-center card-hover">
                <Route className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-xs text-navy-600 mt-1">Upstate Counties</div>
              </div>
              <div className="card-base p-6 text-center card-hover">
                <Shield className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-xs text-navy-600 mt-1">Rush Available</div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="space-y-6">
            <div className="badge">
              <Shield className="w-3 h-3" />
              About Tony Drives
            </div>
            <h2 className="heading-primary">
              Dependable Transport from a{' '}
              <span className="text-gradient">Proud Veteran-Owned Business</span>
            </h2>
            <p className="text-navy-600 leading-relaxed">
              Tony Drives is a highly disciplined, veteran-owned transport service founded by
              professional driver Tony Zamberlin. Bringing over 21 years of flawless operational
              experience on South Carolina roadways and interstate lanes, Tony specializes
              strictly in professional delivery driving, precision vehicle handling, and
              high-standard passenger transport.
            </p>
            <p className="text-navy-600 leading-relaxed">
              We excel in urgent time-critical hotshots, routine scheduled contracts, heavy
              physical loading, and close-proximity urban maneuvering across the Anderson,
              Greenville, and Spartanburg regions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
