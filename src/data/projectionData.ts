export const projectionScenarios = [
  { scenario: 'bull', probability: 25, description: 'Strong safe-haven demand.', assumptions: ['Fed cuts rates', 'BRICS currency gains', 'Central bank buying'] },
  { scenario: 'base', probability: 55, description: 'Gradual appreciation.', assumptions: ['Fed 2.5-3.5% rates', 'Moderate tensions', 'Debt-to-GDP 125%'] },
  { scenario: 'bear', probability: 20, description: 'Risk-on sentiment.', assumptions: ['Growth >3.5%', 'Stability improves', 'Crypto gains'] },
];

export const projectionData = [
  { year: 2024, quarter: 'Q4', bullCase: 2750, baseCase: 2520, bearCase: 2100 },
  { year: 2025, quarter: 'Q4', bullCase: 3150, baseCase: 2780, bearCase: 2200 },
  { year: 2026, quarter: 'Q4', bullCase: 3650, baseCase: 3080, bearCase: 2320 },
  { year: 2027, quarter: 'Q4', bullCase: 4280, baseCase: 3480, bearCase: 2450 },
  { year: 2028, quarter: 'Q4', bullCase: 4920, baseCase: 3880, bearCase: 2580 },
  { year: 2029, quarter: 'Q4', bullCase: 5600, baseCase: 4280, bearCase: 2720 },
  { year: 2030, quarter: 'Q4', bullCase: 6350, baseCase: 4680, bearCase: 2850 },
  { year: 2031, quarter: 'Q4', bullCase: 7180, baseCase: 5080, bearCase: 2980 },
  { year: 2032, quarter: 'Q4', bullCase: 8100, baseCase: 5500, bearCase: 3120 },
];

export const keyDrivers = [
  { factor: 'Real Interest Rates', impact: 'positive', weight: 25 },
  { factor: 'Central Bank Purchases', impact: 'positive', weight: 18 },
  { factor: 'USD Reserve Status', impact: 'positive', weight: 15 },
  { factor: 'Inflation Expectations', impact: 'positive', weight: 12 },
  { factor: 'Geopolitical Risk', impact: 'positive', weight: 8 },
];

export const annualProjections = [
  { year: 2024, bull: 2750, base: 2520, bear: 2100, probabilityBull: 28 },
  { year: 2026, bull: 3650, base: 3080, bear: 2320, probabilityBull: 32 },
  { year: 2028, bull: 4920, base: 3880, bear: 2580, probabilityBull: 34 },
  { year: 2030, bull: 6350, base: 4680, bear: 2800, probabilityBull: 36 },
  { year: 2032, bull: 8100, base: 5500, bear: 3050, probabilityBull: 38 },
];