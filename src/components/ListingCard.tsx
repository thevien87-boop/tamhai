import React from 'react';
import { Listing } from '../types';
import { Phone, MessageSquare, MapPin, DollarSign, Star, ChevronRight } from 'lucide-react';

interface ListingCardProps {
  key?: string;
  listing: Listing;
  onClick: () => void;
}

export default function ListingCard({ listing, onClick }: ListingCardProps) {
  // Prevent button click from opening the modal
  const handleCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `tel:${listing.phone}`;
  };

  const handleZalo = (e: React.MouseEvent) => {
    e.stopPropagation();
    // In Vietnam, Zalo links usually take the format https://zalo.me/PHONE_NUMBER
    const cleanPhone = listing.phone.replace(/\s+/g, '');
    window.open(`https://zalo.me/${cleanPhone}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      id={`listing-card-${listing.id}`}
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col h-full group"
    >
      {/* Listing Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
        <img
          src={listing.image}
          alt={listing.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Category Tag */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-bold text-slate-800 shadow-sm border border-slate-100/50">
          {listing.subCategory}
        </div>
        {/* Featured Tag */}
        {listing.featured && (
          <div className="absolute top-3 right-3 bg-amber-500 text-white px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm">
            Nổi bật
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Title & Rating */}
          <div className="flex justify-between items-start gap-1">
            <h3 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-cyan-600 transition-colors">
              {listing.name}
            </h3>
            <div className="flex items-center gap-0.5 text-amber-500 shrink-0 font-bold text-xs bg-amber-50 px-1.5 py-0.5 rounded-md">
              <Star className="w-3 h-3 fill-amber-500" />
              <span>{listing.rating.toFixed(1)}</span>
            </div>
          </div>

          {/* Location & Address */}
          <div className="flex items-start gap-1.5 text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <p className="text-xs line-clamp-2 leading-relaxed">
              {listing.address}
            </p>
          </div>

          {/* Pricing Info */}
          <div className="flex items-center gap-1.5 text-cyan-700 font-semibold text-xs bg-cyan-50/50 p-2 rounded-lg">
            <DollarSign className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
            <span className="line-clamp-1">{listing.priceRange}</span>
          </div>
        </div>

        {/* Action Buttons directly on Card */}
        <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
          <button
            onClick={handleCall}
            className="flex items-center justify-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold py-2 px-3 rounded-xl text-xs transition-all border border-rose-100"
          >
            <Phone className="w-3.5 h-3.5 fill-rose-700" />
            GỌI NGAY
          </button>
          <button
            onClick={handleZalo}
            className="flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold py-2 px-3 rounded-xl text-xs transition-all border border-blue-100"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-blue-700" />
            ZALO CHỦ
          </button>
        </div>

        {/* Click details indicator */}
        <div className="mt-3 text-center md:text-left">
          <span className="text-[11px] font-semibold text-cyan-600 hover:text-cyan-700 inline-flex items-center gap-0.5">
            Xem chi tiết, bản đồ & đánh giá
            <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
