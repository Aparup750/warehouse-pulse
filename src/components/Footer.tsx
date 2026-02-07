import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6 text-center">
        <span className="text-cursive text-3xl text-primary text-shadow-glow">Warehouse</span>
        <p className="text-muted-foreground text-sm mt-2 mb-8 font-oswald uppercase tracking-widest">
          Siliguri's Ultimate Party Destination
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/warehouse2.0?igsh=M2t3d3ZvY3Q4Mzd3"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-primary hover:neon-border-gold transition-all duration-300 group"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.facebook.com/share/1Ds3Hd6LFr/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-primary hover:neon-border-gold transition-all duration-300 group"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://zomato.onelink.me/xqzv/vmlyzctw"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-primary hover:neon-border-gold transition-all duration-300 group"
            aria-label="Zomato"
            title="Order on Zomato"
          >
            <span className="font-oswald text-sm font-bold group-hover:scale-110 transition-transform inline-block">Z</span>
          </a>
          <a
            href="https://swiggy.onelink.me/BVRZ?af_dp=swiggydiners%3A%2F%2Fdetails%2F379939%3Fsource%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-primary hover:neon-border-gold transition-all duration-300 group"
            aria-label="Swiggy"
            title="Order on Swiggy"
          >
            <span className="font-oswald text-sm font-bold group-hover:scale-110 transition-transform inline-block">S</span>
          </a>
        </div>

        <p className="text-muted-foreground/50 text-xs font-oswald uppercase tracking-widest">
          © {new Date().getFullYear()} Warehouse Siliguri. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;