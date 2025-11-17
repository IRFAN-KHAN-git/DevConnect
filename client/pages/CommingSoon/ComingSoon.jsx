import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
        
        {/* Image */}
        <div className="mb-8">
          <img 
            src="https://illustrations.popsy.co/amber/man-riding-a-rocket.svg" 
            alt="Under Construction" 
            className="w-64 h-64 mx-auto object-contain animate-bounce "
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
          Oops! We're Still Building This
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 mb-8">
          This page is under construction. We're working on it!
        </p>

        {/* Funny Messages */}
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 mb-8">
          <p className="text-slate-300 mb-3 leading-relaxed font-medium">
            Our developers are currently:
          </p>
          <ul className="text-slate-400 space-y-2 text-left max-w-md mx-auto text-sm md:text-base">
            <li>☕ Drinking their 5th cup of coffee</li>
            <li>🐛 Fixing bugs (creating new ones too)</li>
            <li>📚 Reading Stack Overflow religiously</li>
            <li>😴 Pretending to understand async/await</li>
            <li>🎮 "Testing" on their gaming PC</li>
          </ul>
        </div>

        {/* Additional Message */}
        <p className="text-slate-400 mb-8 italic">
          "It works on my machine!" - Every Developer Ever
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-lg transition-all font-medium"
          >
            ← Go Back
          </button>
          <button
            onClick={() => navigate('/home')}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-lg transition-all font-medium shadow-lg"
          >
            Go to Home
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-sm text-slate-500">
            Expected completion: Soon™ (We promise this time)
          </p>
        </div>

      </div>
    </div>
  );
};

export default ComingSoon;