import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Clock } from 'lucide-react';

const hours = [
  { day: 'Monday', time: '12:00 PM – 11:15 PM' },
  { day: 'Tuesday', time: '12:00 PM – 11:30 PM' },
  { day: 'Wednesday', time: '12:00 PM – 11:30 PM' },
  { day: 'Thursday', time: '12:00 PM – 11:30 PM' },
  { day: 'Friday', time: '12:00 PM – 11:30 PM' },
  { day: 'Saturday', time: '12:00 PM – 11:30 PM' },
  { day: 'Sunday', time: '12:00 PM – 11:30 PM' },
];

const HoursSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative flex items-center justify-center">
      <div ref={ref} className={`glass-card p-10 md:p-14 max-w-lg w-full mx-6 text-center scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <Clock className="w-10 h-10 text-primary mx-auto mb-6" />
        <h2 className="text-cursive text-3xl md:text-4xl text-primary text-shadow-glow mb-8">Opening Hours</h2>

        <div className="space-y-3">
          {hours.map(({ day, time }) => (
            <div key={day} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
              <span className="font-oswald uppercase tracking-wider text-sm text-foreground">{day}</span>
              <span className="text-muted-foreground text-sm">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoursSection;