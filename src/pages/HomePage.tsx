import { Link } from 'react-router-dom';
import { TrendingUp, Globe, Target, ArrowRight, Calendar } from 'lucide-react';
import { PriceChart } from '../components';
import { xauusdMonthlyData, annualSummaryData } from '../data';

export default function HomePage() {
  const latestData = annualSummaryData[annualSummaryData.length - 1];
  const allTimeHigh = Math.max(...xauusdMonthlyData.map(d => d.high));

  return (
    <div className="min-h-screen bg-primary-950">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0f1629_70%)]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 mb-8">
            <Calendar className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-mono text-gold-300">Academic Year 2024-2025</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">XAUUSD Price Projection</h1>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gold-400 mb-6">2032 Financial Market Analysis</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />
          <p className="text-xl text-primary-300 max-w-3xl mx-auto mb-10">Institutional-grade analysis combining technical indicators (2010-2020), fundamental economic data (2017-2022), and multi-scenario projections.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <div className="bg-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-xl p-4">
              <TrendingUp className="w-5 h-5 text-gold-400 mx-auto mb-2" />
              <p className="font-mono text-2xl font-bold text-white">${latestData.close.toLocaleString()}</p>
              <p className="text-sm text-primary-400">2020 Close</p>
            </div>
            <div className="bg-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-xl p-4">
              <Target className="w-5 h-5 text-gold-400 mx-auto mb-2" />
              <p className="font-mono text-2xl font-bold text-gold-400">${allTimeHigh.toLocaleString()}</p>
              <p className="text-sm text-primary-400">ATH (2011)</p>
            </div>
            <div className="bg-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-xl p-4">
              <Globe className="w-5 h-5 text-gold-400 mx-auto mb-2" />
              <p className="font-mono text-2xl font-bold text-white">10</p>
              <p className="text-sm text-primary-400">Years Analyzed</p>
            </div>
            <div className="bg-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-xl p-4">
              <Target className="w-5 h-5 text-gold-400 mx-auto mb-2" />
              <p className="font-mono text-2xl font-bold text-white">6</p>
              <p className="text-sm text-primary-400">Central Banks</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/technical" className="group inline-flex items-center px-6 py-3 bg-gold-600 hover:bg-gold-500 text-white font-semibold rounded-lg transition-all">
              <span>Begin Analysis</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projection" className="inline-flex items-center px-6 py-3 bg-primary-800 hover:bg-primary-700 border border-primary-600 text-white font-semibold rounded-lg">
              <Target className="w-5 h-5 mr-2" />
              <span>View 2032 Projections</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-3xl font-bold text-white mb-4">Historical Performance</h3>
              <p className="text-primary-300 mb-6">XAUUSD demonstrated significant volatility from 2010-2020.</p>
            </div>
            <div className="bg-primary-900/80 border border-primary-700 rounded-xl p-6">
              <h4 className="font-display text-lg font-semibold text-white mb-4">XAUUSD 2010-2020</h4>
              <PriceChart data={xauusdMonthlyData} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}