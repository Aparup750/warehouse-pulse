import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Music, Mic2, PartyPopper } from 'lucide-react';

const events = [
  {
    icon: Music,
    title: 'Live DJ Nights',
    description: 'Every Friday & Saturday, our resident DJs spin the hottest tracks to keep the dance floor alive.',
    schedule: 'Fri & Sat • 9 PM onwards',
  },
  {
    icon: Mic2,
    title: 'Open Mic Thursdays',
    description: 'Got talent? Take the stage every Thursday and showcase your skills to the crowd.',
    schedule: 'Every Thursday • 8 PM',
  },
  {
    icon: PartyPopper,
    title: 'Weekend Specials',
    description: 'Exclusive deals on signature cocktails and appetizers. The perfect way to kick off your weekend.',
    schedule: 'Fri - Sun • All Day',
  },
];

const EventsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="events" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-cursive text-4xl md:text-5xl text-primary text-shadow-glow text-center mb-4">What's On</h2>
          <div className="w-24 h-0.5 bg-primary/50 mx-auto mb-16" />

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.title} className="glass-card p-8 text-center group hover:border-accent/40 transition-all duration-300">
                <event.icon className="w-12 h-12 text-primary mx-auto mb-6 group-hover:animate-pulse" />
                <h3 className="font-oswald text-xl uppercase tracking-wider mb-3 text-foreground">{event.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                <p className="font-oswald text-sm uppercase tracking-widest text-primary/80">{event.schedule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;