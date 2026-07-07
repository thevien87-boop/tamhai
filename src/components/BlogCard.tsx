import React, { useState } from 'react';
import { BlogPost } from '../types';
import { Calendar, User, Clock, ChevronRight, X, Compass } from 'lucide-react';

interface BlogCardProps {
  key?: string;
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Simple parser to turn simulated markdown back into formatted JSX
  const renderFormattedContent = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('### ')) {
        return (
          <h4 key={index} className="text-sm sm:text-base font-extrabold text-slate-900 mt-4 mb-2 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-cyan-600 shrink-0" />
            {paragraph.replace('### ', '')}
          </h4>
        );
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n');
        return (
          <ul key={index} className="list-disc pl-5 space-y-1.5 my-3">
            {items.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '$1')}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index} className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify mb-3">
          {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
        </p>
      );
    });
  };

  return (
    <>
      <div 
        id={`blog-card-${post.id}`}
        onClick={() => setIsOpen(true)}
        className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col md:flex-row h-full group"
      >
        {/* Cover Photo */}
        <div className="relative w-full md:w-1/3 aspect-16/9 md:aspect-auto overflow-hidden bg-slate-100 shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-cyan-600 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase">
            {post.tags[0]}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400 text-[10px] sm:text-xs font-semibold">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug line-clamp-2 group-hover:text-cyan-600 transition-colors">
              {post.title}
            </h3>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
              {post.summary}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-50 flex justify-between items-center">
            <span className="text-xs font-bold text-slate-600">Đăng bởi: {post.author}</span>
            <span className="text-xs font-bold text-cyan-600 inline-flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
              Đọc tiếp
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Blog Article Detail Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setIsOpen(false)}></div>
          
          <div className="relative w-full max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-full sm:max-h-[85vh] z-10 animate-slideUp">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-4 py-3 bg-slate-50 border-b border-slate-100 shrink-0">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-md">
                Cẩm nang du lịch Tam Hải
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {/* Cover Image */}
              <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                  {post.title}
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-400 text-xs font-semibold pt-1 border-b border-slate-100 pb-3">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Parsed Blog Content */}
              <div className="space-y-1">
                {renderFormattedContent(post.content)}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-right shrink-0">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-2 px-5 rounded-xl text-xs transition-all"
              >
                Đóng bài viết
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
