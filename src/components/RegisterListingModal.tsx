import React, { useState } from 'react';
import { X, CheckCircle, PlusCircle, User, Phone, MapPin, Tag, Landmark } from 'lucide-react';
import { ListingSubmission } from '../types';

interface RegisterListingModalProps {
  onClose: () => void;
}

export default function RegisterListingModal({ onClose }: RegisterListingModalProps) {
  const [formData, setFormData] = useState<ListingSubmission>({
    name: '',
    category: 'accommodation',
    subCategory: 'Homestay',
    phone: '',
    zalo: '',
    address: '',
    priceRange: '',
    description: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const subCategories: Record<string, string[]> = {
    accommodation: ['Homestay', 'Nhà nghỉ', 'Cắm trại'],
    dining: ['Quán hải sản', 'Quán bình dân', 'Cafe'],
    transport: ['Thuê tàu/Cano', 'Thuê xe máy', 'Tour bản địa']
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cat = e.target.value;
    const firstSubCat = subCategories[cat][0];
    setFormData({
      ...formData,
      category: cat,
      subCategory: firstSubCat
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validations
    if (!formData.name.trim()) {
      setErrorMsg('Vui lòng nhập tên cơ sở kinh doanh.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Vui lòng nhập số điện thoại liên hệ.');
      return;
    }
    if (!formData.address.trim()) {
      setErrorMsg('Vui lòng nhập địa chỉ cụ thể.');
      return;
    }
    if (!formData.priceRange.trim()) {
      setErrorMsg('Vui lòng cung cấp khoảng giá (Ví dụ: 200.000đ - 500.000đ).');
      return;
    }
    if (!formData.description.trim()) {
      setErrorMsg('Vui lòng viết một đoạn ngắn giới thiệu cơ sở dịch vụ.');
      return;
    }

    // Simulate successful registration
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 animate-slideUp">
        
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 bg-slate-50 border-b border-slate-100 shrink-0">
          <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-cyan-600" />
            Đăng ký đưa dịch vụ lên danh bạ
          </h3>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto max-h-[80vh]">
          {isSuccess ? (
            <div className="text-center py-8 px-4 space-y-4 animate-fadeIn">
              <div className="inline-flex items-center justify-center bg-emerald-100 text-emerald-600 p-4 rounded-full shadow-md shadow-emerald-50">
                <CheckCircle className="w-12 h-12" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-lg font-black text-slate-900">Đăng ký thành công!</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                  Thông tin cơ sở <strong>{formData.name}</strong> đã được gửi tới Ban quản trị du lịch Tam Hải. Chúng tôi sẽ liên hệ xác minh qua số điện thoại <strong>{formData.phone}</strong> trong vòng 24 giờ trước khi hiển thị chính thức lên danh bạ.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="bg-slate-950 hover:bg-slate-800 text-white font-extrabold py-2.5 px-6 rounded-xl text-sm transition-all"
                >
                  Đóng cửa sổ
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed">
                Bạn là chủ Homestay, Nhà nghỉ, nhà hàng hải sản, dịch vụ Cano hay cho thuê xe máy tại Tam Hải? Hãy nhập thông tin dưới đây để được hỗ trợ hiển thị thông tin <strong>HOÀN TOÀN MIỄN PHÍ</strong> giúp tiếp cận hàng ngàn du khách mỗi ngày.
              </p>

              {errorMsg && (
                <div className="text-xs font-bold text-rose-600 bg-rose-50 p-2.5 rounded-xl border border-rose-100">
                  {errorMsg}
                </div>
              )}

              {/* Business Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block flex items-center gap-1">
                  <Landmark className="w-3.5 h-3.5 text-slate-400" />
                  Tên cơ sở dịch vụ: <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="VD: Homestay Biển Xanh, Cano Chú Tư..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3.5 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                />
              </div>

              {/* Category & SubCategory */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Danh mục chính: <span className="text-rose-500">*</span></label>
                  <select
                    value={formData.category}
                    onChange={handleCategoryChange}
                    className="w-full text-xs sm:text-sm px-3 py-2 border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                  >
                    <option value="accommodation">Chỗ ở</option>
                    <option value="dining">Ăn uống</option>
                    <option value="transport">Di chuyển & Trải nghiệm</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Loại hình dịch vụ:</label>
                  <select
                    value={formData.subCategory}
                    onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3 py-2 border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                  >
                    {subCategories[formData.category].map((sub, i) => (
                      <option key={i} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Phone & Zalo */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    Số điện thoại: <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="VD: 0905XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    Số điện thoại Zalo:
                  </label>
                  <input
                    type="text"
                    placeholder="Bỏ trống nếu trùng số điện thoại"
                    value={formData.zalo}
                    onChange={(e) => setFormData({ ...formData, zalo: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Địa chỉ chi tiết tại Tam Hải: <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="VD: Thôn 1, gần Ghềnh đá Bàn Than..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                />
              </div>

              {/* Price Range */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5 text-slate-400" />
                  Khoảng giá hoặc giá cụ thể: <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="VD: 300.000đ - 500.000đ/ngày hoặc 100k/món..."
                  value={formData.priceRange}
                  onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                />
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Đoạn ngắn giới thiệu/tiện ích: <span className="text-rose-500">*</span></label>
                <textarea
                  required
                  placeholder="Giới thiệu điểm nổi bật của cơ sở, các phòng ốc, các món ăn đặc trưng hoặc cam kết phục vụ nhiệt tình..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full text-xs sm:text-sm px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-hidden resize-none"
                ></textarea>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold py-3 px-4 rounded-xl text-sm transition-all shadow-sm shadow-cyan-50"
                >
                  Gửi Thông Tin Đăng Ký
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
