import { ImagePlus } from 'lucide-react';

const photos: { src: string; alt: string }[] = [
  { src: '/images/gallery/web-van-branded.jpg', alt: 'Tony Drives branded delivery van with courier & delivery services decal' },
  { src: '/images/gallery/web-tony-fedex.jpg', alt: 'Tony with a Penske rental truck and in delivery uniform on the job' },
  { src: '/images/gallery/web-loading-crates.jpg', alt: 'Loading grocery and retail crates into the delivery vehicle at the store' },
  { src: '/images/gallery/web-amazon-porch.jpg', alt: 'Package delivered safely to a customer’s front porch' },
  { src: '/images/gallery/web-food-delivery.jpg', alt: 'Food and errand order dropped off at a customer’s door' },
  { src: '/images/gallery/web-bulk-boxes.jpg', alt: 'A full cart of boxed orders staged for a bulk delivery run' },
  { src: '/images/gallery/web-marketplace-planter.jpg', alt: 'Bulky Facebook Marketplace pickup loaded for transport' },
  { src: '/images/gallery/web-kia-loaded.jpg', alt: 'Kia Sedona loaded with packages and parcels ready for delivery' },
  { src: '/images/gallery/web-tv-delivery.jpg', alt: 'Large 65-inch big-screen TV safely loaded in the van for delivery' },
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
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className="relative min-h-[260px] rounded-xl overflow-hidden border border-navy-700/50 card-hover bg-navy-900/50"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={i < 4 ? undefined : 'lazy'}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
