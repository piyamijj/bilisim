'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
  TrendingUp,
  Users,
  Globe,
  Award,
  Brain,
  Lightbulb,
  Rocket,
  Shield,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { StatisticsCharts } from './statistics-charts'

const statCards = [
  {
    icon: Brain,
    value: '2.5M+',
    label: { tr: 'AI Modelleri', en: 'AI Models' },
    description: { tr: 'Açık kaynak ve ticari modeller', en: 'Open source & commercial models' },
    trend: '+340%',
    color: 'from-primary-500 to-accent-500',
    bgColor: 'bg-primary-50 dark:bg-primary-900/20',
  },
  {
    icon: Users,
    value: '15M+',
    label: { tr: 'AI Geliştiricileri', en: 'AI Developers' },
    description: { tr: 'Dünya genelinde aktif geliştiriciler', en: 'Active developers worldwide' },
    trend: '+180%',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Globe,
    value: '195',
    label: { tr: 'Ülke', en: 'Countries' },
    description: { tr: 'AI stratejisi olan ülkeler', en: 'Countries with AI strategies' },
    trend: '+45',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: Award,
    value: '$15.7T',
    label: { tr: 'Ekonomik Etki (2030)', en: 'Economic Impact (2030)' },
    description: { tr: 'PwC global AI ekonomik katkısı', en: 'PwC global AI economic contribution' },
    trend: '+14%',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    icon: Lightbulb,
    value: '500K+',
    label: { tr: 'AI Patentleri', en: 'AI Patents' },
    description: { tr: 'Son 5 yılda verilen patentler', en: 'Patents granted in last 5 years' },
    trend: '+210%',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: Rocket,
    value: '97%',
    label: { tr: 'Şirket Yatırımı', en: 'Company Investment' },
    description: { tr: 'Büyük şirketlerin AI yatırım planı', en: 'Major companies planning AI investment' },
    trend: '+60%',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
  },
  {
    icon: TrendingUp,
    value: '38%',
    label: { tr: 'Yıllık Büyüme (CAGR)', en: 'Annual Growth (CAGR)' },
    description: { tr: '2024-2030 AI pazar büyümesi', en: '2024-2030 AI market growth' },
    trend: '2030: $1.8T',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
  },
  {
    icon: Shield,
    value: '70%',
    label: { tr: 'İş Gücü Etkilenmesi', en: 'Workforce Impact' },
    description: { tr: 'Mesleklerin AI ile değişecek oranı', en: 'Jobs transformed by AI' },
    trend: 'Yeni roller: 97M',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
  },
]

export function Statistics() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<'overview' | 'charts'>('overview')

  return (
    <section
      ref={ref}
      id="istatistikler"
      className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-dark-950 dark:to-dark-900"
      aria-labelledby="stats-title"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Verilerle AI Etkisi
          </span>
          <h2 id="stats-title" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            <span className="gradient-text">Sayılar</span> Yalan Söylemez
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Yapay zekânın küresel etkisini gösteren güvenilir veriler, araştırma raporları ve pazar analizleri.
          </p>
        </motion.div>

        <div className="mb-12" role="tablist" aria-label="İstatistik görüntüleme modu">
          <div className="flex items-center justify-center gap-2 p-1 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 w-fit mx-auto">
            <button
              role="tab"
              aria-selected={activeTab === 'overview'}
              aria-controls="overview-panel"
              id="overview-tab"
              onClick={() => setActiveTab('overview')}
              className={cn(
                'px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300',
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              )}
            >
              Genel Bakış
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'charts'}
              aria-controls="charts-panel"
              id="charts-tab"
              onClick={() => setActiveTab('charts')}
              className={cn(
                'px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300',
                activeTab === 'charts'
                  ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              )}
            >
              Grafikler
            </button>
          </div>
        </div>

        <motion.div
          role="tabpanel"
          id="overview-panel"
          aria-labelledby="overview-tab"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && activeTab === 'overview' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className={cn(activeTab !== 'overview' && 'hidden')}
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            role="list"
            aria-label="İstatistik kartları"
          >
            {statCards.map((stat, index) => (
              <motion.article
                key={stat.label.tr}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView && activeTab === 'overview' ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className={cn(
                  'relative rounded-2xl p-6 overflow-hidden transition-all duration-500 group',
                  stat.bgColor,
                  'border border-gray-200 dark:border-dark-700 shadow-lg shadow-black/5 dark:shadow-black/20'
                )}
                role="listitem"
                tabIndex={0}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                  <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-br" style={{ background: stat.color }} />
                </div>

                <div className="relative z-10">
                  <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-4', `bg-gradient-to-br ${stat.color}`)}>
                    <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>

                  <div className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{stat.label.tr}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{stat.description.tr}</p>

                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500" aria-hidden="true" />
                    <span className="font-medium text-green-600 dark:text-green-400">{stat.trend}</span>
                    <span className="text-gray-400 dark:text-gray-500">YoY</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          role="tabpanel"
          id="charts-panel"
          aria-labelledby="charts-tab"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && activeTab === 'charts' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className={cn(activeTab !== 'charts' && 'hidden')}
        >
          <StatisticsCharts />
        </motion.div>
      </div>
    </section>
  )
}