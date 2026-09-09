import React, { useEffect, useState } from 'react';
import { Activity, ShieldCheck, Cpu, Database } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TelemetryBar: React.FC = () => {
  const { isArabic } = useLanguage();
  const [randomPing, setRandomPing] = useState(14);
  const [rowsProcessed, setRowsProcessed] = useState(2410850);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomPing(Math.floor(11 + Math.random() * 8));
      setRowsProcessed((prev) => prev + Math.floor(Math.random() * 45));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#03060b] border-y border-white/[0.06] py-2 px-4 overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-y-2">
        {/* Metric 1 */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span className="text-slate-400">{isArabic ? 'حالة النظام:' : 'ENGINE_STATUS:'}</span>
          <span className="text-emerald-400 font-semibold tracking-wider">
            {isArabic ? 'متصل // أداء مثالي' : 'ONLINE // OPTIMAL'}
          </span>
        </div>

        {/* Metric 2 */}
        <div className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse">
          <Database className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-400">{isArabic ? 'السجلات المعالجة:' : 'TOTAL_DATA_INGEST:'}</span>
          <span className="text-slate-200" dir="ltr">{rowsProcessed.toLocaleString()} TXS</span>
        </div>

        {/* Metric 3 */}
        <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-slate-400">{isArabic ? 'مستوى الثقة الإحصائية:' : 'STATISTICAL_CONFIDENCE:'}</span>
          <span className="text-cyan-300 font-semibold" dir="ltr">99.2% (p &lt; 0.001)</span>
        </div>

        {/* Metric 4 */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Cpu className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-slate-400">{isArabic ? 'الاستجابة:' : 'LATENCY:'}</span>
          <span className="text-slate-300" dir="ltr">{randomPing}ms</span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400 text-[10px] tracking-wider uppercase">
            {isArabic ? 'جاهزية عالية // متاح' : 'OPTIMAL // READY'}
          </span>
        </div>
      </div>
    </div>
  );
};
