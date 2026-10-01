'use client'

import { useEffect, useRef, useState } from 'react'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from 'recharts'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip as ChartJSTooltip,
  Legend as ChartJSLegend,
  Filler,
  type ChartData,
} from 'chart.js'
import { Line as ChartJSLine, Bar as ChartJSBar, Doughnut as ChartJSDoughnut } from 'react-chartjs-2'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  ChartJSTooltip,
  ChartJSLegend,
  Filler
)

const COLORS = ['#7C66FF', '#14B8A6', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899']
const GRADIENT_IDS = ['gradient-1', 'gradient-2', 'gradient-3']

const marketGrowthData = [
  { year: '2022', market: 136.6, healthcare: 15.4, finance: 12.1, retail: 8.7, manufacturing: 9.2, other: 91.2 },
  { year: '2023', market: 196.6, healthcare: 22.4, finance: 17.8, retail: 12.3, manufacturing: 13.1, other: 131.0 },
  { year: '2024', market: 279.2, healthcare: 31.2, finance: 25.4, retail: 17.1, manufacturing: 18.7, other: 186.8 },
  { year: '2025', market: 390.9, healthcare: 43.8, finance: 35.6, retail: 23.8, manufacturing: 26.4, other: 261.3 },
  { year: '2026', market: 525.4, healthcare: 59.2, finance: 48.9, retail: 32.4, manufacturing: 36.2, other: 348.7 },
  { year: '2027', market: 687.9, healthcare: 77.4, finance: 64.8, retail: 43.2, manufacturing: 48.3, other: 454.2 },
  { year: '2028', market: 872.3, healthcare: 98.2, finance: 83.4, retail: 56.7, manufacturing: 63.2, other: 570.8 },
  { year: '2029', market: 1089.4, healthcare: 122.6, finance: 104.8, retail: 72.9, manufacturing: 81.4, other: 707.7 },
  { year: '2030', market: 1345.2, healthcare: 150.8, finance: 128.7, retail: 91.8, manufacturing: 102.6, other: 871.3 },
]

const adoptionData = [
  { sector: 'Finans', adoption: 85, investment: 45 },
  { sector: 'Sağlık', adoption: 72, investment: 38 },
  { sector: 'Teknoloji', adoption: 94, investment: 62 },
  { sector: 'Üretim', adoption: 58, investment: 32 },
  { sector: 'Perakende', adoption: 67, investment: 28 },
  { sector: 'Ulaşım', adoption: 49, investment: 35 },
  { sector: 'Enerji', adoption: 54, investment: 29 },
  { sector: 'Eğitim', adoption: 41, investment: 22 },
  { sector: 'Tarım', adoption: 28, investment: 18 },
  { sector: 'Hukuk', adoption: 35, investment: 15 },
]

const investmentByRegion = [
  { region: 'Kuzey Amerika', value: 142.3, percentage: 42 },
  { region: 'Avrupa', value: 68.7, percentage: 20 },
  { region: 'Asya-Pasifik', value: 89.4, percentage: 26 },
  { region: 'Güney Amerika', value: 12.8, percentage: 4 },
  { region: 'Orta Doğu', value: 18.2, percentage: 5 },
  { region: 'Afrika', value: 9.1, percentage: 3 },
]

const aiJobImpact = [
  { category: 'Yeni İşler Oluşacak', value: 97, color: '#14B8A6' },
  { category: 'İşler Değişecek', value: 120, color: '#7C66FF' },
  { category: 'İşler Ortadan Kalkacak', value: 85, color: '#EF4444' },
]

const researchPapers = [
  { year: '2018', papers: 52000, citations: 1200000 },
  { year: '2019', papers: 68000, citations: 1800000 },
  { year: '2020', papers: 89000, citations: 2600000 },
  { year: '2021', papers: 118000, citations: 3900000 },
  { year: '2022', papers: 156000, citations: 5800000 },
  { year: '2023', papers: 208000, citations: 8700000 },
  { year: '2024', papers: 275000, citations: 12400000 },
]

function RechartsLineChart() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  if (!isInView) return <div ref={ref} className="h-[350px]" aria-hidden="true" />

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-[350px] w-full"
      role="img"
      aria-label="AI pazar büyümesi trendi 2022-2030"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={marketGrowthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            {['market', 'healthcare', 'finance', 'retail', 'manufacturing'].map((key, i) => (
              <linearGradient key={key} id={`gradient-${key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={COLORS[i % COLORS.length]} stopOpacity={0.3} />
                <stop offset="95%" stopColor={COLORS[i % COLORS.length]} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="year"
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#64748b' }}
          />
          <YAxis
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#64748b' }}
            tickFormatter={(value) => `$${value}B`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            }}
            labelStyle={{ color: '#0f172a', fontWeight: 600 }}
            formatter={(value: number) => [`$${value}B`, 'Pazar Değeri']}
          />
          <Legend
            wrapperStyle={{ paddingTop: '10px' }}
            formatter={(value) => {
              const labels: Record<string, string> = {
                market: 'Toplam Pazar',
                healthcare: 'Sağlık',
                finance: 'Finans',
                retail: 'Perakende',
                manufacturing: 'Üretim',
              }
              return labels[value] || value
            }}
          />
          {['market', 'healthcare', 'finance', 'retail', 'manufacturing'].map((key, i) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={COLORS[i % COLORS.length]}
              strokeWidth={key === 'market' ? 3 : 2}
              dot={false}
              activeDot={{ r: 6, strokeWidth: 2 }}
              fill={`url(#gradient-${key})`}
              isAnimationActive={isInView}
              animationDuration={1200}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

function RechartsBarChart() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  if (!isInView) return <div ref={ref} className="h-[350px]" aria-hidden="true" />

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="h-[350px] w-full"
      role="img"
      aria-label="Sektörlere göre AI benimseme ve yatırım oranları"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={adoptionData} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
          <XAxis type="number" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tick={{ fill: '#64748b' }} tickFormatter={(v) => `${v}%`} />
          <YAxis
            type="category"
            dataKey="sector"
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#64748b' }}
            width={80}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            }}
            formatter={(value: number, name: string) => [
              `${value}%`,
              name === 'adoption' ? 'Benimseme Oranı' : 'Yatırım Yoğunluğu',
            ]}
          />
          <Legend wrapperStyle={{ paddingTop: '10px' }} />
          <Bar dataKey="adoption" fill="#7C66FF" radius={[0, 6, 6, 0]} maxBarSize={30} isAnimationActive={isInView} animationDuration={1000} />
          <Bar dataKey="investment" fill="#14B8A6" radius={[0, 6, 6, 0]} maxBarSize={30} isAnimationActive={isInView} animationDuration={1000} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

function RechartsRadialChart() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  if (!isInView) return <div ref={ref} className="h-[300px]" aria-hidden="true" />

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="h-[300px] w-full flex items-center justify-center"
      role="img"
      aria-label="AI yatırımları bölgesel dağılım"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" data={investmentByRegion}>
          <RadialBar
            dataKey="value"
            background={{ fill: '#f1f5f9' }}
            cornerRadius={6}
            label={{ position: 'inside', fontSize: 14, fontWeight: 700, fill: '#0f172a' }}
          >
            {investmentByRegion.map((entry, index) => (
              <Cell key={entry.region} fill={COLORS[index % COLORS.length]} />
            ))}
          </RadialBar>
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            formatter={(value) => {
              const entry = investmentByRegion.find((e) => e.region === value)
              return entry ? `${value} ($${entry.value}B, %${entry.percentage})` : value
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

function ChartJSLineChart() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [chartData, setChartData] = useState<ChartData<'line'> | null>(null)

  useEffect(() => {
    if (isInView && !chartData) {
      const ctx = document.createElement('canvas').getContext('2d')
      if (ctx) {
        const gradient1 = ctx.createLinearGradient(0, 0, 0, 300)
        gradient1.addColorStop(0, 'rgba(124, 102, 255, 0.4)')
        gradient1.addColorStop(1, 'rgba(124, 102, 255, 0)')

        const gradient2 = ctx.createLinearGradient(0, 0, 0, 300)
        gradient2.addColorStop(0, 'rgba(20, 184, 166, 0.4)')
        gradient2.addColorStop(1, 'rgba(20, 184, 166, 0)')

        setChartData({
          labels: researchPapers.map((d) => d.year),
          datasets: [
            {
              label: 'Yayımlanan Makaleler',
              data: researchPapers.map((d) => d.papers),
              borderColor: '#7C66FF',
              backgroundColor: gradient1,
              fill: true,
              tension: 0.4,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
            {
              label: 'Alıntı Sayısı (M)',
              data: researchPapers.map((d) => Math.round(d.citations / 1000000)),
              borderColor: '#14B8A6',
              backgroundColor: gradient2,
              fill: true,
              tension: 0.4,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
          ],
        })
      }
    }
  }, [isInView, chartData])

  if (!chartData) return <div ref={ref} className="h-[350px]" aria-hidden="true" />

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-[350px] w-full"
      role="img"
      aria-label="AI araştırma makaleleri ve alıntı trendi 2018-2024"
    >
      <ChartJSLine
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { position: 'top', labels: { usePointStyle: true, padding: 20, font: { size: 12 } } },
            tooltip: {
              backgroundColor: '#fff',
              titleColor: '#0f172a',
              bodyColor: '#64748b',
              borderColor: '#e2e8f0',
              borderWidth: 1,
              padding: 12,
              cornerRadius: 12,
              displayColors: true,
              callbacks: {
                label: (context) => {
                  const label = context.dataset.label || ''
                  const value = context.parsed.y ?? 0
                  return `${label}: ${label.includes('Makale') ? value.toLocaleString() : value + 'M'}`
                },
              },
            },
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#64748b' } },
            y: {
              grid: { color: '#e2e8f0' },
              ticks: { color: '#64748b', callback: (value) => `${value}K` },
            },
          },
          animation: { duration: 1500, easing: 'easeOutQuart' },
        }}
      />
    </motion.div>
  )
}

function ChartJSBarChart() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [chartData, setChartData] = useState<ChartData<'bar'> | null>(null)

  useEffect(() => {
    if (isInView && !chartData) {
      setChartData({
        labels: aiJobImpact.map((d) => d.category),
        datasets: [
          {
            label: 'Milyon İş',
            data: aiJobImpact.map((d) => d.value),
            backgroundColor: aiJobImpact.map((d) => d.color),
            borderRadius: 8,
            borderSkipped: false,
          },
        ],
      })
    }
  }, [isInView, chartData])

  if (!chartData) return <div ref={ref} className="h-[300px]" aria-hidden="true" />

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="h-[300px] w-full"
      role="img"
      aria-label="AI'nın iş gücüne etkisi: yeni işler, değişen işler, ortadan kalkacak işler"
    >
      <ChartJSBar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#fff',
              titleColor: '#0f172a',
              bodyColor: '#64748b',
              borderColor: '#e2e8f0',
              borderWidth: 1,
              padding: 12,
              cornerRadius: 12,
              callbacks: {
                label: (context) => `${context.dataset.label}: ${context.parsed.x}M`,
              },
            },
          },
          scales: {
            x: { grid: { color: '#e2e8f0' }, ticks: { color: '#64748b', callback: (v) => `${v}M` } },
            y: { grid: { display: false }, ticks: { color: '#64748b' } },
          },
          animation: { duration: 1200, easing: 'easeOutQuart' },
        }}
      />
    </motion.div>
  )
}

function ChartJSDoughnutChart() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [chartData, setChartData] = useState<ChartData<'doughnut'> | null>(null)

  useEffect(() => {
    if (isInView && !chartData) {
      setChartData({
        labels: investmentByRegion.map((d) => d.region),
        datasets: [
          {
            data: investmentByRegion.map((d) => d.value),
            backgroundColor: COLORS.slice(0, investmentByRegion.length),
            borderWidth: 0,
          },
        ],
      })
    }
  }, [isInView, chartData])

  if (!chartData) return <div ref={ref} className="h-[300px]" aria-hidden="true" />

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="h-[300px] w-full"
      role="img"
      aria-label="Bölgesel AI yatırım dağılımı 2024"
    >
      <ChartJSDoughnut
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          cutout: '65%',
          plugins: {
            legend: { position: 'right', labels: { usePointStyle: true, padding: 16, font: { size: 12 } } },
            tooltip: {
              backgroundColor: '#fff',
              titleColor: '#0f172a',
              bodyColor: '#64748b',
              borderColor: '#e2e8f0',
              borderWidth: 1,
              padding: 12,
              cornerRadius: 12,
              callbacks: {
                label: (context) => {
                  const value = context.parsed
                  const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
                  const percentage = ((value / total) * 100).toFixed(1)
                  return `$${value}B (%${percentage})`
                },
              },
            },
          },
          animation: { animateRotate: true, animateScale: true, duration: 1500, easing: 'easeOutQuart' },
        }}
      />
    </motion.div>
  )
}

export function StatisticsCharts() {
  return (
    <div className="space-y-10" role="list" aria-label="Detaylı istatistik grafikleri">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-strong rounded-2xl p-6 lg:p-8"
        role="listitem"
      >
        <div className="mb-6">
          <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Global AI Pazar Büyümesi (2022-2030)
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Sektörlere göre yıllık pazar değeri trendi (Milyar USD). Kaynak: Statista, Grand View Research, PwC.
          </p>
        </div>
        <div className="relative">
          <RechartsLineChart />
        </div>
      </motion.article>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-strong rounded-2xl p-6 lg:p-8"
          role="listitem"
        >
          <div className="mb-6">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Sektörlere Göre AI Benimseme ve Yatırım
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Her sektörün AI benimseme oranı ve yatırım yoğunluğu karşılaştırması.
            </p>
          </div>
          <div className="relative">
            <RechartsBarChart />
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-strong rounded-2xl p-6 lg:p-8"
          role="listitem"
        >
          <div className="mb-6">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
              AI Araştırma Yayınları ve Etkisi
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Yıllara göre yayımlanan AI makale sayısı ve toplam alıntı trendi (Chart.js).
            </p>
          </div>
          <div className="relative">
            <ChartJSLineChart />
          </div>
        </motion.article>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-strong rounded-2xl p-6 lg:p-8"
          role="listitem"
        >
          <div className="mb-6">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
              AI&apos;nın İş Gücüne Etkisi (2025-2030)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              WEF tahminlerine göre AI&apos;nın oluşturacağı, değiştireceği ve ortadan kaldıracağı işler (Milyon).
            </p>
          </div>
          <div className="relative">
            <ChartJSBarChart />
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-strong rounded-2xl p-6 lg:p-8 lg:col-span-2"
          role="listitem"
        >
          <div className="mb-6">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Bölgesel AI Yatırım Dağılımı 2024
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Dünya bölgelerine göre AI yatırım hacmi ve payları (Milyar USD). Chart.js Doughnut chart.
            </p>
          </div>
          <div className="relative h-[350px]">
            <ChartJSDoughnutChart />
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-strong rounded-2xl p-6 lg:p-8"
          role="listitem"
        >
          <div className="mb-6">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Bölgesel Yatırım Payları (Radial)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Recharts RadialBarChart ile bölgesel yatırım oranları görselleştirmesi.
            </p>
          </div>
          <div className="relative">
            <RechartsRadialChart />
          </div>
        </motion.article>
      </div>
    </div>
  )
}