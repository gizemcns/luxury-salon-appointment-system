import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span>+90 (212) 555 0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span>info@luxesalon.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span>Nişantaşı, İstanbul</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Çalışma Saatleri</h3>
            <div className="space-y-2">
              <p>Pazartesi - Cumartesi</p>
              <p className="text-yellow-500 font-semibold">09:00 - 19:00</p>
              <p className="mt-3">Pazar</p>
              <p className="text-gray-400">Kapalı</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Luxe Salon. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
