'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Stethoscope, GraduationCap, Sprout, Landmark, Truck, Factory, Leaf, Microscope,
  ChevronDown, MapPin, TrendingUp, Users, Clock, CheckCircle2, Sparkles, ArrowUpRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useToastHelpers } from '@/hooks/use-toast'

const caseStudies = [
  {
    id: 'radiology',
    icon: Stethoscope,
    category: 'Sağlık',
    title: 'AI Destekli Radyoloji ile Erken Teşhis',
    location: 'İngiltere, NHS',
    timeline: '2023 - Devam ediyor',
    impact: 'Yapay zeka destekli tarama sistemi ile akciğer kanseri erken teşhisi %20 arttı',
    challenge: 'NHS hastanelerinde 45 milyon yıllık görüntüleme çalışması, yeterli radyolog bulunmaması ve tanısal gecikmeler.',
    solution: 'Microsoft Azure AI ile entegre derin öğrenme modeli, göğüs röntgeni ve BT taramalarını analiz ederek şüpheli bölgeleri işaretler ve önceliklendirir.',
    results: [
      { label: 'Erken Teşhis Oranı', value: '+%20', icon: TrendingUp },
      { label: 'Taranan Görüntü', value: '2.5M', icon: Stethoscope },
      { label: 'Radyolog Verimliliği', value: '+%45', icon: Clock },
    ],
    technologies: ['Azure AI', 'PyTorch', 'DICOM', 'HL7 FHIR', 'Microsoft Azure'],
    quote: 'Artık binlerce görüntüyü dakikalar içinde tarayabiliyoruz. Kritik hastaları günler öncesinden tespit edebiliyoruz.',
    author: 'Dr. Sarah Chen',
    authorRole: 'Başradiyolog, NHS',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    borderColor: 'border-red-200 dark:border-red-800',
  },
  {
    id: 'adaptive-learning',
    icon: GraduationCap,
    category: 'Eğitim',
    title: 'Adaptif Öğrenme ile Kişiselleştirilmiş Eğitim',
    location: 'ABD, Kaliforniya',
    timeline: '2022 - Devam ediyor',
    impact: 'Makine öğrenmesi destekli müfredat ile öğrenci başarısı %35 arttı',
    challenge: 'Sınıf içi bireysel ilerleme takibi yapılamıyor, aynı müfredat her öğrenciye uygulanıyordu.',
    solution: 'Bireysel öğrenme hızını ve güçlü/zayıf konuları analiz eden adaptif algoritma, her öğrenciye özel içerik akışı oluşturur.',
    results: [
      { label: 'Başarı Artışı', value: '+%35', icon: TrendingUp },
      { label: 'Aktif Öğrenci', value: '850K', icon: Users },
      { label: 'Kişiselleştirme', value: '100%', icon: Sparkles },
    ],
    technologies: ['TensorFlow', 'Python', 'React', 'Node.js', 'AWS'],
    quote: 'Sistem her öğrencinin nerede zorlandığını anında tespit edip o konuda ek destek sunuyor. Bu dönüşüm müthiş.',
    author: 'Michael Rodriguez',
    authorRole: 'Eğitim Teknolojileri Direktörü',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
  },
  {
    id: 'precision-farming',
    icon: Sprout,
    category: 'Tarım',
    title: 'Hassas Tarım ve Akıllı Mahsul İzleme',
    location: 'Hollanda',
    timeline: '2021 - 2024',
    impact: 'Drone ve uydu görüntüleme ile su tüketimi %30, pestisit kullanımı %50 azaldı',
    challenge: 'Geleneksel tarım su kaynaklarını aşırı tüketiyor, gübre ve pestisit kullanımı çevresel zarar yaratıyordu.',
    solution: 'Multispektral drone görüntüleriyle bitki stresi, toprak nemu ve hastalık tespiti yapan AI platformu, çiftçilere gerçek zamanlı uyarı gönderir.',
    results: [
      { label: 'Su Tasarrufu', value: '-%30', icon: Leaf },
      { label: 'Pestisit Azalışı', value: '-%50', icon: Sprout },
      { label: 'Verim Artışı', value: '+%25', icon: TrendingUp },
    ],
    technologies: ['Computer Vision', 'IoT Sensörler', 'Drone', 'Satellite Imagery', 'Google Cloud'],
    quote: 'Artık hangi tarlada neyin olduğunu haritada görebiliyoruz. Gereksiz ilaçlamayı %50 azalttık.',
    author: 'Jan de Vries',
    authorRole: 'Çiftçi, 400 Hektar',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800',
  },
  {
    id: 'fraud-detection',
    icon: Landmark,
    category: 'Finans',
    title: 'Gerçek Zamanlı Dolandırıcılık Tespiti',
    location: 'Singapur',
    timeline: '2022 - Devam ediyor',
    impact: 'Anomalik tespit algoritmalarıyla dolandırıcılık %95 azaldı',
    challenge: 'Klasik kural tabanlı sistemler yeni saldırı vektörlerini yakalayamıyor, milyonlarca işlem manuel inceleniyordu.',
    solution: 'Makine öğrenmesi tabanlı gerçek zamanlı skorlama motoru, her işlemi saniyeler içinde analiz edip şüpheli olanları işaretler.',
    results: [
      { label: 'Dolandırıcılık Azalışı', value: '-%95', icon: ShieldIcon },
      { label: 'İşlem Doğruluk Oranı', value: '%99.8', icon: CheckCircle2 },
      { label: 'Manuel İnceleme', value: '-%70', icon: Clock },
    ],
    technologies: ['Kafka', 'Spark', 'XGBoost', 'Python', 'Redis'],
    quote: 'Sahte işlemleri 100 milisaniyeden kısa sürede tespit edebiliyoruz. Müşteri memnuniyeti hiç bu kadar yüksek olmamıştı.',
    author: 'Priya Sharma',
    authorRole: 'Risk Analisti, DBS Bank',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    borderColor: 'border-amber-200 dark:border-amber-800',
  },
  {
    id: 'autonomous-logistics',
    icon: Truck,
    category: 'Lojistik',
    title: 'Otonom Teslimat ve Akıllı Filo Yönetimi',
    location: 'Estonya',
    timeline: '2023 - Devam ediyor',
    impact: 'Otonom araçlar ve rota optimizasyonu ile teslimat süresi %40 kısaldı',
    challenge: 'Dağıtım maliyetleri yüksek, sürücü kıtlığı yaşanıyor, rotasız zaman kayıpları fazla.',
    solution: 'L4 seviyesi otonom araçlar, gerçek zamanlı trafik verisiyle optimize edilmiş rota planlama ve akıllı yük dağıtım sistemi.',
    results: [
      { label: 'Teslimat Süresi', value: '-%40', icon: Truck },
      { label: 'Karbon Emisyonu', value: '-%30', icon: Leaf },
      { label: 'Aktif Araç', value: '120', icon: Users },
    ],
    technologies: ['ROS', 'LiDAR', 'Computer Vision', '5G', 'Optimization Algorithms'],
    quote: 'Robotlarımız şehir içi trafiğin en yoğun saatlerinde bile güvenle çalışıyor. Bu henüz başlangıç.',
    author: 'Tarmo Sepp',
    authorRole: 'Operasyon Müdürü, Bolt Logistics',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
  },
  {
    id: 'smart-manufacturing',
    icon: Factory,
    category: 'Üretim',
    title: 'Akıllı Fabrika ve Öngörücü Bakım',
    location: 'Japonya',
    timeline: '2020 - Devam ediyor',
    impact: 'Tahmine dayalı bakım sistemi ile planlı duruş süresi %50 azaldı',
    challenge: 'Beklenmedik makine arızaları üretimi durduruyor, bakım çalışmaları planlı yapılamıyordu.',
    solution: 'Sensör verileri üzerinden makine arıza olasılığını tahmin eden AI modeli, bakım ekiplerine erken uyarı gönderir.',
    results: [
      { label: 'Beklenmedik Arıza', value: '-%50', icon: Factory },
      { label: 'Planlı Bakım Oranı', value: '%85', icon: CheckCircle2 },
      { label: 'Üretim Verimliliği', value: '+%30', icon: TrendingUp },
    ],
    technologies: ['IoT', 'Time Series Analysis', 'Digital Twin', 'Edge Computing'],
    quote: 'Artık bir makine arızalanmadan 2 hafta öncesinden biliyoruz. Üretim hiç durmuyor.',
    author: 'Yuki Tanaka',
    authorRole: 'Üretim Uzmanı, Toyota',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    borderColor: 'border-indigo-200 dark:border-indigo-800',
  },
  {
    id: 'renewable-energy',
    icon: Leaf,
    category: 'Enerji',
    title: 'Akıllı Şebeke ve Yenilenebilir Enerji Optimizasyonu',
    location: 'Danimarka',
    timeline: '2022 - Devam ediyor',
    impact: 'Enerji şebeke optimizasyonu ile kayıp %15, verimlilik %25 arttı',
    challenge: 'Güneş ve rüzgâr enerjisi değişken üretim yapıyor, şebeke dengesizlikleri enerji israfına yol açıyordu.',
    solution: 'Talep-tahmin algoritmaları ve enerji depolama optimizasyonu ile akıllı şebeke yönetimi sağlanır.',
    results: [
      { label: 'Enerji Verimliliği', value: '+%25', icon: Zap },
      { label: 'Dağıtım Kaybı', value: '-%15', icon: TrendingUp },
      { label: 'Karbon Azalışı', value: '2.1Mt', icon: Leaf },
    ],
    technologies: ['Machine Learning', 'Smart Grid', 'IoT', 'Time Series', 'SCADA'],
    quote: 'Yenilenebilir enerji kaynaklarını şebekeye nasıl entegre edeceğimizi AI ile çözüyoruz.',
    author: 'Erik Hansen',
    authorRole: 'Enerji Sistemleri Uzmanı, Ørsted',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    borderColor: 'border-teal-200 dark:border-teal-800',
  },
  {
    id: 'drug-discovery',
    icon: Microscope,
    category: 'Bilim',
    title: 'Yapay Zeka Destekli İlaç Keşfi',
    location: 'Küresel',
    timeline: '2021 - Devam ediyor',
    impact: 'Yeni ilaç adaylarının keşif süresi 2 yıldan 3 aya indi',
    challenge: 'İlaç keşfi 10-15 yıl sürüyor, maliyeti 2 milyar doları aşıyor, başarısızlık oranı %90.',
    solution: 'Protein yapısı tahmini ve moleküler etkileşim simülasyonu için derin öğrenme modelleri kullanıldı.',
    results: [
      { label: 'Keşif Süresi', value: '-%90', icon: Clock },
      { label: 'Maliyet Azalışı', value: '-%70', icon: TrendingUp },
      { label: 'Aday Bileşik', value: '15K+', icon: Microscope },
    ],
    technologies: ['AlphaFold', 'Graph Neural Networks', 'Generative AI', 'Hugging Face'],
    quote: 'Yapay zekâ ilaç keşfini yıllardan aylara indirdi. Bu, sağlıkta devrim niteliğinde.',
    author: 'Dr. Emily Watson',
    authorRole: 'Başkan, BioAI Labs',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50 dark:bg-rose-900/20',
    borderColor: 'border-rose-200 dark:border-rose-800',
  },
]

function ShieldIcon(props: React.ComponentProps<typeof CheckCircle2>) {
  return <CheckCircle2 {...props} />
}

function Zap({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  )
}

export function CaseStudies() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('Tümü')
  const toast = useToastHelpers()

  const categories = ['Tümü', ...Array.from(new Set(caseStudies.map((c) => c.category)))]

  const filtered = activeCategory === 'Tümü'
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeCategory)

  const toggleExpanded = (id: string) => {
    const newState = expandedId === id ? null : id
    setExpandedId(newState)
    const study = caseStudies.find((c) => c.id === id)
    if (newState && study) {
      toast.info(study.title, 'Detaylar açıldı')
    }
  }

  return (
    <section
      ref={ref}
      id="vaka-calismalari"
      className="section-padding bg-white dark:bg-dark-950"
      aria-labelledby="cases-title"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Vaka Çalışmaları
          </span>
          <h2 id="cases-title" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Gerçek Dünya <span className="gradient-text">Başarı Hikayeleri</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Dünyanın dört bir yanından gerçek projeler, elde edilen sonuçlar ve geleceğe yönelik çıkarımlar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Vaka çalışması kategorileri"
        >
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border',
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white border-transparent shadow-lg shadow-primary-500/25'
                  : 'bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-600 dark:hover:text-primary-400'
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          role="list"
          aria-label="Vaka çalışmaları listesi"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((study, index) => {
              const isExpanded = expandedId === study.id
              return (
                <motion.article
                  key={study.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={cn(
                    'rounded-2xl overflow-hidden transition-all duration-500 border shadow-lg shadow-black/5 dark:shadow-black/20 card-hover',
                    isExpanded
                      ? cn(study.bgColor, study.borderColor, 'lg:col-span-2')
                      : 'bg-white dark:bg-dark-800 border-gray-200 dark:border-dark-700'
                  )}
                  role="listitem"
                  layoutId={study.id}
                >
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0', `bg-gradient-to-br ${study.color}`)}>
                          <study.icon className="h-7 w-7 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-1">
                            {study.category}
                          </span>
                          <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white leading-tight">
                            {study.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {study.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        {study.timeline}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-6 leading-relaxed">
                      {study.impact}
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-6" role="list" aria-label={`${study.title} sonuçları`}>
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center p-3 rounded-xl bg-gray-50 dark:bg-dark-700/50">
                          <result.icon className="h-5 w-5 mx-auto mb-2 text-primary-500" aria-hidden="true" />
                          <div className="font-display text-xl font-bold text-gray-900 dark:text-white">{result.value}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 border-t border-gray-200 dark:border-dark-700 space-y-5">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" aria-hidden="true" />
                                Zorluk
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-4">{study.challenge}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" aria-hidden="true" />
                                Çözüm
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-4">{study.solution}</p>
                            </div>

                            <blockquote className="p-4 rounded-xl bg-white/60 dark:bg-dark-900/50 border-l-4 border-primary-500">
                              <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed mb-3">
                                &ldquo;{study.quote}&rdquo;
                              </p>
                              <footer className="flex items-center gap-3">
                                <div className={cn('w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white', `bg-gradient-to-br ${study.color}`)}>
                                  {study.author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                                </div>
                                <div>
                                  <cite className="not-italic text-sm font-semibold text-gray-900 dark:text-white">{study.author}</cite>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">{study.authorRole}</p>
                                </div>
                              </footer>
                            </blockquote>

                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Kullanılan Teknolojiler</h4>
                              <div className="flex flex-wrap gap-2" role="list" aria-label="Kullanılan teknolojiler">
                                {study.technologies.map((tech) => (
                                  <span key={tech} className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-dark-700 text-xs font-medium text-gray-700 dark:text-gray-300">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => toggleExpanded(study.id)}
                      className="btn-primary mt-2 w-full group"
                      aria-expanded={isExpanded}
                      aria-controls={`case-details-${study.id}`}
                    >
                      {isExpanded ? 'Detayları Kapat' : 'Detayları Gör'}
                      <ChevronDown
                        className={cn('h-5 w-5 transition-transform duration-300', isExpanded && 'rotate-180')}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}