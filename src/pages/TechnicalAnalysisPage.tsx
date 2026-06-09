import { Activity, TrendingUp } from 'lucide-react';
import { PriceChart, AnnualChangeChart, RSIChart, Footnotes } from '../components';
import { xauusdMonthlyData, annualSummaryData, technicalIndicators } from '../data';

export default function TechnicalAnalysisPage() {
  const footnotes = [
    { id: 'ta1', content: 'RSI: Momentum oscillator measuring price velocity.', source: 'Wilder (1978)' },
    { id: 'ta2', content: 'MACD: Trend-following momentum indicator.', source: 'Appel (1979)' },
  ];
  return (
    <div className="min-h-screen bg-primary-950 pt-20">
      <section className="bg-gradient-to-br from-primary-900 to-primary-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="w-6 h-6 text-gold-400" />
            <span className="text-sm font-mono text-gold-400">Page 2 of 6</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Technical Analysis</h1>
          <p className="text-xl text-primary-300">XAUUSD price action 2010-2020 with momentum oscillators.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-6">
            <h2 className="font-display text-2xl font-bold text-white mb-4">XAUUSD Price Chart (2010-2020)</h2>
            <PriceChart data={xauusdMonthlyData} height={400} />
          </div>
          <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-6">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Annual Performance</h2>
            <AnnualChangeChart data={annualSummaryData.map(d => ({ year: d.year, changePercent: d.changePercent }))} />
            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="bg-primary-800/50 rounded-lg p-4 text-center">
                <p className="text-sm text-primary-400">Best Year</p>
                <p className="font-mono text-xl font-bold text-success-400">+29.4%</p>
                <p className="text-xs text-primary-500">2010</p>
              </div>
              <div className="bg-primary-800/50 rounded-lg p-4 text-center">
                <p className="text-sm text-primary-400">Worst Year</p>
                <p className="font-mono text-xl font-bold text-error-400">-27.4%</p>
                <p className="text-xs text-primary-500">2013</p>
              </div>
              <div className="bg-primary-800/50 rounded-lg p-4 text-center">
                <p className="text-sm text-primary-400">Avg Return</p>
                <p className="font-mono text-xl font-bold text-white">+6.1%</p>
                <p className="text-xs text-primary-500">Per annum</p>
              </div>
              <div className="bg-primary-800/50 rounded-lg p-4 text-center">
                <p className="text-sm text-primary-400">Avg Price</p>
                <p className="font-mono text-xl font-bold text-gold-400">$1,379</p>
                <p className="text-xs text-primary-500">2010-2020</p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-6">
              <h3 className="font-display text-xl font-bold text-white mb-4">RSI Indicator</h3>
              <RSIChart data={technicalIndicators} />
              <p className="text-xs text-primary-400 mt-4">RSI above 70 = overbought. Note Q3 2020 reading of 75.</p>
            </div>
            <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-6">
              <h3 className="font-display text-xl font-bold text-white mb-4">Key Observations</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-success-600/20 rounded-lg flex items-center justify-center"><TrendingUp className="w-4 h-4 text-success-400" /></div>
                  <div>
                    <h4 className="font-semibold text-white">2011 Bubble Peak</h4>
                    <p className="text-sm text-primary-400">RSI reached 82, preceding 45% correction.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold-600/20 rounded-lg flex items-center justify-center"><Activity className="w-4 h-4 text-gold-400" /></div>
                  <div>
                    <h4 className="font-semibold text-white">2020 Momentum Surge</h4>
                    <p className="text-sm text-primary-400">MACD expansion to +10, highest in dataset.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footnotes notes={footnotes} />
        </div>
      </section>
    </div>
  );
}