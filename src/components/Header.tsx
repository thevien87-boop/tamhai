import { useState } from 'react';
import { Search, MapPin, Compass, BookOpen, PhoneCall, PlusCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  onOpenRegister: () => void;
  tab: 'directory' | 'blog' | 'emergency';
  setTab: (tab: 'directory' | 'blog' | 'emergency') => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  onOpenRegister,
  tab,
  setTab
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'Tất cả dịch vụ', icon: Compass },
    { id: 'accommodation', label: 'Chỗ ở', icon: MapPin },
    { id: 'dining', label: 'Ăn uống', icon: Compass },
    { id: 'transport', label: 'Di chuyển & Trải nghiệm', icon: Compass }
  ];

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-40 shadow-xs">
      {/* Upper Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { setTab('directory'); setActiveCategory('all'); }}>
            <div className="bg-cyan-600 text-white p-2 rounded-xl flex items-center justify-center shadow-md shadow-cyan-200">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
                TAM HẢI <span className="text-cyan-600 text-xs px-2 py-0.5 bg-cyan-50 rounded-full font-semibold border border-cyan-100">DIRECTORY</span>
              </h1>
              <p className="text-[10px] font-medium text-slate-500 tracking-wider uppercase">Danh bạ du lịch xã đảo trực tuyến</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <button
              onClick={() => setTab('directory')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                tab === 'directory'
                  ? 'bg-cyan-50 text-cyan-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Compass className="w-4 h-4" />
              Danh bạ Dịch vụ
            </button>
            <button
              onClick={() => setTab('blog')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                tab === 'blog'
                  ? 'bg-cyan-50 text-cyan-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Cẩm nang du lịch
            </button>
            <button
              onClick={() => setTab('emergency')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                tab === 'emergency'
                  ? 'bg-rose-50 text-rose-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              Thông tin khẩn cấp
            </button>
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden md:block">
            <button
              onClick={onOpenRegister}
              className="bg-cyan-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-cyan-700 transition-all shadow-sm shadow-cyan-100 flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              Đăng ký kinh doanh
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenRegister}
              className="bg-cyan-600 text-white p-2 rounded-lg text-sm font-medium hover:bg-cyan-700 transition-all flex items-center gap-1"
              title="Đăng ký dịch vụ"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="text-xs font-semibold hidden sm:inline">Đăng ký</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 focus:outline-hidden"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-2 animate-fadeIn">
          <button
            onClick={() => { setTab('directory'); setIsMenuOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold flex items-center gap-3 ${
              tab === 'directory' ? 'bg-cyan-50 text-cyan-700' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Compass className="w-5 h-5 text-cyan-500" />
            Danh bạ Dịch vụ
          </button>
          <button
            onClick={() => { setTab('blog'); setIsMenuOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold flex items-center gap-3 ${
              tab === 'blog' ? 'bg-cyan-50 text-cyan-700' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-5 h-5 text-indigo-500" />
            Cẩm nang du lịch
          </button>
          <button
            onClick={() => { setTab('emergency'); setIsMenuOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold flex items-center gap-3 ${
              tab === 'emergency' ? 'bg-rose-50 text-rose-700' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <PhoneCall className="w-5 h-5 text-rose-500" />
            Thông tin khẩn cấp
          </button>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => { onOpenRegister(); setIsMenuOpen(false); }}
              className="w-full bg-slate-900 text-white text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              Đăng ký thêm cơ sở kinh doanh
            </button>
          </div>
        </div>
      )}

      {/* Hero Search Area (Only visible on directory tab) */}
      {tab === 'directory' && (
        <div className="bg-slate-50 py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
          <div className="max-w-3xl mx-auto space-y-3">
            {/* Search Input */}
            <div className="relative rounded-2xl shadow-xs">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm: homestay, hải sản, cano, xe máy, bãi nồm..."
                className="block w-full pl-11 pr-4 py-3 border-0 bg-white text-slate-900 rounded-xl placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:outline-hidden text-sm sm:text-base shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 text-xs font-semibold"
                >
                  Xóa
                </button>
              )}
            </div>

            {/* Sub-navigation for Directory Categories */}
            <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                      isSelected
                        ? 'bg-cyan-600 text-white shadow-xs'
                        : 'bg-white text-slate-600 border border-slate-200/60 hover:border-slate-300'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
