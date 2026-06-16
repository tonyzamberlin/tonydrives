import { Truck, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-navy-700/50 py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
              <Truck className="w-4 h-4 text-navy-900" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Tony Drives</div>
              <div className="text-xs text-navy-600">
                Professional Commercial Driver & Local Delivery Specialist
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-navy-600">
            <Shield className="w-3 h-3 text-amber-500" />
            Veteran-Owned & Operated by Tony Zamberlin
          </div>

          <div className="text-xs text-navy-700">
            Upstate South Carolina
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-navy-700/30 text-center">
          <p className="text-xs text-navy-700">
            &copy; {new Date().getFullYear()} Tony Drives. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
