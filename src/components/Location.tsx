import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  return (
    <div style={{ backgroundColor: '#121212' }} className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          Bizi <span style={{ color: '#D4AF37' }}>Ziyaret Edin</span>
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Lüks salonumuzun kapılarını size açmaya hazırız
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 flex-shrink-0" style={{ color: '#D4AF37' }} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Adres</h3>
                <p className="text-gray-300">
                  Nişantaşı Caddesi No: 45<br />
                  Şişli, İstanbul 34365<br />
                  Türkiye
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-8 h-8 flex-shrink-0" style={{ color: '#D4AF37' }} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                <p className="text-gray-300">
                  <a href="tel:+902125550123" className="hover:text-yellow-400 transition-colors">
                    +90 (212) 555 0123
                  </a><br />
                  <a href="tel:+905551234567" className="hover:text-yellow-400 transition-colors">
                    +90 (555) 123 4567
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-8 h-8 flex-shrink-0" style={{ color: '#D4AF37' }} />
              <div>
                <h3 className="text-xl font-semibold mb-2">E-Posta</h3>
                <p className="text-gray-300">
                  <a href="mailto:info@luxesalon.com" className="hover:text-yellow-400 transition-colors">
                    info@luxesalon.com
                  </a><br />
                  <a href="mailto:randevu@luxesalon.com" className="hover:text-yellow-400 transition-colors">
                    randevu@luxesalon.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-8 h-8 flex-shrink-0" style={{ color: '#D4AF37' }} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Çalışma Saatleri</h3>
                <p className="text-gray-300">
                  <strong>Pazartesi - Cumartesi:</strong> 09:00 - 19:00<br />
                  <strong>Pazar:</strong> Kapalı<br />
                  <span className="text-sm text-gray-400 mt-2 inline-block">
                    *Özel tarihler ve gün dışı randevu için bizi arayınız
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl h-96">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.2688522279776!2d29.0124!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7c6d0a0a0a0%3A0xa0a0a0a0a0a0!2sNi%C5%9Fant%C4%B1%20Cad.%20No%3A45%2C%20%C5%9Ei%C5%9Fli!5e0!3m2!1str!2str!4v1234567890"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-12 p-8 rounded-lg" style={{ backgroundColor: '#D4AF37' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#121212' }}>
            Ulaşım Bilgisi
          </h3>
          <p style={{ color: '#121212' }} className="leading-relaxed">
            Salonumuz Nişantaşı'nın merkezinde yer almakta olup, toplu taşıma, otobüs ve metro
            hatlarına yakın konumdadır. Bol yer alan bir oto parkı bulunmaktadır.
            Engelli misafirlerimiz için asansör ve özel tuvalet mevcuttur.
          </p>
        </div>
      </div>
    </div>
  );
}
