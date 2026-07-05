import { useState, type FormEvent } from 'react';
import { Send, AlertTriangle, Mail } from 'lucide-react';

const serviceOptions = [
  '24-Hour Rush Delivery',
  'Scheduled Delivery Route',
  'Facebook Marketplace Pickup',
  'Other Delivery Request',
];

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? 'https://ztljejrlhjpkvethskuy.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0bGplanJsaGpwa3ZldGhza3V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5NDE3MDIsImV4cCI6MjA5ODUxNzcwMn0.GlITfaHniZ9dRZy4prp6eHWN5Tm5-ISjdXIO84E_o9c';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    pickup: '',
    dropoff: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-quote-email`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error ?? `Request failed (${res.status})`);
      }
      setSubmitted(true);
      setFormData({ name: '', phone: '', serviceType: '', pickup: '', dropoff: '', details: '' });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="section-padding" aria-labelledby="quote-heading">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mx-auto mb-4">
            <Send className="w-3 h-3" />
            Free Quote
          </div>
          <h2 id="quote-heading" className="heading-primary mb-4">
            Get a <span className="text-gradient">Free Quote</span>
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            Submit your delivery details and Tony Drives will review your request immediately.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="card-base p-6 md:p-8 space-y-5"
              aria-label="Request a free delivery quote from Tony Drives"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quote-name" className="block text-sm font-medium text-white mb-2">
                    Full Name / Business Name
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name or business"
                    className="input-field"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(864) 555-0123"
                    className="input-field"
                    required
                    aria-required="true"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote-service" className="block text-sm font-medium text-white mb-2">
                  Service Type
                </label>
                <select
                  id="quote-service"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="input-field appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23f59e0b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_12px_center] bg-[length:20px]"
                  required
                  aria-required="true"
                >
                  <option value="" className="bg-navy-900 text-navy-600">Select a service...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-navy-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quote-pickup" className="block text-sm font-medium text-white mb-2">
                    Pickup Location
                  </label>
                  <input
                    id="quote-pickup"
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder="e.g., Anderson, SC"
                    className="input-field"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="quote-dropoff" className="block text-sm font-medium text-white mb-2">
                    Drop-off Destination
                  </label>
                  <input
                    id="quote-dropoff"
                    type="text"
                    name="dropoff"
                    value={formData.dropoff}
                    onChange={handleChange}
                    placeholder="e.g., Greenville, SC"
                    className="input-field"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote-details" className="block text-sm font-medium text-white mb-2">
                  Job Details / Item Description
                </label>
                <textarea
                  id="quote-details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g., Need an urgent part delivered tonight or Couch pickup from Marketplace"
                  className="input-field resize-none"
                  required
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                {loading ? 'Sending...' : 'Submit Quote Request'}
              </button>

              <div role="status" aria-live="polite" aria-atomic="true">
                {submitted && (
                  <div className="text-center py-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-500 text-sm font-medium">
                    Quote request sent! Tony Drives will be in touch shortly.
                  </div>
                )}
                {error && (
                  <div className="text-center py-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm font-medium">
                    {error}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right Side — Direct Booking */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-base p-6 md:p-8 space-y-5">
              <div className="flex items-center gap-2 text-amber-500">
                <AlertTriangle className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-bold uppercase tracking-wider">
                  Urgent / Instant Booking
                </span>
              </div>
              <p className="text-navy-600 text-sm leading-relaxed">
                For immediate 24-hour rush deliveries or urgent cargo coordination, contact
                Tony Drives directly for the fastest response time.
              </p>
              <div className="card-base p-4 flex items-center gap-3 border-amber-500/20">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-xs text-navy-600 mb-1">Direct Email</div>
                  <a
                    href="mailto:tony@tonydrives.com"
                    className="text-white font-medium hover:text-amber-500 transition-colors text-sm"
                    aria-label="Email Tony Drives at tony@tonydrives.com"
                  >
                    tony@tonydrives.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card-base p-6 md:p-8 space-y-4 border-amber-500/20">
              <h3 className="text-lg font-bold text-white">Service Areas</h3>
              <ul className="space-y-2 text-sm text-navy-600" aria-label="Tony Drives service areas in South Carolina">
                {['Anderson, SC', 'Greenville, SC', 'Clemson, SC', 'Surrounding Upstate Areas'].map((area, i) => (
                  <li key={area} className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${i < 3 ? 'bg-amber-500' : 'bg-amber-500/50'} flex-shrink-0`}
                      aria-hidden="true"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
