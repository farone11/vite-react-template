export const menuCategories = [
  { id: 'espresso', name: 'Espresso Drinks', description: 'Rich, bold classics' },
  { id: 'manual-brew', name: 'Manual Brew', description: 'Hand-crafted precision' },
  { id: 'signature', name: 'Signature', description: 'Ganvar originals' },
  { id: 'non-coffee', name: 'Non-Coffee', description: 'Refreshing alternatives' },
];

export const menuItems = [
  { id: 'espresso', name: 'Double Intensity', description: 'Double shot house blend', price: 35000, category: 'espresso', caffeine: 'high', badge: 'Best Seller' },
  { id: 'americano', name: 'Classic Americano', description: 'Espresso with hot water', price: 28000, category: 'espresso', caffeine: 'high' },
  { id: 'cappuccino', name: 'Velvet Cappuccino', description: 'Espresso with microfoam', price: 32000, category: 'espresso', caffeine: 'medium' },
  { id: 'latte', name: 'Creamy Latte', description: 'Espresso with steamed milk', price: 35000, category: 'espresso', caffeine: 'medium' },
  { id: 'cold-brew', name: '24-Hour Cold Brew', description: 'Smooth, low acidity', price: 38000, category: 'manual-brew', caffeine: 'high', badge: 'Summer Hit' },
  { id: 'pour-over', name: 'Single Origin Pour Over', description: 'V60 Colombia Huila', price: 45000, category: 'manual-brew', caffeine: 'medium' },
  { id: 'ganvar-gold', name: 'Ganvar Gold', description: 'Espresso with honey, cinnamon, gold leaf', price: 58000, category: 'signature', caffeine: 'medium', badge: 'House Special' },
  { id: 'matcha', name: 'Ceremonial Matcha', description: 'Premium Japanese matcha', price: 42000, category: 'non-coffee', caffeine: 'medium' },
  { id: 'hot-chocolate', name: 'Molten Chocolate', description: 'Belgian chocolate with cream', price: 38000, category: 'non-coffee', caffeine: 'none' },
];

export const coffeeShopInfo = {
  name: 'Ganvar Coffee Shop',
  tagline: 'Where Financial Minds Meet Artisan Coffee',
  description: 'A sophisticated space for market analysts and coffee connoisseurs.',
  address: 'Jl. Sudirman No. 203, Jakarta Pusat, Indonesia',
  hours: { weekdays: '07:00 - 22:00', weekend: '08:00 - 23:00' },
  phone: '+62 21 5555 7890',
  email: 'hello@ganvarcoffee.id',
};