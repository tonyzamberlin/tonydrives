import { Truck, Shield } from 'lucide-react';

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
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center" aria-hidden="true">
              <Truck className="w-4 h-4 text-navy-900" />
            </div>
            <div>
              <div className="text-sm font-bold text-white" itemProp="name">Tony Drives</div>
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
