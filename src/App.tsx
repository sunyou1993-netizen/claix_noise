import React from 'react';

export default function App() {
  return (
    <div className="h-screen w-screen bg-[#EBF4FF] flex flex-col items-center justify-center p-6 text-center select-none font-sans">
      <div className="bg-white/70 backdrop-blur-md p-8 rounded-[32px] shadow-lg border border-white/60 max-w-md">
        {/* SVG mascot badge */}
        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" stroke-linejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
            <path d="M19 10v1a7 7 0 0 1-14 0v-1"/>
            <line x1="12" x2="12" y1="19" y2="22"/>
          </svg>
        </div>
        
        <h1 className="text-2xl font-black text-slate-800 tracking-tight mb-3">
          소음측정기 정적파일 분리 완료
        </h1>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          안드로이드 및 iOS 웹뷰(WebView)에 직접 삽입하여 가져가실 수 있는 최종 정적 소스코드 파일 분리가 완료되었습니다. 
        </p>

        <div className="text-left bg-slate-50 border border-slate-100 p-4 rounded-xl font-mono text-xs text-slate-500 mb-6 space-y-1">
          <div className="flex items-center gap-1.5 p-0.5">
            <span class="text-blue-500 font-bold">✓</span> <span>/public/index.html</span>
          </div>
          <div class="flex items-center gap-1.5 p-0.5">
            <span class="text-blue-500 font-bold">✓</span> <span>/public/style.css</span>
          </div>
          <div class="flex items-center gap-1.5 p-0.5">
            <span class="text-blue-500 font-bold">✓</span> <span>/public/app.js</span>
          </div>
          <div class="flex items-center gap-1.5 p-0.5">
            <span class="text-blue-500 font-bold">✓</span> <span>/public/noise.png</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-400">
          * 실제 모바일 기기 웹뷰 테스트 및 개발자 도구 활용은 root <b className="font-bold text-slate-500">index.html</b> 또는 상단 정적 파일을 활용해 주십시오.
        </p>
      </div>
    </div>
  );
}
