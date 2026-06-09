export const economicIndicators = [
  { year: 2017, quarter: 'Q1', usdIndex: 100.5, usInflation: 2.4, fedFundsRate: 0.75, unemployment: 4.7, geopoliticalRisk: 35 },
  { year: 2018, quarter: 'Q1', usdIndex: 90.2, usInflation: 2.0, fedFundsRate: 1.75, unemployment: 4.1, geopoliticalRisk: 45 },
  { year: 2019, quarter: 'Q1', usdIndex: 97.2, usInflation: 1.9, fedFundsRate: 2.50, unemployment: 4.0, geopoliticalRisk: 55 },
  { year: 2020, quarter: 'Q1', usdIndex: 99.5, usInflation: 2.3, fedFundsRate: 1.25, unemployment: 4.5, geopoliticalRisk: 75 },
  { year: 2020, quarter: 'Q2', usdIndex: 98.2, usInflation: 0.1, fedFundsRate: 0.25, unemployment: 13.3, geopoliticalRisk: 88 },
  { year: 2021, quarter: 'Q4', usdIndex: 95.5, usInflation: 6.0, fedFundsRate: 0.25, unemployment: 4.2, geopoliticalRisk: 48 },
  { year: 2022, quarter: 'Q2', usdIndex: 105.2, usInflation: 8.6, fedFundsRate: 1.75, unemployment: 3.6, geopoliticalRisk: 82 },
];

export const centralBankRates = [
  { country: 'US', centralBank: 'Federal Reserve', 2017: 1.50, 2018: 2.50, 2019: 1.75, 2020: 0.25, 2021: 0.25, 2022: 4.25 },
  { country: 'EU', centralBank: 'ECB', 2017: 0.00, 2018: 0.00, 2019: 0.00, 2020: 0.00, 2021: 0.00, 2022: 2.50 },
  { country: 'Japan', centralBank: 'BOJ', 2017: -0.10, 2018: -0.10, 2019: -0.10, 2020: -0.10, 2021: -0.10, 2022: -0.10 },
  { country: 'UK', centralBank: 'BOE', 2017: 0.50, 2018: 0.75, 2019: 0.75, 2020: 0.10, 2021: 0.25, 2022: 3.50 },
];

export const geopoliticalEvents = [
  { date: '2017-01', event: 'Trump Inauguration', impact: 'high', goldImpact: 5.2, category: 'Political' },
  { date: '2018-03', event: 'US-China Trade War', impact: 'high', goldImpact: 3.2, category: 'Trade' },
  { date: '2020-03', event: 'COVID-19 Pandemic', impact: 'high', goldImpact: 8.5, category: 'Health' },
  { date: '2020-03', event: 'Fed QE Infinity', impact: 'high', goldImpact: 15.5, category: 'Monetary' },
  { date: '2022-02', event: 'Russia-Ukraine War', impact: 'high', goldImpact: 12.5, category: 'Geopolitical' },
];

export const correlationData = [
  { asset: 'USD Index', correlationWithGold: -0.72, description: 'Strong negative' },
  { asset: 'S&P 500', correlationWithGold: -0.15, description: 'Weak negative' },
  { asset: 'US 10Y Yield', correlationWithGold: -0.45, description: 'Moderate negative' },
  { asset: 'Real Rates', correlationWithGold: -0.68, description: 'Strong negative' },
];