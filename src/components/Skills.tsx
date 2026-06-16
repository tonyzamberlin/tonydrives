import { Truck, ShieldCheck, MapPin } from 'lucide-react';

const skills = [
  {
    icon: Truck,
    title: 'Precision Driving',
    description:
      'Flawless handling of vehicles ranging from standard fleet cars and large pickup truck/trailer combos to box trucks. Expert in tight-space maneuvering, loading dock navigation, offset backing, and close-quarters commercial deliveries.',
  },
  {
    icon: ShieldCheck,
    title: 'Commercial Delivery & Logistics',
    description:
      'Fully integrated with industry-leading defensive driving matrices, safety standards, route optimization, and extreme weather navigation to hit strict rush or scheduled delivery windows every single time.',
  },
  {
    icon: MapPin,
    title: 'Rideshare & Transport Safety',
    description:
      'A deep background in high-standard passenger transportation, close-proximity urban navigation, and premier customer service across South Carolina, ensuring passengers and cargo arrive safely.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mx-auto mb-4">
            <ShieldCheck className="w-3 h-3" />
            Core Skills
          </div>
          <h2 className="heading-primary mb-4">
            Core Operational <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            Decades of driving expertise applied to every delivery across the Upstate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="card-base card-hover p-8 text-center space-y-5"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto">
                <skill.icon className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white">{skill.title}</h3>
              <p className="text-navy-600 leading-relaxed text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
