import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import interiorBar from '@/assets/interior-bar.webp';
import interiorDining from '@/assets/interior-dining.webp';


const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: row1Ref, isVisible: row1Visible } = useScrollAnimation();
  const { ref: row2Ref, isVisible: row2Visible } = useScrollAnimation();
  const { ref: row3Ref, isVisible: row3Visible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-16 scroll-fade-up ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-cursive text-4xl md:text-5xl text-primary text-shadow-glow mb-4">Unleash the Night</h2>
          <div className="w-24 h-0.5 bg-primary/50 mx-auto" />
        </div>

        <div className="space-y-20">
          {/* Row 1 */}
          <div ref={row1Ref} className={`flex flex-col md:flex-row items-center gap-10 scroll-slide-left ${row1Visible ? 'visible' : ''}`}>
            <div className="flex-1 space-y-4">
              <h3 className="font-oswald text-2xl md:text-3xl uppercase tracking-wider text-foreground">The Experience</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Located in the heart of Siliguri at Planet Mall, Warehouse isn't just a restro-pub; it's an experience.
                With industrial-chic aesthetics, pulse-pounding beats, and a menu crafted for the bold, we define the city's nightlife.
              </p>
            </div>
            <div className="flex-1">
              <div className="overflow-hidden rounded-lg neon-border">
                <img src={interiorBar} alt="Warehouse bar interior" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div ref={row2Ref} className={`flex flex-col md:flex-row-reverse items-center gap-10 scroll-slide-right ${row2Visible ? 'visible' : ''}`}>
            <div className="flex-1 space-y-4">
              <h3 className="font-oswald text-2xl md:text-3xl uppercase tracking-wider text-foreground">Premium Dining</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                From signature cocktails to a globally-inspired menu, every dish and drink is crafted to perfection.
                Whether you're here for the sushi, the tandoori specials, or our famous Warehouse pizzas — we've got you covered.
              </p>
            </div>
            <div className="flex-1">
              <div className="overflow-hidden rounded-lg neon-border">
                <img src={interiorDining} alt="Warehouse dining area" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div ref={row3Ref} className={`scroll-slide-left ${row3Visible ? 'visible' : ''}`}>
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h3 className="font-oswald text-2xl md:text-3xl uppercase tracking-wider text-foreground">Electric Atmosphere</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Whether you're here for the signature cocktails or the electric atmosphere, the night belongs to you.
                Live DJ sets, curated playlists, and a vibe that keeps you coming back for more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;