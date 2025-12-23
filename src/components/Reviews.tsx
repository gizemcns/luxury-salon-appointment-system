import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Review {
  id: string;
  customer_name: string;
  rating: number;
  review_text: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newReview, setNewReview] = useState({
    customerName: '',
    rating: 5,
    reviewText: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('id, customer_name, rating, review_text')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('reviews')
        .insert([
          {
            customer_name: newReview.customerName,
            rating: newReview.rating,
            review_text: newReview.reviewText
          }
        ]);

      if (error) throw error;
      setSubmitStatus('success');
      setNewReview({
        customerName: '',
        rating: 5,
        reviewText: ''
      });
      setTimeout(() => {
        fetchReviews();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.name === 'rating' ? parseInt(e.target.value) : e.target.value
    });
  };

  return (
    <div style={{ backgroundColor: '#F8F9FA' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#121212' }}>
          Müşteri <span style={{ color: '#D4AF37' }}>Yorumları</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Müşterilerimizin deneyimleri ve memnuniyetleri biz için en önemlidir
        </p>

        {isLoading ? (
          <div className="text-center text-gray-600">Yorumlar yükleniyor...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ borderTop: '4px solid #D4AF37' }}
                  >
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5"
                          style={{
                            fill: i < review.rating ? '#D4AF37' : '#E5E5E5',
                            color: i < review.rating ? '#D4AF37' : '#E5E5E5'
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      "{review.review_text}"
                    </p>
                    <p className="font-semibold" style={{ color: '#121212' }}>
                      {review.customer_name}
                    </p>
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-600">
                  Henüz onaylanmış yorum bulunmamaktadır.
                </p>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#121212' }}>
                Kendi Yorumunuzu Paylaşın
              </h3>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#121212' }}>
                    Adınız
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={newReview.customerName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                    style={{ '--tw-ring-color': '#D4AF37' } as any}
                    placeholder="Adınız"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#121212' }}>
                    Puanı (1-5)
                  </label>
                  <select
                    name="rating"
                    value={newReview.rating}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none bg-white"
                    style={{ '--tw-ring-color': '#D4AF37' } as any}
                  >
                    <option value="5">5 - Mükemmel</option>
                    <option value="4">4 - Çok İyi</option>
                    <option value="3">3 - İyi</option>
                    <option value="2">2 - Orta</option>
                    <option value="1">1 - Kötü</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#121212' }}>
                    Yorumunuz
                  </label>
                  <textarea
                    name="reviewText"
                    value={newReview.reviewText}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                    style={{ '--tw-ring-color': '#D4AF37' } as any}
                    placeholder="Deneyiminizi paylaşın..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-500 text-green-700 px-4 py-3 rounded-lg">
                    Yorumunuz başarıyla gönderildi! Admin tarafından onaylandıktan sonra yayınlanacaktır.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-500 text-red-700 px-4 py-3 rounded-lg">
                    Yorum gönderirken bir hata oluştu. Lütfen tekrar deneyin.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: '#D4AF37',
                    color: '#121212'
                  }}
                  className="w-full font-bold py-3 rounded-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Yorumu Gönder'}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
