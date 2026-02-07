import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-cursive text-4xl md:text-5xl text-primary text-shadow-glow text-center mb-4">Find Us</h2>
          <div className="w-24 h-0.5 bg-primary/50 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Map */}
            <div className="rounded-lg overflow-hidden neon-border h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=Planet+Mall+Sevoke+Road+Siliguri&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Warehouse Location"
              />
            </div>

            {/* Contact info */}
            <div className="glass-card p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-oswald text-lg uppercase tracking-wider mb-2">Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    North City, Planet Mall, 2nd Floor,<br />
                    Sevoke Rd, Siliguri,<br />
                    West Bengal 734001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-oswald text-lg uppercase tracking-wider mb-2">Call Us</h3>
                  <a href="tel:+919800122000" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 98001 22000
                  </a>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir//Planet+Mall+Sevoke+Road+Siliguri"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow flex items-center justify-center gap-2 w-full"
              >
                <ExternalLink className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;