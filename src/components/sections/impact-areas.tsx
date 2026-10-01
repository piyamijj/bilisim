'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  HeartPulse,
  GraduationCap,
  Sprout,
  Landmark,
  Car,
  Factory,
  Shield,
  Brain,
  Zap,
  Globe,
  Users,
  Leaf,
  Microscope,
  Satellite,
  Network,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const impactAreas = [
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: { tr: 'Sağlık', en: 'Healthcare' },
    description: {
      tr: 'Erken teşhis, kişiselleştirilmiş tedavi ve ilaç keşfinde yapay zeka devrimi',
      en: 'AI revolution in early diagnosis, personalized treatment, and drug discovery',
    },
    stats: [
      { label: { tr: 'Doğruluk', en: 'Accuracy' }, value: '94%+' },
      { label: { tr: 'Maliyet Azalışı', en: 'Cost Reduction' }, value: '%40' },
      { label: { tr: 'Hız Artışı', en: 'Speed Increase' }, value: '10x' },
    ],
    applications: [
      { tr: 'Tıbbi görüntüleme analizi', en: 'Medical imaging analysis' },
      { tr: 'İlaç keşfi ve geliştirme', en: 'Drug discovery' },
      { tr: 'Kişiselleştirilmiş onkoloji', en: 'Precision oncology' },
      { tr: 'Uzaktan hasta takibi', en: 'Remote patient monitoring' },
    ],
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    borderColor: 'border-red-200 dark:border-red-800',
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: { tr: 'Eğitim', en: 'Education' },
    description: {
      tr: 'Adaptif öğrenme, akıllı eğitmen sistemleri ve evrensel erişim',
      en: 'Adaptive learning, intelligent tutoring systems, and universal access',
    },
    stats: [
      { label: { tr: 'Öğrenme Hızı', en: 'Learning Speed' }, value: '2x' },
      { label: { tr: 'Erişim Artışı', en: 'Access Increase' }, value: '%300' },
      { label: { tr: 'Tutarlılık', en: 'Retention' }, value: '%60↑' },
    ],
    applications: [
      { tr: 'Adaptif öğrenme platformları', en: 'Adaptive learning platforms' },
      { tr: 'AI destekli değerlendirme', en: 'AI-powered assessment' },
      { tr: 'Sanal eğitmenler', en: 'Virtual tutors' },
      { tr: 'Dil öğrenme uygulamaları', en: 'Language learning apps' },
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
  },
  {
    id: 'agriculture',
    icon: Sprout,
    title: { tr: 'Tarım', en: 'Agriculture' },
    description: {
      tr: 'Hassas tarım, mahsul hastalık tespiti ve verim optimizasyonu',
      en: 'Precision farming, crop disease detection, and yield optimization',
    },
    stats: [
      { label: { tr: 'Su Tasarrufu', en: 'Water Savings' }, value: '%30' },
      { label: { tr: 'Verim Artışı', en: 'Yield Increase' }, value: '%25' },
      { label: { tr: 'Pestisit Azalışı', en: 'Pesticide Reduction' }, value: '%50' },
    ],
    applications: [
      { tr: 'Uydu/Drone ile tarla analizi', en: 'Satellite/drone field analysis' },
      { tr: 'Hastalık erken uyarı sistemleri', en: 'Early disease warning' },
      { tr: 'Otonom traktörler', en: 'Autonomous tractors' },
      { tr: 'Toprak sağlığı izleme', en: 'Soil health monitoring' },
    ],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800',
  },
  {
    id: 'finance',
    icon: Landmark,
    title: { tr: 'Finans', en: 'Finance' },
    description: {
      tr: 'Dolandırıcılık tespiti, algoritmik ticaret ve risk yönetimi',
      en: 'Fraud detection, algorithmic trading, and risk management',
    },
    stats: [
      { label: { tr: 'Dolandırıcılık Önleme', en: 'Fraud Prevention' }, value: '%95' },
      { label: { tr: 'İşlem Hızı', en: 'Transaction Speed' }, value: '<100ms' },
      { label: { tr: 'Maliyet Azalışı', en: 'Cost Reduction' }, value: '%35' },
    ],
    applications: [
      { tr: 'Gerçek zamanlı dolandırıcılık tespiti', en: 'Real-time fraud detection' },
      { tr: 'Algoritmik portföy yönetimi', en: 'Algorithmic portfolio management' },
      { tr: 'Kredi risk değerlendirmesi', en: 'Credit risk assessment' },
      { tr: 'Müşteri hizmetleri chatbotları', en: 'Customer service chatbots' },
    ],
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    borderColor: 'border-amber-200 dark:border-amber-800',
  },
  {
    id: 'transportation',
    icon: Car,
    title: { tr: 'Ulaşım', en: 'Transportation' },
    description: {
      tr: 'Otonom araçlar, trafik optimizasyonu ve lojistik verimliliği',
      en: 'Autonomous vehicles, traffic optimization, and logistics efficiency',
    },
    stats: [
      { label: { tr: 'Kaza Azalışı', en: 'Accident Reduction' }, value: '%90' },
      { label: { tr: 'Yakıt Tasarrufu', en: 'Fuel Savings' }, value: '%20' },
      { label: { tr: 'Trafik Akışı', en: 'Traffic Flow' }, value: '%35↑' },
    ],
    applications: [
      { tr: 'Otonom sürüş sistemleri', en: 'Autonomous driving systems' },
      { tr: 'Akıllı trafik ışıkları', en: 'Smart traffic lights' },
      { tr: 'Rota optimizasyonu', en: 'Route optimization' },
      { tr: 'Tahmine dayalı bakım', en: 'Predictive maintenance' },
    ],
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: { tr: 'Üretim', en: 'Manufacturing' },
    description: {
      tr: 'Akıllı fabrikalar, kalite kontrolü ve tahmine dayalı bakım',
      en: 'Smart factories, quality control, and predictive maintenance',
    },
    stats: [
      { label: { tr: 'Verimlilik Artışı', en: 'Efficiency Gain' }, value: '%30' },
      { label: { tr: 'Ariza Önleme', en: 'Downtime Reduction' }, value: '%50' },
      { label: { tr: 'Kalite Artışı', en: 'Quality Improvement' }, value: '%40' },
    ],
    applications: [
      { tr: 'Görsel kalite kontrol', en: 'Visual quality inspection' },
      { tr: 'Dijital ikiz simülasyonları', en: 'Digital twin simulations' },
      { tr: 'Tedarik zinciri optimizasyonu', en: 'Supply chain optimization' },
      { tr: 'Kobot (işbirlikçi robotlar)', en: 'Collaborative robots' },
    ],
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    borderColor: 'border-indigo-200 dark:border-indigo-800',
  },
  {
    id: 'climate',
    icon: Leaf,
    title: { tr: 'İklim', en: 'Climate' },
    description: {
      tr: 'İklim modellemesi, enerji optimizasyonu ve karbon ayak izi takibi',
      en: 'Climate modeling, energy optimization, and carbon footprint tracking',
    },
    stats: [
      { label: { tr: 'Enerji Verimliliği', en: 'Energy Efficiency' }, value: '%15-25' },
      { label: { tr: 'Tahmin Doğruluğu', en: 'Forecast Accuracy' }, value: '%85+' },
      { label: { tr: 'Emisyon Azalışı', en: 'Emission Reduction' }, value: 'Gt/yr' },
    ],
    applications: [
      { tr: 'İklim değişikliği modelleme', en: 'Climate change modeling' },
      { tr: 'Akıllı şebeke yönetimi', en: 'Smart grid management' },
      { tr: 'Yenilenebilir enerji tahmini', en: 'Renewable energy forecasting' },
      { tr: 'Orman/okyanus izleme', en: 'Forest/ocean monitoring' },
    ],
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    borderColor: 'border-teal-200 dark:border-teal-800',
  },
  {
    id: 'research',
    icon: Microscope,
    title: { tr: 'Bilimsel Araştırma', en: 'Scientific Research' },
    description: {
      tr: 'Protein katlanması, malzeme keşfi ve bilimsel literatür analizi',
      en: 'Protein folding, material discovery, and scientific literature analysis',
    },
    stats: [
      { label: { tr: 'Keşif Hızı', en: 'Discovery Speed' }, value: '100x' },
      { label: { tr: 'Maliyet Azalışı', en: 'Cost Reduction' }, value: '%90' },
      { label: { tr: 'Yeni Malzemeler', en: 'New Materials' }, value: 'Milyonlar' },
    ],
    applications: [
      { tr: 'Protein yapısı tahmini (AlphaFold)', en: 'Protein structure prediction' },
      { tr: 'Yeni malzeme keşfi', en: 'Materials discovery' },
      { tr: 'Literatür taraması ve özetleme', en: 'Literature review automation' },
      { tr: 'Deney tasarımı optimizasyonu', en: 'Experimental design optimization' },
    ],
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50 dark:bg-rose-900/20',
    borderColor: 'border-rose-200 dark:border-rose-800',
  },
]

export function ImpactAreas() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      id="etki-alanlari"
      className="section-padding bg-white dark:bg-dark-950"
      aria-labelledby="impact-title"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Etki Alanları
          </span>
          <h2 id="impact-title" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            AI'nin <span className="gradient-text">Dönüştürdüğü</span> Sektörler
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Yapay zeka sadece bir teknoloji değil, her sektörde köklü değişimin katalizörüdür.
            İşte AI'nin en büyük etki yarattığı 8 alan.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Etki alanları listesi"
        >
          {impactAreas.map((area, index) => (
            <motion.article
              key={area.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={cn(
                'relative group rounded-2xl p-6 overflow-hidden transition-all duration-500',
                area.bgColor,
                area.borderColor,
                'border shadow-lg shadow-black/5 dark:shadow-black/20'
              )}
              role="listitem"
              tabIndex={0}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-br" style={{ background: area.color }} />
              </div>

              <div className="relative z-10">
                <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center mb-5', `bg-gradient-to-br ${area.color}`)}>
                  <area.icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>

                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {area.title.tr}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  {area.description.tr}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-5" role="list" aria-label={`${area.title.tr} istatistikleri`}>
                  {area.stats.map((stat, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-white/50 dark:bg-dark-900/50 backdrop-blur-sm">
                      <div className={`font-display text-2xl font-bold bg-gradient-to-r ${area.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label.tr}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2" role="list" aria-label={`${area.title.tr} uygulamaları`}>
                  {area.applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" aria-hidden="true" />
                      {app.tr}
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                layoutId={`${area.id}-background`}
                className="absolute inset-0 bg-gradient-to-br" style={{ background: area.color }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}