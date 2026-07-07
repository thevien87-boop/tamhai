import { EMERGENCY_CONTACTS } from '../data';
import { PhoneCall, ShieldAlert, Clock, AlertTriangle, Compass, HeartHandshake } from 'lucide-react';

export default function EmergencySection() {
  return (
    <div id="emergency-section" className="space-y-6">
      
      {/* Top Banner Warning */}
      <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex gap-3.5 items-start">
        <div className="bg-amber-100 text-amber-800 p-2.5 rounded-xl shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-black text-amber-900">Lưu ý quan trọng cho du khách tự túc</h3>
          <p className="text-xs sm:text-sm text-amber-800 leading-relaxed mt-1">
            Xã đảo Tam Hải là địa bàn du lịch hoang sơ, yên bình. Tuy nhiên, trên đảo <strong>CHƯA CÓ TRẠM CÂY XĂNG lớn và KHÔNG CÓ CÂY ATM rút tiền</strong>. Du khách vui lòng rút sẵn tiền mặt ở đất liền và đổ đầy bình xăng xe máy trước khi qua phà để có trải nghiệm thuận tiện nhất!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Hotlines Section */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-50 pb-3">
            <div className="bg-rose-100 text-rose-700 p-1.5 rounded-lg">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-slate-900">Đường dây nóng hỗ trợ khẩn cấp</h3>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            Lưu lại danh sách các số điện thoại khẩn cấp dưới đây đề phòng trường hợp bạn cần hỗ trợ y tế, an ninh hoặc gặp sự cố khi lưu trú trên đảo.
          </p>

          <div className="space-y-2.5">
            {EMERGENCY_CONTACTS.map((contact, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/80 transition-all border border-slate-100/50">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{contact.name}</h4>
                  <p className="text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5">{contact.role}</p>
                </div>
                <a 
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-1 bg-rose-600 hover:bg-rose-700 text-white font-extrabold px-3 py-1.5 rounded-lg text-xs transition-all shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5 fill-white" />
                  <span>{contact.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Ferry Schedules */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-50 pb-3">
            <div className="bg-cyan-100 text-cyan-700 p-1.5 rounded-lg">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-slate-900">Lịch chạy & Giá vé phà Tam Hải</h3>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            Phà Tam Quang là con đường kết nối duy nhất giữa đất liền và đảo để di chuyển ô tô và xe máy.
          </p>

          <div className="space-y-3">
            <div className="p-3 bg-cyan-50/50 rounded-xl border border-cyan-100/40">
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-cyan-800">Thời gian hoạt động</span>
              <p className="text-xs sm:text-sm font-bold text-cyan-900 mt-1">Từ 05:00 sáng đến 19:00 tối hàng ngày</p>
              <p className="text-[11px] font-medium text-slate-500 mt-0.5">Tần suất 15 - 30 phút/chuyến. Giờ cao điểm phà chạy liên tục khi đầy xe.</p>
            </div>

            <div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100/40">
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-indigo-800">Bảng giá vé phà tạm tính</span>
              <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700 font-medium mt-1">
                <li>Khách đi bộ: Miễn phí hoặc 2.000đ/lượt.</li>
                <li>Khách kèm xe máy: 5.000đ/lượt (xe điện tương đương).</li>
                <li>Ô tô dưới 9 chỗ: 35.000đ/lượt.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Safety & Travel Tips */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-50 pb-3">
          <div className="bg-emerald-100 text-emerald-700 p-1.5 rounded-lg">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="text-base font-black text-slate-900">Văn hóa bản địa & Lưu ý an toàn biển</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="space-y-1 p-3 bg-slate-50/70 rounded-xl border border-slate-100">
            <h4 className="font-extrabold text-slate-900 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Ứng xử văn minh
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Hãy giữ gìn vệ sinh chung, tuyệt đối không xả rác tại các ghềnh đá hoang sơ và bãi biển. Hãy tôn trọng và giữ thái độ thân thiện với ngư dân địa phương.
            </p>
          </div>

          <div className="space-y-1 p-3 bg-slate-50/70 rounded-xl border border-slate-100">
            <h4 className="font-extrabold text-slate-900 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              An toàn tắm biển
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Biển Bãi Nồm rất đẹp nhưng có một số khu vực rạn đá ngầm. Du khách khi tắm biển hoặc đi cano lặn ngắm san hô bắt buộc phải mặc áo phao đầy đủ.
            </p>
          </div>

          <div className="space-y-1 p-3 bg-slate-50/70 rounded-xl border border-slate-100">
            <h4 className="font-extrabold text-slate-900 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Giờ chạy đò đêm
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Sau 19:00 phà lớn ngừng chạy. Nếu có việc gấp cần sang sông, bạn phải gọi thuê đò gỗ cá nhân với mức phí cao hơn (dao động 50.000đ - 100.000đ/chuyến).
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
