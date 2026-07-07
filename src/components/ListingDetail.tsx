import React, { useState } from 'react';
import { Listing, Review } from '../types';
import { X, MapPin, Phone, MessageSquare, DollarSign, Star, Check, User, Calendar, MessageCircle } from 'lucide-react';

interface ListingDetailProps {
  listing: Listing;
  reviews: Review[];
  onAddReview: (review: Review) => void;
  onClose: () => void;
}

export default function ListingDetail({ listing, reviews, onAddReview, onClose }: ListingDetailProps) {
  const [authorName, setAuthorName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filter reviews for this listing
  const filteredReviews = reviews.filter((r) => r.listingId === listing.id);

  const handleCall = () => {
    window.location.href = `tel:${listing.phone}`;
  };

  const handleZalo = () => {
    const cleanPhone = listing.phone.replace(/\s+/g, '');
    window.open(`https://zalo.me/${cleanPhone}`, '_blank', 'noopener,noreferrer');
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim()) {
      setErrorMsg('Vui lòng nhập họ và tên của bạn.');
      return;
    }
    if (!commentText.trim()) {
      setErrorMsg('Vui lòng nhập nội dung nhận xét.');
      return;
    }

    const newReview: Review = {
      id: `review-${Date.now()}`,
      listingId: listing.id,
      author: authorName.trim(),
      rating: rating,
      content: commentText.trim(),
      date: new Date().toISOString().split('T')[0]
    };

    onAddReview(newReview);
    setAuthorName('');
    setCommentText('');
    setRating(5);
    setErrorMsg('');
    setIsSubmitted(true);

    // Auto clear success message after 4s
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      {/* Background click to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>

      {/* Main Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-full sm:max-h-[90vh] z-10 animate-slideUp">
        
        {/* Header Bar */}
        <div className="flex justify-between items-center px-4 py-3 bg-slate-50 border-b border-slate-100 shrink-0">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-md">
            {listing.subCategory}
          </span>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto pb-24 sm:pb-8">
          
          {/* Main Hero Image */}
          <div className="relative aspect-16/9 w-full bg-slate-100">
            <img 
              src={listing.image} 
              alt={listing.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Soft gradient shadow on image bottom */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 left-4 text-white">
              <span className="flex items-center gap-1 font-bold text-sm text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                {listing.rating.toFixed(1)} ({filteredReviews.length} Đánh giá)
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-6">
            
            {/* Title and Pricing */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {listing.name}
              </h2>
              <div className="flex items-start gap-1.5 text-slate-600">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                <p className="text-sm sm:text-base font-medium">{listing.address}</p>
              </div>
              <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-100 px-3 py-1.5 rounded-xl text-cyan-800 font-bold text-sm">
                <DollarSign className="w-4 h-4 text-cyan-600" />
                <span>Bảng giá: {listing.priceRange}</span>
              </div>
            </div>

            {/* Quick Mobile Sticky Info - duplicated in view as card */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 sm:hidden">
              <button 
                onClick={handleCall}
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-extrabold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 fill-white" />
                GỌI NGAY
              </button>
              <button 
                onClick={handleZalo}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                ZALO CHỦ
              </button>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">Giới thiệu dịch vụ</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify whitespace-pre-line">
                {listing.description}
              </p>
            </div>

            {/* Amenities Grid */}
            {listing.amenities && listing.amenities.length > 0 && (
              <div className="space-y-2.5">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">Tiện ích đi kèm</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {listing.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-700 border border-slate-100/50">
                      <div className="bg-emerald-100 text-emerald-700 p-0.5 rounded-full shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="line-clamp-1">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Google Map Section */}
            <div className="space-y-2.5">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-600" />
                Bản đồ vị trí (Google Maps)
              </h3>
              <div className="w-full aspect-16/9 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                <iframe
                  title={`Bản đồ ${listing.name}`}
                  src={listing.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="text-right">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(listing.name + ', Tam Hải, Núi Thành, Quảng Nam')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-cyan-600 hover:text-cyan-700 inline-flex items-center gap-1"
                >
                  Mở trực tiếp trên ứng dụng Google Maps &rarr;
                </a>
              </div>
            </div>

            {/* Review Section */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-indigo-500" />
                Du khách nhận xét ({filteredReviews.length})
              </h3>

              {/* Review Input Form */}
              <form onSubmit={handleReviewSubmit} className="bg-slate-50/60 border border-slate-100 rounded-2xl p-4 space-y-4">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Gửi đánh giá của bạn</h4>
                
                {errorMsg && (
                  <div className="text-xs font-bold text-rose-600 bg-rose-50 p-2.5 rounded-xl border border-rose-100">
                    {errorMsg}
                  </div>
                )}

                {isSubmitted && (
                  <div className="text-xs font-bold text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
                    Cảm ơn bạn! Đánh giá đã được đăng thành công.
                  </div>
                )}

                {/* Rating select stars */}
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-500 block">Số sao đánh giá:</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(null)}
                        className="p-1 transition-transform hover:scale-115 focus:outline-hidden"
                      >
                        <Star 
                          className={`w-6 h-6 ${
                            star <= (hoveredRating ?? rating) 
                              ? 'fill-amber-400 text-amber-400' 
                              : 'text-slate-300'
                          }`} 
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-500 ml-2">
                      {rating === 5 ? 'Tuyệt vời (5/5)' : rating === 4 ? 'Rất tốt (4/5)' : rating === 3 ? 'Bình thường (3/5)' : rating === 2 ? 'Kém (2/5)' : 'Rất tệ (1/5)'}
                    </span>
                  </div>
                </div>

                {/* Name & Content Input */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="reviewer-name" className="text-xs font-bold text-slate-500 block">Họ tên của bạn:</label>
                    <input
                      id="reviewer-name"
                      type="text"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="VD: Anh Tuấn, Chị Lan..."
                      className="w-full text-xs sm:text-sm px-3 py-2 border border-slate-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                    />
                  </div>
                  <div className="space-y-1 sm:col-span-2">
                    <label htmlFor="reviewer-comment" className="text-xs font-bold text-slate-500 block">Nhận xét của bạn:</label>
                    <textarea
                      id="reviewer-comment"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Chia sẻ trải nghiệm thực tế của bạn tại cơ sở này..."
                      rows={3}
                      className="w-full text-xs sm:text-sm px-3 py-2 border border-slate-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-hidden resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-2 px-5 rounded-xl text-xs transition-all shadow-sm"
                  >
                    Gửi Nhận Xét
                  </button>
                </div>
              </form>

              {/* Reviews List */}
              <div className="space-y-3.5">
                {filteredReviews.length === 0 ? (
                  <div className="text-center py-6 bg-slate-50 rounded-xl">
                    <p className="text-xs text-slate-500 font-medium">Chưa có đánh giá nào. Hãy là người đầu tiên để lại nhận xét!</p>
                  </div>
                ) : (
                  filteredReviews.map((rev) => (
                    <div key={rev.id} className="bg-slate-50/50 border border-slate-100 rounded-xl p-3.5 space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-slate-200 text-slate-600 p-1.5 rounded-full">
                            <User className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-xs font-extrabold text-slate-900 block">{rev.author}</span>
                            <div className="flex items-center text-amber-500">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-3 h-3 ${i < rev.rating ? 'fill-amber-500 text-amber-500' : 'text-slate-200'}`} 
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400 text-[10px] font-semibold">
                          <Calendar className="w-3 h-3" />
                          <span>{rev.date}</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-1">
                        {rev.content}
                      </p>
                    </div>
                  ))
                )}
              </div>

            </div>

          </div>
        </div>

        {/* Sticky Action Bar at bottom of screen on Mobile/Desktop */}
        <div className="absolute bottom-0 inset-x-0 p-4 bg-white/95 backdrop-blur-md border-t border-slate-100 grid grid-cols-2 gap-3 shrink-0 z-20 shadow-lg">
          <button 
            id={`detail-call-${listing.id}`}
            onClick={handleCall}
            className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-black py-3 px-4 rounded-xl text-sm transition-all shadow-sm shadow-rose-100"
          >
            <Phone className="w-4 h-4 fill-white" />
            GỌI NGAY: {listing.phone}
          </button>
          <button 
            id={`detail-zalo-${listing.id}`}
            onClick={handleZalo}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black py-3 px-4 rounded-xl text-sm transition-all shadow-sm shadow-blue-100"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            CHAT ZALO CHỦ
          </button>
        </div>

      </div>
    </div>
  );
}
