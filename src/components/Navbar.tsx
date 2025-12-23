import { Menu, X, Scissors } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Ana Sayfa', id: 'home' },
    { name: 'Hizmetler', id: 'services' },
    { name: 'Fiyatlar', id: 'pricing' },
    { name: 'Galeri', id: 'gallery' },
    { name: 'Randevu', id: 'appointment' },
  ];

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <Scissors className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-bold tracking-wider">
              <span className="text-yellow-500">LUXE</span> SALON
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors duration-200 hover:text-yellow-500 ${
                  currentPage === item.id ? 'text-yellow-500 font-semibold' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-yellow-500">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors duration-200 hover:text-yellow-500 ${
                  currentPage === item.id ? 'text-yellow-500 font-semibold' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
