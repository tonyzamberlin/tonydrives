import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="border-t border-navy-700/50 py-8"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="Tony Drives — Courier & Delivery Services"
              className="h-12 w-auto rounded-md"
              itemProp="logo"
            />
            <div>
              <span className="sr-only" itemProp="name">Tony Drives</span>
              <div className="text-xs text-navy-600" itemProp="description">
                Professional Commercial Driver & Local Delivery Specialist
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-navy-600">
            <Shield className="w-3 h-3 text-amber-500" aria-hidden="true" />
            <span>Veteran-Owned & Operated by{' '}
              <span itemProp="founder">Tony Zamberlin</span>
            </span>
          </div>

          <address className="not-italic text-xs text-navy-700" itemProp="areaServed">
            Upstate South Carolina
          </address>
        </div>

        <div className="mt-6 pt-6 border-t border-navy-700/30 text-center">
          <p className="text-xs text-navy-700">
            <small>&copy; {new Date().getFullYear()} Tony Drives. All rights reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  );
}
