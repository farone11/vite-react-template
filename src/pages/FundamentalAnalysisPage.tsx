import { useState } from 'react';
import { Globe } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Footnotes } from '../components';
import { economicIndicators, centralBankRates, geopoliticalEvents, correlationData } from '../data';

export default function FundamentalAnalysisPage() {
  const [tab, setTab] = useState<'economic' | 'central' | 'geo' | 'corr'>('economic');
  const footnotes = [
    { id: 'fa1', content: 'USD Index: Trade-weighted index.', source: 'FRED' },
    { id: 'fa2', content: 'Fed Funds Rate: FOMC target.', source: 'Federal Reserve' },
  ];

  return (
    <div className="min-h-screen bg-primary-950 pt-20">
      <section className="bg-gradient-to-br from-primary-900 to-primary-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4">
            <Globe className="w-6 h-6 text-accent-400" />
            <span className="text-sm font-mono text-accent-400">Page 3 of 6</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Fundamental Analysis</h1>
          <p className="text-xl text-primary-300">Macroeconomic drivers 2017-2022.</p>
        </div>
      </section>
      <section className="border-b border-primary-800 bg-primary-900/50 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex space-x-2 overflow-x-auto">
            {[{id:'economic',label:'Economic'},{id:'central',label:'Central Banks'},{id:'geo',label:'Geopolitical'},{id:'corr',label:'Correlations'}].map(t => (
              <button key={t.id} onClick={() => setTab(t.id as typeof tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${tab === t.id ? 'bg-accent-600/20 text-accent-300 border border-accent-500/30' : 'text-primary-300 hover:text-white'}`}>{t.label}</button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {tab === 'economic' && (
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-4 text-center">
                  <p className="text-sm text-primary-400">USD Index</p>
                  <p className="font-mono text-2xl font-bold text-white">108.2</p>
                  <p className="text-xs text-primary-500">Q4 2022</p>
                </div>
                <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-4 text-center">
                  <p className="text-sm text-primary-400">Inflation</p>
                  <p className="font-mono text-2xl font-bold text-red-400">8.6%</p>
                  <p className="text-xs text-primary-500">Peak 2022</p>
                </div>
                <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-4 text-center">
                  <p className="text-sm text-primary-400">Fed Rate</p>
                  <p className="font-mono text-2xl font-bold text-accent-400">4.25%</p>
                  <p className="text-xs text-primary-500">Q4 2022</p>
                </div>
                <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-4 text-center">
                  <p className="text-sm text-primary-400">Unemployment</p>
                  <p className="font-mono text-2xl font-bold text-amber-400">13.3%</p>
                  <p className="text-xs text-primary-500">Peak 2020</p>
                </div>
              </div>
              <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-white mb-4">USD Index</h3>
                <div style={{ height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={economicIndicators.map(d => ({ label: `${d.year} ${d.quarter}`, usd: d.usdIndex }))}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="label" stroke="#52525b" tick={{ fontSize: 12 }} />
                      <YAxis stroke="#52525b" tick={{ fontSize: 12 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#0f1629', border: '1px solid #27272a' }} />
                      <Line type="monotone" dataKey="usd" stroke="#3a40cb" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
          {tab === 'central' && (
            <div className="bg-primary-900/50 border border-primary-700 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-primary-700"><h3 className="font-display text-2xl font-bold text-white">Central Bank Rates</h3></div>
              <table className="w-full">
                <thead className="bg-primary-800/50"><tr>
                  <th className="text-left py-3 px-6 text-sm text-primary-400">Country</th>
                  <th className="text-right py-3 px-4 text-sm text-primary-400">2017</th>
                  <th className="text-right py-3 px-4 text-sm text-primary-400">2020</th>
                  <th className="text-right py-3 px-4 text-sm text-primary-400">2022</th>
                </tr></thead>
                <tbody className="divide-y divide-primary-800">
                  {centralBankRates.map(bank => (
                    <tr key={bank.country} className="hover:bg-primary-800/30">
                      <td className="py-3 px-6 font-medium text-white">{bank.country}</td>
                      <td className="py-3 px-4 text-right font-mono text-primary-300">{bank[2017]}%</td>
                      <td className="py-3 px-4 text-right font-mono text-warning-400">{bank[2020]}%</td>
                      <td className="py-3 px-4 text-right font-mono text-gold-400">{bank[2022]}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {tab === 'geo' && (
            <div className="bg-primary-900/50 border border-primary-700 rounded-xl">
              <div className="p-6 border-b border-primary-700"><h3 className="font-display text-2xl font-bold text-white">Geopolitical Events</h3></div>
              <div className="divide-y divide-primary-800">
                {geopoliticalEvents.map((event, idx) => (
                  <div key={idx} className="p-6 hover:bg-primary-800/20 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">{event.event}</p>
                      <p className="text-sm text-primary-400">{event.date} | {event.category}</p>
                    </div>
                    <p className={`font-mono text-lg font-bold ${event.goldImpact > 0 ? 'text-success-400' : 'text-error-400'}`}>{event.goldImpact > 0 ? '+' : ''}{event.goldImpact}%</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {tab === 'corr' && (
            <div className="bg-primary-900/50 border border-primary-700 rounded-xl">
              <div className="p-6 border-b border-primary-700"><h3 className="font-display text-2xl font-bold text-white">Correlations</h3></div>
              <table className="w-full">
                <thead className="bg-primary-800/50"><tr>
                  <th className="text-left py-3 px-6 text-sm text-primary-400">Asset</th>
                  <th className="text-center py-3 px-4 text-sm text-primary-400">Correlation</th>
                </tr></thead>
                <tbody className="divide-y divide-primary-800">
                  {correlationData.map(item => (
                    <tr key={item.asset} className="hover:bg-primary-800/30">
                      <td className="py-3 px-6 font-medium text-white">{item.asset}</td>
                      <td className="py-3 px-4 text-center font-mono text-red-400">{item.correlationWithGold.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <Footnotes notes={footnotes} />
        </div>
      </section>
    </div>
  );
}