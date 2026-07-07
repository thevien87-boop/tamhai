import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, HelpCircle, MapPin, Phone, Heart, Share2, Info, Star } from 'lucide-react';
import { Listing, Review } from './types';
import { INITIAL_LISTINGS, INITIAL_REVIEWS, BLOG_POSTS, TAM_HAI_IMAGE } from './data';

// Components
import Header from './components/Header';
import ListingCard from './components/ListingCard';
import ListingDetail from './components/ListingDetail';
import BlogCard from './components/BlogCard';
import EmergencySection from './components/EmergencySection';
import RegisterListingModal from './components/RegisterListingModal';

export default function App() {
  const [tab, setTab] = useState<'directory' | 'blog' | 'emergency'>('directory');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);

  // Load reviews from localStorage or fallback
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('tam_hai_reviews');
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  // Listings state (needed to dynamically update average ratings)
  const [listings, setListings] = useState<Listing[]>(INITIAL_LISTINGS);

  // Update listings ratings whenever reviews change
  useEffect(() => {
    localStorage.setItem('tam_hai_reviews', JSON.stringify(reviews));

    const updatedListings = INITIAL_LISTINGS.map((listing) => {
      const listingReviews = reviews.filter((r) => r.listingId === listing.id);
      if (listingReviews.length === 0) {
        return { ...listing, rating: 5.0, reviewsCount: 0 };
      }
      const sum = listingReviews.reduce((acc, r) => acc + r.rating, 0);
      const avg = sum / listingReviews.length;
      return {
        ...listing,
        rating: Number(avg.toFixed(1)),
        reviewsCount: listingReviews.length,
      };
    });

    setListings(updatedListings);
  }, [reviews]);

  // Handle adding a new review
  const handleAddReview = (newReview: Review) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  // Filter listings based on active search & category
  const filteredListings = listings
    .filter((listing) => {
      // Category filter
      if (activeCategory !== 'all' && listing.category !== activeCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() === '') {
        return true;
      }
      const query = searchQuery.toLowerCase();
      return (
        listing.name.toLowerCase().includes(query) ||
        listing.address.toLowerCase().includes(query) ||
        listing.subCategory.toLowerCase().includes(query) ||
        listing.description.toLowerCase().includes(query) ||
        listing.amenities.some((amenity) => amenity.toLowerCase().includes(query))
      );
    })
    // Sort logic: Featured first, then rating descending, then reviews count descending
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }
      return b.reviewsCount - a.reviewsCount;
    });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-cyan-200 selection:text-cyan-900">
      
      {/* Dynamic Header & Filter Bar */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onOpenRegister={() => setIsRegisterOpen(true)}
        tab={tab}
        setTab={setTab}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        {tab === 'directory' && (
          <div className="space-y-6">
            
            {/* Hero Image Block - visible only when no search is performed */}
            {searchQuery === '' && activeCategory === 'all' && (
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-900 aspect-16/9 md:aspect-21/9 flex items-end">
                {/* Generated Tam Hai background landscape */}
                <img
                  src={TAM_HAI_IMAGE}
                  alt="Đảo Tam Hải Quảng Nam"
                  className="absolute inset-0 w-full h-full object-cover opacity-85 hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10"></div>
                
                {/* Hero Text Overlay */}
                <div className="relative p-5 sm:p-8 md:p-10 max-w-2xl text-white space-y-2 sm:space-y-3.5 z-10">
                  <div className="inline-flex items-center gap-1.5 bg-cyan-500/90 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    Báu vật vùng Đông Quảng Nam
                  </div>
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                    Khám Phá Thiên Đường Xã Đảo Tam Hải
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    Cổng thông tin danh bạ kết nối dịch vụ trực tiếp, giúp du khách dễ dàng liên hệ chủ homestay, nhà hàng hải sản tươi ngon, cano du lịch hòn dứa hòn mang và trải nghiệm bản địa độc đáo nhất.
                  </p>
                  
                  {/* Quick Local Quick stats badge */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-1.5 sm:pt-3">
                    <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[10px] sm:text-xs font-semibold flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-cyan-300" />
                      <span>{listings.length} Cơ sở đã xác minh</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[10px] sm:text-xs font-semibold flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{reviews.length} Du khách đánh giá</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Directory Listings Header / Search results status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-2 border-b border-slate-200/50 pb-4">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <span>
                    {activeCategory === 'all' ? 'Tất cả cơ sở dịch vụ' : activeCategory === 'accommodation' ? 'Chỗ ở (Homestay, Camping)' : activeCategory === 'dining' ? 'Ẩm thực & Quán Hải sản' : 'Di chuyển & Trải nghiệm du lịch'}
                  </span>
                  <span className="text-xs font-extrabold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">
                    {filteredListings.length}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {searchQuery ? `Kết quả tìm kiếm cho từ khóa "${searchQuery}"` : 'Kết nối trực tiếp không qua trung gian, không thu phí hoa hồng.'}
                </p>
              </div>
            </div>

            {/* Empty State */}
            {filteredListings.length === 0 ? (
              <div className="text-center py-16 bg-white border border-slate-100 rounded-3xl max-w-lg mx-auto p-6 space-y-4">
                <div className="bg-slate-50 text-slate-400 p-4 rounded-full inline-flex items-center justify-center">
                  <Compass className="w-12 h-12" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-800 text-base">Không tìm thấy kết quả phù hợp</h4>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto">
                    Vui lòng thử tìm kiếm lại bằng các từ khóa khác như "homestay", "cano", "hải sản", "nhà nghỉ" hoặc bấm nút xóa tìm kiếm.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold px-5 py-2 rounded-xl text-xs transition-all"
                  >
                    Xem tất cả dịch vụ
                  </button>
                </div>
              </div>
            ) : (
              /* Listings Grid Layout */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredListings.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    listing={listing}
                    onClick={() => setSelectedListing(listing)}
                  />
                ))}
              </div>
            )}

            {/* Small floating tips for tourists */}
            <div className="bg-cyan-50/50 rounded-2xl p-4 sm:p-5 border border-cyan-100/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8">
              <div className="flex gap-3 items-start">
                <div className="bg-cyan-100 text-cyan-700 p-2 rounded-xl shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-cyan-950">Bạn cần giúp đỡ hoặc tìm kiếm thông tin khẩn cấp?</h4>
                  <p className="text-xs text-cyan-800 leading-relaxed mt-0.5">
                    Xem lịch trình phà chi tiết, bảng giá vé, thông tin trạm y tế, số điện thoại công an xã hỗ trợ khẩn cấp trên đảo Tam Hải.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setTab('emergency')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-xs shrink-0 self-end sm:self-center"
              >
                Xem Thông Tin &rarr;
              </button>
            </div>

          </div>
        )}

        {/* Travel Blog Section */}
        {tab === 'blog' && (
          <div className="space-y-6">
            <div className="border-b border-slate-200/50 pb-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">Cẩm nang du lịch Tam Hải</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Kinh nghiệm phượt tự túc, hướng dẫn đi phà, review các địa điểm check-in độc đáo ghềnh đá Bàn Than, Hòn Mang, Hòn Dứa.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {BLOG_POSTS.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Emergency & Supports Section */}
        {tab === 'emergency' && (
          <div className="space-y-6">
            <div className="border-b border-slate-200/50 pb-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-950">Thông tin Hỗ trợ du khách xã đảo</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Số điện thoại khẩn cấp, Trạm y tế xã đảo, Công an khu vực, Đội cano cứu hộ, Giờ chạy phà chính thức & Cẩm nang ứng xử xứ đảo.
              </p>
            </div>

            <EmergencySection />
          </div>
        )}
      </main>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-slate-400 pt-10 pb-6 border-t border-slate-800 mt-12 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
            {/* Brand Intro */}
            <div className="space-y-3">
              <span className="text-white font-black text-lg tracking-tight">
                DANH BẠ DU LỊCH <span className="text-cyan-400">TAM HẢI</span>
              </span>
              <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
                Cổng thông tin du lịch và danh bạ dịch vụ trực tuyến kết nối trực tiếp du khách với các hộ kinh doanh địa phương tại xã đảo Tam Hải, Núi Thành, Quảng Nam. Đồng hành cùng phát triển kinh tế biển đảo Việt Nam bền vững.
              </p>
            </div>

            {/* Quick Access List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Danh mục chính</h4>
              <ul className="space-y-1.5 text-xs font-semibold">
                <li>
                  <button onClick={() => { setTab('directory'); setActiveCategory('accommodation'); }} className="hover:text-cyan-400 transition-colors">
                    Chỗ ở (Homestay, Nhà nghỉ, Cắm trại)
                  </button>
                </li>
                <li>
                  <button onClick={() => { setTab('directory'); setActiveCategory('dining'); }} className="hover:text-cyan-400 transition-colors">
                    Ẩm thực (Hải sản tươi sống, Cơm bình dân, Cafe)
                  </button>
                </li>
                <li>
                  <button onClick={() => { setTab('directory'); setActiveCategory('transport'); }} className="hover:text-cyan-400 transition-colors">
                    Di chuyển (Thuê cano, lặn ngắm san hô, thuê xe máy)
                  </button>
                </li>
                <li>
                  <button onClick={() => setTab('blog')} className="hover:text-cyan-400 transition-colors">
                    Cẩm nang, cẩm nang hướng dẫn du lịch tự túc
                  </button>
                </li>
              </ul>
            </div>

            {/* Disclaimer & Policy */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Chính sách & Miễn trừ trách nhiệm</h4>
              <p className="text-xs leading-relaxed text-slate-400">
                Đây là cổng thông tin <strong>trung gian kết nối trực tiếp</strong>, hoàn toàn phi lợi nhuận. Mọi giao dịch về giá phòng, đặt đồ ăn, thuê tàu phà và độ an toàn của dịch vụ do du khách tự thỏa thuận và thỏa thuận trực tiếp với chủ cơ sở qua điện thoại hoặc Zalo.
              </p>
            </div>
          </div>

          {/* Copyright banner */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs">
            <p>&copy; 2026 Danh bạ Du lịch xã đảo Tam Hải. Mọi quyền được bảo lưu.</p>
            <p className="flex items-center gap-1">
              <span>Thiết kế vì cộng đồng biển đảo quê hương</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            </p>
          </div>
        </div>
      </footer>

      {/* Modal overlays */}
      {selectedListing && (
        <ListingDetail
          listing={selectedListing}
          reviews={reviews}
          onAddReview={handleAddReview}
          onClose={() => setSelectedListing(null)}
        />
      )}

      {isRegisterOpen && (
        <RegisterListingModal
          onClose={() => setIsRegisterOpen(false)}
        />
      )}

    </div>
  );
}
