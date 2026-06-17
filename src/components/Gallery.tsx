import { ImagePlus } from 'lucide-react';

const photos: (string | null)[] = [
  '/images/gallery/IMG_20230819_072928878_HDR.jpg',
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-navy-800/50" aria-labelledby="gallery-heading">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mx-auto mb-4">
            <ImagePlus className="w-3 h-3" />
            Gallery
          </div>
          <h2 id="gallery-heading" className="heading-primary mb-4">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((src, i) => (
            <div
              key={i}
              className="relative min-h-[260px] rounded-xl overflow-hidden border border-navy-700/50 card-hover bg-navy-900/50"
            >
              {src ? (
                <img
                  src={src}
                  alt={`Tony Drives delivery photo ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <ImagePlus className="w-12 h-12 text-navy-600" />
                  <span className="text-navy-600 text-sm">Add photo</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
