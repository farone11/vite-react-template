import { useState } from 'react';
import { Coffee, Search, MapPin, Clock, Phone } from 'lucide-react';
import { menuItems, menuCategories, coffeeShopInfo } from '../data';

export default function CoffeeShopPage() {
  const [category, setCategory] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const filtered = menuItems.filter(item => (category ? item.category === category : true) && (search ? item.name.toLowerCase().includes(search.toLowerCase()) : true));
  const formatPrice = (p: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(p);

  return (
    <div className="min-h-screen bg-coffee-950 pt-20">
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/60 to-coffee-950" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4">
            <Coffee className="w-6 h-6 text-coffee-300" />
            <span className="text-sm font-mono text-coffee-400">Page 5 of 6</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-coffee-50 mb-4">{coffeeShopInfo.name}</h1>
          <p className="text-xl text-coffee-300">{coffeeShopInfo.tagline}</p>
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="bg-coffee-900/60 border border-coffee-700 rounded-xl p-4">
              <MapPin className="w-5 h-5 text-coffee-400 mb-2" /><p className="text-xs text-coffee-400">Location</p>
              <p className="text-sm text-coffee-100">{coffeeShopInfo.address.split(',')[0]}</p>
            </div>
            <div className="bg-coffee-900/60 border border-coffee-700 rounded-xl p-4">
              <Clock className="w-5 h-5 text-coffee-400 mb-2" /><p className="text-xs text-coffee-400">Hours</p>
              <p className="text-sm text-coffee-100">{coffeeShopInfo.hours.weekdays}</p>
            </div>
            <div className="bg-coffee-900/60 border border-coffee-700 rounded-xl p-4">
              <Phone className="w-5 h-5 text-coffee-400 mb-2" /><p className="text-xs text-coffee-400">Phone</p>
              <p className="text-sm text-coffee-100">{coffeeShopInfo.phone}</p>
            </div>
            <div className="bg-coffee-900/60 border border-coffee-700 rounded-xl p-4 text-center">
              <p className="text-xs text-coffee-400">Items</p>
              <p className="font-mono text-2xl font-bold text-coffee-100">{menuItems.length}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sticky top-16 z-40 bg-coffee-900/95 backdrop-blur-md border-b border-coffee-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-500" />
              <input type="text" placeholder="Search drinks..." value={search} onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-coffee-800 border border-coffee-700 rounded-xl text-coffee-100 placeholder:text-coffee-500 focus:outline-none focus:ring-2 focus:ring-coffee-500" />
            </div>
            <div className="flex space-x-2">
              <button onClick={() => setCategory(null)} className={`px-4 py-2 rounded-lg text-sm font-medium ${category === null ? 'bg-coffee-100 text-coffee-900' : 'text-coffee-400 hover:text-coffee-100'}`}>All</button>
              {menuCategories.map(c => (
                <button key={c.id} onClick={() => setCategory(c.id)} className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${category === c.id ? 'bg-coffee-100 text-coffee-900' : 'text-coffee-400 hover:text-coffee-100'}`}>{c.name}</button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(item => (
              <div key={item.id} className="bg-coffee-900/50 border border-coffee-700 rounded-xl overflow-hidden hover:border-coffee-500 transition-all">
                <div className="h-40 bg-coffee-800 relative">
                  {item.badge && <span className="absolute top-3 right-3 px-2 py-1 bg-coffee-100 text-coffee-900 text-xs font-semibold rounded-full">{item.badge}</span>}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-semibold text-coffee-100">{item.name}</h3>
                    {item.caffeine && (
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        item.caffeine === 'high' ? 'bg-amber-500/20 text-amber-300' :
                        item.caffeine === 'medium' ? 'bg-accent-500/20 text-accent-300' :
                        item.caffeine === 'low' ? 'bg-coffee-500/20 text-coffee-300' : 'bg-success-500/20 text-success-300'
                      }`}>{item.caffeine === 'none' ? 'Decaf' : item.caffeine}</span>
                    )}
                  </div>
                  <p className="text-sm text-coffee-400 line-clamp-2 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xl font-bold text-coffee-100">{formatPrice(item.price)}</p>
                    <button className="px-4 py-2 bg-coffee-100 hover:bg-coffee-200 text-coffee-900 font-medium rounded-lg">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 bg-coffee-900 border-t border-coffee-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-coffee-500">All prices in IDR. Subject to 10% service charge.</p>
          <p className="text-xs text-coffee-600 mt-2">Ganvar Coffee - A collaboration with XAUUSD Analysis</p>
        </div>
      </section>
    </div>
  );
}