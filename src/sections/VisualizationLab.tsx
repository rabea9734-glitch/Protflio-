import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, LineChart, PieChart, ScatterChart, Grid, Sliders, RefreshCw, Layers, TrendingUp, Info } from 'lucide-react';
import { playTelemetryBeep, playDataClick } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

type ChartType = 'line' | 'bar' | 'area' | 'scatter' | 'heatmap';
type TimeRange = '30d' | '90d' | 'ytd';

export const VisualizationLab: React.FC = () => {
  const { t, isArabic } = useLanguage();
  const [activeChart, setActiveChart] = useState<ChartType>('line');
  const [timeRange, setTimeRange] = useState<TimeRange>('90d');
  const [activeSegment, setActiveSegment] = useState<'all' | 'enterprise' | 'growth'>('all');
  const [hoveredPoint, setHoveredPoint] = useState<{ label: string; value: string; secondary?: string } | null>(null);

  // Dynamic multipliers based on timeRange
  const multiplier = timeRange === '30d' ? 0.6 : timeRange === '90d' ? 1.0 : 1.45;

  // 1. Line Chart Dataset (Revenue vs CAC over 8 periods)
  const lineData = [
    { period: 'P1', revenue: 120 * multiplier, cac: 42, label: 'Jan / Initial Launch' },
    { period: 'P2', revenue: 145 * multiplier, cac: 39, label: 'Feb / Feature Beta' },
    { period: 'P3', revenue: 190 * multiplier, cac: 36, label: 'Mar / Enterprise Pilot' },
    { period: 'P4', revenue: 230 * multiplier, cac: 33, label: 'Apr / SQL Optimization' },
    { period: 'P5', revenue: 290 * multiplier, cac: 28, label: 'May / Churn Mitigation' },
    { period: 'P6', revenue: 380 * multiplier, cac: 25, label: 'Jun / Channel Expansion' },
    { period: 'P7', revenue: 450 * multiplier, cac: 22, label: 'Jul / Cohort Maturation' },
    { period: 'P8', revenue: 560 * multiplier, cac: 19, label: 'Aug / Scale Inflection' },
  ];

  // 2. Bar Chart Dataset (Channel Conversion %)
  const barData = [
    { channel: 'Organic Search', rate: 4.8 * (activeSegment === 'enterprise' ? 1.3 : 1), volume: '48.2K' },
    { channel: 'Direct Referral', rate: 6.2 * (activeSegment === 'enterprise' ? 1.6 : 1), volume: '22.1K' },
    { channel: 'Outbound SDR', rate: 8.5 * (activeSegment === 'growth' ? 0.7 : 1.4), volume: '14.5K' },
    { channel: 'Paid Search (SEM)', rate: 3.2 * (activeSegment === 'enterprise' ? 0.8 : 1.1), volume: '95.0K' },
    { channel: 'Product Virality', rate: 7.4 * (activeSegment === 'enterprise' ? 1.1 : 1.5), volume: '68.4K' },
  ];

  // 3. Area Chart Dataset (Net Retention Rate)
  const areaData = [
    { month: 'M0', nrr: 100 },
    { month: 'M2', nrr: 104 },
    { month: 'M4', nrr: 112 },
    { month: 'M6', nrr: 121 },
    { month: 'M8', nrr: 129 },
    { month: 'M10', nrr: 136 },
    { month: 'M12', nrr: 144 },
  ];

  // 4. Scatter Plot Dataset (Order Value vs Lifetime Frequency)
  const scatterPoints = [
    { x: 25, y: 35, cluster: 'Low-Frequency Bronze', val: '$250' },
    { x: 45, y: 55, cluster: 'Mid-Tier Silver', val: '$780' },
    { x: 65, y: 70, cluster: 'High-LTV Gold', val: '$2,400' },
    { x: 80, y: 88, cluster: 'Strategic Enterprise VIP', val: '$8,900' },
    { x: 30, y: 75, cluster: 'High-Cadence Low-Basket', val: '$420' },
    { x: 75, y: 40, cluster: 'High-Basket Low-Cadence', val: '$3,100' },
    { x: 90, y: 92, cluster: 'Strategic Enterprise VIP', val: '$14,200' },
    { x: 55, y: 62, cluster: 'Mid-Tier Silver', val: '$1,150' },
  ];

  // 5. Heatmap (7 days x 8 blocks)
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const hours = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];

  const getHeatColor = (dayIdx: number, hourIdx: number) => {
    const val = (Math.sin(dayIdx * 1.5 + hourIdx * 0.8) + 1) / 2;
    if (val > 0.75) return 'bg-cyan-400 text-slate-950';
    if (val > 0.5) return 'bg-cyan-600/80 text-white';
    if (val > 0.25) return 'bg-cyan-900/60 text-slate-300';
    return 'bg-slate-900/60 text-slate-500';
  };

  return (
    <section id="lab" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#04060b]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.08] pb-6 gap-4">
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{t.lab.sectionBadge}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              {t.lab.sectionTitle}
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-sm text-left rtl:text-right">
            {t.lab.sectionSubtitle}
          </p>
        </div>

        {/* Lab Controls Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/80 border border-white/10">
          {/* Chart Selector Tabs */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {[
              { id: 'line', label: 'LINE INFLECTION', icon: LineChart },
              { id: 'bar', label: 'CHANNEL VELOCITY', icon: BarChart3 },
              { id: 'area', label: 'NET RETENTION', icon: TrendingUp },
              { id: 'scatter', label: 'RFM CLUSTERS', icon: ScatterChart },
              { id: 'heatmap', label: 'USAGE HEATMAP', icon: Grid },
            ].map((chart) => {
              const Icon = chart.icon;
              return (
                <button
                  key={chart.id}
                  onClick={() => {
                    setActiveChart(chart.id as ChartType);
                    playTelemetryBeep(750, 0.02);
                  }}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all ${
                    activeChart === chart.id
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{chart.label}</span>
                </button>
              );
            })}
          </div>

          {/* Timeframe & Segment Filters */}
          <div className="flex items-center space-x-4 font-mono text-xs">
            <div className="flex bg-slate-900 border border-white/10 rounded-lg p-0.5">
              {(['30d', '90d', 'ytd'] as TimeRange[]).map((range) => (
                <button
                  key={range}
                  onClick={() => {
                    setTimeRange(range);
                    playDataClick();
                  }}
                  className={`px-2.5 py-1 rounded uppercase ${
                    timeRange === range
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

            {activeChart === 'bar' && (
              <select
                value={activeSegment}
                onChange={(e) => {
                  setActiveSegment(e.target.value as 'all' | 'enterprise' | 'growth');
                  playDataClick();
                }}
                className="bg-slate-900 border border-white/10 text-slate-300 rounded-lg px-2.5 py-1 focus:outline-none focus:border-cyan-400 text-xs font-mono"
              >
                <option value="all">Cohort: All Accounts</option>
                <option value="enterprise">Cohort: Enterprise</option>
                <option value="growth">Cohort: Growth</option>
              </select>
            )}
          </div>
        </div>

        {/* Main Chart Canvas Stage */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#070b13] border border-white/10 shadow-2xl relative min-h-[420px] flex flex-col justify-between">
          {/* Top Status & Live Hover Tooltip Display */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/5 text-xs font-mono">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-slate-400 uppercase tracking-wider">
                ACTIVE EXPERIMENT // {activeChart.toUpperCase()}_STAGE
              </span>
            </div>

            {/* Hover Data Readout */}
            <div className="bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-md text-cyan-300">
              {hoveredPoint ? (
                <span>
                  {hoveredPoint.label}: <strong className="text-white">{hoveredPoint.value}</strong>
                  {hoveredPoint.secondary && <span className="text-slate-400 ml-2">({hoveredPoint.secondary})</span>}
                </span>
              ) : (
                <span className="text-slate-500">HOVER DATA POINTS TO INSPECT TELEMETRY</span>
              )}
            </div>
          </div>

          {/* Render Active Chart Geometry */}
          <div className="py-8 flex-1 flex items-center justify-center">
            {/* 1. LINE CHART */}
            {activeChart === 'line' && (
              <div className="w-full space-y-4">
                <div className="relative h-64 w-full flex items-end">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 border-b border-white/20">
                    <div className="border-b border-white/10 w-full" />
                    <div className="border-b border-white/10 w-full" />
                    <div className="border-b border-white/10 w-full" />
                  </div>

                  {/* SVG Line & Area Path */}
                  <svg className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                      <linearGradient id="areaFill" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Polyline Path */}
                    <polyline
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="3"
                      points={lineData
                        .map((d, i) => {
                          const x = (i / (lineData.length - 1)) * 100;
                          const y = 100 - (d.revenue / 600) * 85;
                          return `${x}%,${y}%`;
                        })
                        .join(' ')}
                    />

                    {/* Interactive Points */}
                    {lineData.map((d, i) => {
                      const x = (i / (lineData.length - 1)) * 100;
                      const y = 100 - (d.revenue / 600) * 85;
                      return (
                        <circle
                          key={i}
                          cx={`${x}%`}
                          cy={`${y}%`}
                          r="6"
                          className="fill-cyan-400 stroke-slate-950 stroke-2 cursor-pointer hover:r-8 transition-all"
                          onMouseEnter={() => {
                            setHoveredPoint({
                              label: d.label,
                              value: `$${Math.round(d.revenue)}K ARR`,
                              secondary: `CAC: $${d.cac}`
                            });
                            playTelemetryBeep(700 + i * 50, 0.02);
                          }}
                          onMouseLeave={() => setHoveredPoint(null)}
                        />
                      );
                    })}
                  </svg>
                </div>

                {/* X-Axis labels */}
                <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-white/10">
                  {lineData.map((d, i) => (
                    <span key={i}>{d.period}</span>
                  ))}
                </div>
              </div>
            )}

            {/* 2. BAR CHART */}
            {activeChart === 'bar' && (
              <div className="w-full space-y-6">
                <div className="space-y-3">
                  {barData.map((item, idx) => (
                    <div
                      key={item.channel}
                      className="space-y-1 group cursor-pointer"
                      onMouseEnter={() => {
                        setHoveredPoint({
                          label: item.channel,
                          value: `${item.rate.toFixed(1)}% Conversion Rate`,
                          secondary: `${item.volume} Visits`
                        });
                        playTelemetryBeep(650 + idx * 40, 0.02);
                      }}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      <div className="flex justify-between text-xs font-mono text-slate-300">
                        <span>{item.channel}</span>
                        <span className="text-cyan-400 font-bold">{item.rate.toFixed(1)}%</span>
                      </div>
                      <div className="h-6 w-full bg-slate-900 rounded-lg overflow-hidden p-0.5 border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(item.rate / 12) * 100}%` }}
                          transition={{ duration: 0.6, delay: idx * 0.08 }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded group-hover:from-cyan-400 group-hover:to-blue-400 transition-all flex items-center justify-end pr-2"
                        >
                          <span className="text-[10px] font-mono text-slate-950 font-bold hidden sm:inline">
                            {item.volume}
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. AREA CHART */}
            {activeChart === 'area' && (
              <div className="w-full space-y-4">
                <div className="relative h-64 w-full flex items-end">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="nrrGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    <polygon
                      fill="url(#nrrGrad)"
                      points={`0,100 ${areaData
                        .map((d, i) => {
                          const x = (i / (areaData.length - 1)) * 100;
                          const y = 100 - ((d.nrr - 90) / 70) * 100;
                          return `${x.toFixed(1)},${y.toFixed(1)}`;
                        })
                        .join(' ')} 100,100`}
                    />

                    <polyline
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      points={areaData
                        .map((d, i) => {
                          const x = (i / (areaData.length - 1)) * 100;
                          const y = 100 - ((d.nrr - 90) / 70) * 100;
                          return `${x.toFixed(1)},${y.toFixed(1)}`;
                        })
                        .join(' ')}
                    />

                    {areaData.map((d, i) => {
                      const x = (i / (areaData.length - 1)) * 100;
                      const y = 100 - ((d.nrr - 90) / 70) * 100;
                      return (
                        <circle
                          key={i}
                          cx={x.toFixed(1)}
                          cy={y.toFixed(1)}
                          r="2.5"
                          className="fill-emerald-400 stroke-slate-950 stroke-1 cursor-pointer hover:scale-125 transition-all"
                          onMouseEnter={() => {
                            setHoveredPoint({
                              label: d.month,
                              value: `${d.nrr}% NRR`,
                              secondary: `Expansion: +${d.nrr - 100}%`
                            });
                            playTelemetryBeep(800 + i * 40, 0.02);
                          }}
                          onMouseLeave={() => setHoveredPoint(null)}
                        />
                      );
                    })}
                  </svg>
                </div>
                <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-white/10">
                  {areaData.map((d, i) => (
                    <span key={i}>{d.month}</span>
                  ))}
                </div>
              </div>
            )}

            {/* 4. SCATTER PLOT */}
            {activeChart === 'scatter' && (
              <div className="w-full relative h-72 border border-white/10 rounded-xl p-4 bg-slate-950/60 flex items-center justify-center">
                {/* Quadrant crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full border-t border-white/10" />
                  <div className="h-full border-l border-white/10 absolute" />
                </div>

                <div className="absolute top-2 right-2 text-[10px] font-mono text-emerald-400">HIGH LTV / HIGH CADENCE</div>
                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-rose-400">AT-RISK / LOW BASKET</div>

                <div className="relative w-full h-full">
                  {scatterPoints.map((pt, i) => (
                    <div
                      key={i}
                      style={{ left: `${pt.x}%`, top: `${100 - pt.y}%` }}
                      onMouseEnter={() => {
                        setHoveredPoint({
                          label: pt.cluster,
                          value: pt.val,
                          secondary: `Score: ${pt.x + pt.y}`
                        });
                        playTelemetryBeep(750 + i * 30, 0.02);
                      }}
                      onMouseLeave={() => setHoveredPoint(null)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400/80 hover:bg-cyan-300 border-2 border-slate-950 cursor-pointer shadow-[0_0_12px_rgba(6,182,212,0.6)] hover:scale-150 transition-transform"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 5. HEATMAP */}
            {activeChart === 'heatmap' && (
              <div className="w-full space-y-2 overflow-x-auto">
                <div className="min-w-[500px] space-y-1">
                  {days.map((day, dIdx) => (
                    <div key={day} className="flex items-center space-x-2">
                      <span className="w-10 font-mono text-[10px] text-slate-400">{day}</span>
                      <div className="flex-1 grid grid-cols-8 gap-1.5">
                        {hours.map((hour, hIdx) => {
                          const color = getHeatColor(dIdx, hIdx);
                          return (
                            <div
                              key={hour}
                              onMouseEnter={() => {
                                setHoveredPoint({
                                  label: `${day} @ ${hour}`,
                                  value: `Active Load: ${Math.round(((dIdx + 1) * (hIdx + 1) * 34) % 100)}%`,
                                  secondary: 'Peak Transaction Zone'
                                });
                                playTelemetryBeep(600 + (dIdx + hIdx) * 30, 0.02);
                              }}
                              onMouseLeave={() => setHoveredPoint(null)}
                              className={`h-7 rounded cursor-pointer transition-all hover:scale-110 flex items-center justify-center text-[9px] font-mono font-bold ${color}`}
                            >
                              {hour.slice(0, 2)}h
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Lab Footer Specs */}
          <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
            <span>DATA ENGINE: VECTORIZED PANDAS / D3 SIMULATION</span>
            <span>SAMPLE INTERVAL: 50MS</span>
            <span className="text-cyan-400">STATUS: INTERACTIVE_CALIBRATED</span>
          </div>
        </div>
      </div>
    </section>
  );
};
