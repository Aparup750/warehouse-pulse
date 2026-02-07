import { menuCategories, MenuItem } from '@/data/menuData';

const MenuItemCard = ({ name, price, isVeg, isSpecial }: MenuItem) => (
  <div className={`menu-item-card flex items-center justify-between gap-4 ${isSpecial ? 'menu-item-special' : ''}`}>
    <div className="flex items-center gap-3 min-w-0">
      <div className={isVeg ? 'veg-indicator' : 'nonveg-indicator'} />
      <span className="text-foreground/90 text-sm">{name}</span>
      {isSpecial && (
        <span className="shrink-0 text-[10px] font-oswald uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
          Special
        </span>
      )}
    </div>
    <span className="menu-price font-oswald text-lg text-foreground/80 shrink-0 transition-all">
      ₹{price}
    </span>
  </div>
);

const Menu = () => {
  const scrollToCategory = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Title */}
      <div className="container mx-auto px-6 mb-10 text-center">
        <h1 className="text-cursive text-5xl md:text-6xl text-primary text-shadow-glow mb-2">The Menu</h1>
        <p className="text-muted-foreground font-oswald uppercase tracking-widest text-sm">Warehouse Siliguri</p>
      </div>

      {/* Category nav */}
      <div className="sticky top-[60px] z-40 glass py-3 mb-10">
        <div className="container mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {menuCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-oswald uppercase tracking-wider text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all whitespace-nowrap"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu content */}
      <div className="container mx-auto px-6 space-y-16">
        {menuCategories.map(category => (
          <section key={category.id} id={category.id}>
            <h2 className="font-oswald text-2xl md:text-3xl uppercase tracking-wider text-foreground mb-8 border-b border-border/30 pb-4">
              {category.name}
            </h2>

            {category.subcategories ? (
              category.subcategories.map(sub => (
                <div key={sub.name} className="mb-10">
                  <h3 className="font-oswald text-lg uppercase tracking-wider text-primary/80 mb-6">{sub.name}</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sub.items.map(item => (
                      <MenuItemCard key={item.name} {...item} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items?.map(item => (
                  <MenuItemCard key={item.name} {...item} />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Menu;