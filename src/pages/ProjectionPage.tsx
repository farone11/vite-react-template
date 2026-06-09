import { Target, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { ProjectionChart, Footnotes } from '../components';
import { projectionScenarios, keyDrivers, annualProjections } from '../data';

export default function ProjectionPage() {
  const footnotes = [
    { id: 'proj1', content: 'Monte Carlo simulation with 10,000 iterations.', source: 'Hull (2018)' },
    { id: 'proj2', content: 'For educational purposes only.', source: 'Disclaimer' },
  ];

  return (
    <div className="min-h-screen bg-primary-950 pt-20">
      <section className="bg-gradient-to-br from-primary-900 to-primary-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-6 h-6 text-success-400" />
            <span className="text-sm font-mono text-success-400">Page 4 of 6</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">XAUUSD Projection 2032</h1>
          <p className="text-xl text-primary-300">Multi-scenario Monte Carlo simulations.</p>
        </div>
      </section>
      <section className="bg-primary-900 border-b border-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-12 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success-600/20 mb-3"><TrendingUp className="w-6 h-6 text-success-400" /></div>
              <p className="font-mono text-xs text-primary-400 mb-1">Bull Case (25%)</p>
              <p className="font-display text-3xl font-bold text-success-400">$8,100</p>
              <p className="font-mono text-sm text-success-400">+326%</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-600/20 mb-3"><Target className="w-6 h-6 text-gold-400" /></div>
              <p className="font-mono text-xs text-primary-400 mb-1">Base Case (55%)</p>
              <p className="font-display text-3xl font-bold text-gold-400">$5,500</p>
              <p className="font-mono text-sm text-gold-400">+190%</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-error-600/20 mb-3"><TrendingDown className="w-6 h-6 text-error-400" /></div>
              <p className="font-mono text-xs text-primary-400 mb-1">Bear Case (20%)</p>
              <p className="font-display text-3xl font-bold text-error-400">$3,120</p>
              <p className="font-mono text-sm text-error-400">+65%</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-6">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Projection Chart</h2>
            <ProjectionChart data={annualProjections} />
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {projectionScenarios.map(scenario => (
              <div key={scenario.scenario} className={`bg-primary-900/50 border rounded-xl p-6 ${scenario.scenario === 'bull' ? 'border-success-600/50' : scenario.scenario === 'base' ? 'border-gold-600/50' : 'border-error-600/50'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${scenario.scenario === 'bull' ? 'bg-success-600/20' : scenario.scenario === 'base' ? 'bg-gold-600/20' : 'bg-error-600/20'}`}>
                    {scenario.scenario === 'bull' ? <TrendingUp className="w-5 h-5 text-success-400" /> : scenario.scenario === 'base' ? <Target className="w-5 h-5 text-gold-400" /> : <TrendingDown className="w-5 h-5 text-error-400" />}
                  </div>
                  <span className={`text-sm font-mono ${scenario.scenario === 'bull' ? 'text-success-400' : scenario.scenario === 'base' ? 'text-gold-400' : 'text-error-400'}`}>{scenario.probability}%</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white capitalize mb-2">{scenario.scenario} Case</h3>
                <p className="text-sm text-primary-300 mb-4">{scenario.description}</p>
                <div className="space-y-1">{scenario.assumptions.map((a, i) => (<p key={i} className="text-xs text-primary-500">{a}</p>))}</div>
              </div>
            ))}
          </div>
          <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-6">
            <h3 className="font-display text-2xl font-bold text-white mb-6">Key Drivers</h3>
            <div className="space-y-4">
              {keyDrivers.map(driver => (
                <div key={driver.factor} className="flex items-center gap-4">
                  <div className="w-40 flex-shrink-0">
                    <p className="text-sm font-medium text-white">{driver.factor}</p>
                    <p className="text-xs text-primary-400">{driver.weight}% weight</p>
                  </div>
                  <div className="flex-1 h-2 bg-primary-800 rounded-full overflow-hidden">
                    <div className={`h-full ${driver.impact === 'positive' ? 'bg-success-500' : 'bg-error-500'}`} style={{ width: `${driver.weight * 4}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-amber-600/10 border border-amber-500/20 rounded-xl">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-200">Projections are for educational purposes only. Not investment advice.</p>
            </div>
          </div>
          <Footnotes notes={footnotes} />
        </div>
      </section>
    </div>
  );
}