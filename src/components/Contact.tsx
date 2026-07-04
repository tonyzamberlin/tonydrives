import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const socials = [
  {
    name: 'TikTok',
    handle: '@tonydriver864',
    description: 'Driving, local routes, and great-energy content',
    href: 'https://tiktok.com/@tonydriver864',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20',
  },
  {
    name: 'Facebook',
    handle: '/tonydrives864',
    description: 'Connect with Tony on Facebook',
    href: 'https://facebook.com/tonydrives864',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-navy-800/50" aria-labelledby="contact-heading">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mx-auto mb-4">
            <MapPin className="w-3 h-3" />
            Contact
          </div>
          <h2 id="contact-heading" className="heading-primary mb-4">
            Contact & <span className="text-gradient">Social Channels</span>
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            Need a dependable, highly trained driver across Anderson, Greenville, and Clemson?
            Reach out today to secure Tony Drives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Direct Contact */}
          <div className="card-base p-6 md:p-8 space-y-5 card-hover">
            <h3 className="text-lg font-bold text-white">Direct Contact</h3>
            <address className="not-italic space-y-4">
              <a
                href="tel:+18648447137"
                className="flex items-center gap-3 group"
                aria-label="Call Tony Drives by phone"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors" aria-hidden="true">
                  <Phone className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs text-navy-600">Call or Text</div>
                  <div className="text-white font-medium group-hover:text-amber-500 transition-colors text-sm">
                    (864) 844-7137
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Mail className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs text-navy-600">Email</div>
                  <a
                    href="mailto:tony@tonydrives.com"
                    className="text-white font-medium hover:text-amber-500 transition-colors text-sm"
                    aria-label="Email Tony Drives at tony@tonydrives.com"
                  >
                    tony@tonydrives.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs text-navy-600">Service Area</div>
                  <div className="text-white font-medium text-sm">
                    Upstate South Carolina
                  </div>
                </div>
              </div>
            </address>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-2 card-base p-6 md:p-8 space-y-5 card-hover">
            <h3 className="text-lg font-bold text-white">Social Channels</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-base p-4 group hover:border-amber-500/20"
                  aria-label={`Visit Tony Drives on ${social.name} — ${social.handle}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-lg border ${social.bg} flex items-center justify-center`} aria-hidden="true">
                      <ExternalLink className={`w-3.5 h-3.5 ${social.color}`} />
                    </div>
                    <span className="text-sm font-bold text-white">{social.name}</span>
                  </div>
                  <div className="text-xs text-navy-600 mb-1">{social.description}</div>
                  <div className={`text-sm font-semibold ${social.color}`}>
                    {social.handle}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
