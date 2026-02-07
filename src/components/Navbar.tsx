import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', target: 'hero' },
  { label: 'Menu', target: '/menu' },
  { label: 'Gallery', target: 'gallery' },
  { label: 'Events', target: 'events' },
  { label: 'Reserve', target: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    setIsMobileMenuOpen(false);
    if (target === '/menu') {
      navigate('/menu');
      return;
    }
    if (target === 'hero') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-cursive text-3xl text-primary text-shadow-glow">Warehouse</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.target)}
              className="font-oswald uppercase text-sm tracking-widest text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNavClick('contact')} className="btn-neon text-sm">
            Reserve Your Spot
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-lg p-6 animate-fade-in">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.target)}
              className="block w-full text-left font-oswald uppercase tracking-widest py-3 text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNavClick('contact')} className="btn-neon text-sm mt-4 w-full">
            Reserve Your Spot
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;