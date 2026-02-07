export interface MenuItem {
  name: string;
  price: number;
  isVeg: boolean;
  isSpecial?: boolean;
}

export interface SubCategory {
  name: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  name: string;
  items?: MenuItem[];
  subcategories?: SubCategory[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    name: 'Starters & Small Plates',
    items: [
      { name: 'Crispy Chilli Baby Corn', price: 325, isVeg: true },
      { name: 'Paneer Chilli', price: 345, isVeg: true },
      { name: 'Chilli Garlic Mushroom', price: 345, isVeg: true },
      { name: 'Bangkok Mushroom', price: 345, isVeg: true },
      { name: 'Kung Pao Paneer', price: 345, isVeg: true },
      { name: 'Hunan Paneer', price: 395, isVeg: true },
      { name: 'Cheese Chilli', price: 345, isVeg: true },
      { name: 'Korean Wai Wai', price: 345, isVeg: true },
      { name: 'Korean Wai Wai Chicken', price: 395, isVeg: false },
      { name: 'Chilli Chicken', price: 395, isVeg: false },
      { name: 'Chilli Fish', price: 495, isVeg: false },
      { name: 'Chilli Prawns', price: 544, isVeg: false },
      { name: 'Chilli Wings', price: 425, isVeg: false },
      { name: 'Crispy Chicken With Hot Garlic Sauce', price: 415, isVeg: false },
      { name: 'Korean Chicken', price: 424, isVeg: false },
      { name: 'Lemon Chicken', price: 395, isVeg: false },
      { name: 'Drums Of Heaven', price: 445, isVeg: false },
      { name: 'Chicken Lollipop', price: 445, isVeg: false },
      { name: 'Fish Finger', price: 495, isVeg: false },
      { name: 'Fish And Chips', price: 545, isVeg: false },
      { name: 'Chicken Tikka', price: 445, isVeg: false },
      { name: 'Fish Tikka', price: 545, isVeg: false },
    ],
  },
  {
    id: 'main-course',
    name: 'Main Course',
    items: [
      { name: 'Paneer Butter Masala', price: 375, isVeg: true },
      { name: 'Paneer Do Pyaaz', price: 395, isVeg: true },
      { name: 'Kadhai Paneer', price: 395, isVeg: true },
      { name: 'Aloo Jeera', price: 295, isVeg: true },
      { name: 'Nepali Dum Aloo', price: 345, isVeg: true },
      { name: 'Malai Kofta', price: 375, isVeg: true },
      { name: 'Veg Jalfrezi', price: 345, isVeg: true },
      { name: 'Mixed Veg', price: 345, isVeg: true },
      { name: 'Yellow Dal Fry', price: 325, isVeg: true },
      { name: 'Dal Makhani', price: 375, isVeg: true },
      { name: 'Yellow Dal Tadka', price: 395, isVeg: true },
      { name: 'Kadhai Chicken', price: 495, isVeg: false },
      { name: 'Butter Chicken Masala', price: 495, isVeg: false },
      { name: 'Chicken Tikka Masala', price: 445, isVeg: false },
      { name: 'Chicken Bharta', price: 395, isVeg: false },
    ],
  },
  {
    id: 'rice-noodles',
    name: 'Rice, Biryani & Noodles',
    subcategories: [
      {
        name: 'Rice & Biryani',
        items: [
          { name: 'Plain Rice', price: 295, isVeg: true },
          { name: 'Jeera Rice', price: 345, isVeg: true },
          { name: 'Veg Pulao', price: 395, isVeg: true },
          { name: 'Fried Rice', price: 325, isVeg: true },
          { name: 'Chicken Fried Rice', price: 395, isVeg: false },
          { name: 'Veg Biryani', price: 345, isVeg: true },
          { name: 'Chicken Dum Biryani', price: 495, isVeg: false },
        ],
      },
      {
        name: 'Noodles',
        items: [
          { name: 'Chilli Garlic Noodles', price: 345, isVeg: true },
          { name: 'Schezwan Noodles', price: 365, isVeg: true },
          { name: 'Hakka Noodles', price: 345, isVeg: true },
          { name: 'Pad Thai Noodles', price: 395, isVeg: true },
          { name: 'Chicken Chilli Garlic Noodles', price: 395, isVeg: false },
          { name: 'Non Veg Schezwan Noodles', price: 415, isVeg: false },
          { name: 'Non Veg Hakka Noodles', price: 395, isVeg: false },
          { name: 'Non Veg Pad Thai Noodles', price: 445, isVeg: false },
        ],
      },
    ],
  },
  {
    id: 'breads',
    name: 'Breads',
    items: [
      { name: 'Butter Tandoori Roti', price: 95, isVeg: true },
      { name: 'Butter Naan', price: 85, isVeg: true },
      { name: 'Masala Kulcha', price: 95, isVeg: true },
      { name: 'Garlic Naan', price: 95, isVeg: true },
    ],
  },
  {
    id: 'pizza-pasta',
    name: 'Pizza & Pasta',
    subcategories: [
      {
        name: 'Pizza (10 Inches)',
        items: [
          { name: 'Veggie Lover Pizza', price: 425, isVeg: true },
          { name: 'Margherita Pizza', price: 395, isVeg: true },
          { name: 'Paneer Tikka Pizza', price: 495, isVeg: true },
          { name: 'Warehouse Special Veg Pizza', price: 495, isVeg: true, isSpecial: true },
          { name: 'Farmhouse Pizza', price: 445, isVeg: true },
          { name: 'Barbeque Chicken Pizza', price: 545, isVeg: false },
          { name: 'Warehouse Special Chicken Pizza', price: 545, isVeg: false, isSpecial: true },
        ],
      },
      {
        name: 'Pasta',
        items: [
          { name: 'Alfredo Pasta', price: 445, isVeg: true },
          { name: 'Arrabiata Pasta', price: 395, isVeg: true },
          { name: 'Mixed Sauce Pasta', price: 395, isVeg: true },
          { name: 'Aglio Olio', price: 445, isVeg: true },
          { name: 'Non Veg Alfredo Pasta', price: 495, isVeg: false },
          { name: 'Non Veg Arrabiata Pasta', price: 445, isVeg: false },
          { name: 'Non Veg Mixed Sauce Pasta', price: 445, isVeg: false },
        ],
      },
    ],
  },
  {
    id: 'sushi-momos',
    name: 'Sushi & Momos',
    subcategories: [
      {
        name: 'Momos',
        items: [
          { name: 'Veg Momos (8 Pcs)', price: 345, isVeg: true },
          { name: 'Chilli Momos (8 Pcs)', price: 345, isVeg: true },
          { name: 'Tandoori Momos (8 Pcs)', price: 395, isVeg: true },
          { name: 'Veg Jhol Momos (6 Pcs)', price: 395, isVeg: true },
        ],
      },
      {
        name: 'Sushi',
        items: [
          { name: 'Asparagus Tempura Sushi', price: 395, isVeg: true },
          { name: 'Cheese Avocado Sushi', price: 395, isVeg: true },
          { name: 'Warehouse Special Veg Sushi', price: 495, isVeg: true, isSpecial: true },
          { name: 'Barbeque Chicken Sushi', price: 495, isVeg: false },
          { name: 'Warehouse Special Non Veg Sushi', price: 545, isVeg: false, isSpecial: true },
        ],
      },
    ],
  },
];