import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const COLORS = { gold: '#d4a012', green: '#22c55e', red: '#f43f5e', cyan: '#14b8a6' };

export function PriceChart({ data, height = 350 }: { data: Array<{ date: string; close: number }>; height?: number; }) {
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs><linearGradient id="gold" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={COLORS.gold} stopOpacity={0.4}/><stop offset="95%" stopColor={COLORS.gold} stopOpacity={0}/></linearGradient></defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
          <XAxis dataKey="date" stroke="#52525b" tick={{ fontSize: 12 }} tickFormatter={v => v.substring(0, 7)} />
          <YAxis stroke="#52525b" tick={{ fontSize: 12 }} tickFormatter={v => `$${v}`} />
          <Tooltip contentStyle={{ backgroundColor: '#0f1629', border: '1px solid #27272a' }} />
          <Area type="monotone" dataKey="close" stroke={COLORS.gold} fill="url(#gold)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AnnualChangeChart({ data }: { data: Array<{ year: number; changePercent: number }> }) {
  return (
    <div style={{ height: 280 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
          <XAxis dataKey="year" stroke="#52525b" tick={{ fontSize: 12 }} />
          <YAxis stroke="#52525b" tick={{ fontSize: 12 }} tickFormatter={v => `${v > 0 ? '+' : ''}${v}%`} />
          <Tooltip contentStyle={{ backgroundColor: '#0f1629', border: '1px solid #27272a' }} />
          <Bar dataKey="changePercent">
            {data.map((entry, i) => (<rect key={i} fill={entry.changePercent >= 0 ? COLORS.green : COLORS.red} />))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RSIChart({ data }: { data: Array<{ date: string; rsi: number }> }) {
  return (
    <div style={{ height: 250 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
          <XAxis dataKey="date" stroke="#52525b" tick={{ fontSize: 12 }} />
          <YAxis stroke="#52525b" domain={[0, 100]} tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: '#0f1629', border: '1px solid #27272a' }} />
          <Line type="monotone" dataKey="rsi" stroke={COLORS.cyan} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ProjectionChart({ data }: { data: Array<{ year: number; bullCase: number; baseCase: number; bearCase: number }> }) {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
          <XAxis dataKey="year" stroke="#52525b" tick={{ fontSize: 12 }} />
          <YAxis stroke="#52525b" tick={{ fontSize: 12 }} tickFormatter={v => `$${v/1000}k`} domain={['auto', 'auto']} />
          <Tooltip contentStyle={{ backgroundColor: '#0f1629', border: '1px solid #27272a' }} />
          <Line type="monotone" dataKey="bullCase" name="Bull (25%)" stroke={COLORS.green} strokeWidth={2} strokeDasharray="12 4" />
          <Line type="monotone" dataKey="baseCase" name="Base (55%)" stroke={COLORS.gold} strokeWidth={3} />
          <Line type="monotone" dataKey="bearCase" name="Bear (20%)" stroke={COLORS.red} strokeWidth={2} strokeDasharray="4 4" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}