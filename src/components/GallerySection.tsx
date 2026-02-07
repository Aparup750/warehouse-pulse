import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import interiorBar from '@/assets/interior-bar.webp';
import interiorDining from '@/assets/interior-dining.webp';
import interiorNeon from '@/assets/interior-neon.webp';
import logoWall from '@/assets/logo-wall.jpg';

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-cursive text-4xl md:text-5xl text-primary text-shadow-glow text-center mb-4">Gallery</h2>
          <div className="w-24 h-0.5 bg-primary/50 mx-auto mb-16" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-lg group">
              <img src={logoWall} alt="Warehouse graffiti wall" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="overflow-hidden rounded-lg group aspect-square">
              <img src={interiorBar} alt="Bar area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="overflow-hidden rounded-lg group aspect-square">
              <img src={interiorDining} alt="Dining setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="col-span-2 overflow-hidden rounded-lg group aspect-video">
              <img src={interiorNeon} alt="Neon interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;