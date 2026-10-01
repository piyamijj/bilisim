'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Zap, Globe, Scale, HeartHandshake, Rocket, ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const timeline = [
  {
    year: '2024-2025',
    phase: 'Şu An',
    title: 'Yaygın Benimseme',
    description: 'AI artık işletmelerin %77\'sinde en az bir fonksiyonda kullanılıyor. Kurumsal AI asistanları standart hale geliyor.',
    icon: Zap,
    color: 'from-primary-500 to-accent-500',
    active: true,
  },
  {
    year: '2026-2028',
    phase: 'Yakın Gelecek',
    title: 'Ajan Dünyası',
    description: 'Kendi kendine karar verebilen AI ajanları, rutin iş süreçlerinin %40\'ını otonom olarak yürütecek.',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    active: false,
  },
  {
    year: '2029-2032',
    phase: 'Orta Vade',
    title: 'Dünya Çapında Erişim',
    description: 'Düşük maliyetli AI, gelişmekte olan ülkelerde eğitim ve sağlıkta devrim yaratacak.',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
    active: false,
  },
  {
    year: '2033-2040',
    phase: 'Uzun Vade',
    title: 'Sürdürülebilir AI',
    description: 'Karbon nötr AI altyapıları, enerji verimliliği %90 artan veri merkezleri, tam şeffaflık standartları.',
    icon: Leaf,
    color: 'from-teal-500 to-emerald-500',
    active: false,
  },
]

function Leaf({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

const principles = [
  {
    icon: Scale,
    title: 'Adaletli Erişim',
    description: 'AI\'nın faydaları dünyanın her yerinde, her insana eşit şekilde ulaşmalı.',
    color: 'from-primary-500 to-accent-500',
  },
  {
    icon: HeartHandshake,
    title: 'İnsan Merkezli',
    description: 'AI insanların gücünü artırmalı, kararları değil desteklemelidir.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Scale,
    title: 'Şeffaflık',
    description: 'Her karar açıklanabilir olmalı, önyargılardan kaçınılmalıdır.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Globe,
    title: 'Küresel Düşünce',
    description: 'Teknoloji her kültüre, dile ve bağlama uyum sağlamalıdır.',
    color: 'from-amber-500 to-orange-500',
  },
]

export function FutureVision() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 40%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={ref}
      id="gelecek-vizyonu"
      className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-dark-950 dark:to-dark-900 overflow-hidden"
      aria-labelledby="future-title"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Gelecek Vizyonu
          </span>
          <h2 id="future-title" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Yarının <span className="gradient-text">Dünyası</span> Bugün Şekilleniyor
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Yapay zekânın geleceği bir varsayım değil, aktif bir yönlendirme. İşte yol haritası.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto mb-24">
          <div
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-700 rounded-full"
            aria-hidden="true"
          >
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary-500 via-accent-500 to-emerald-500 rounded-full"
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={cn(
                  'relative flex items-start gap-6 md:gap-0',
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                )}
                role="listitem"
              >
                <div
                  className={cn(
                    'absolute left-6 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-xl flex items-center justify-center z-10 shadow-lg',
                    `bg-gradient-to-br ${item.color}`,
                    item.active && 'ring-4 ring-primary-500/20 animate-pulse'
                  )}
                  aria-hidden="true"
                >
                  <item.icon className="h-6 w-6 text-white" />
                </div>

                <div
                  className={cn(
                    'ml-20 md:ml-0 md:w-1/2 md:px-12',
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                  )}
                >
                  <div
                    className={cn(
                      'rounded-2xl p-6 backdrop-blur-sm border transition-all duration-500',
                      item.active
                        ? 'bg-white dark:bg-dark-800 border-primary-200 dark:border-primary-800 shadow-lg shadow-primary-500/10'
                        : 'bg-gray-50/80 dark:bg-dark-900/80 border-gray-200 dark:border-dark-700'
                    )}
                  >
                    <div className="flex items-center gap-3 mb-3" >
                      <span
                        className={cn(
                          'px-3 py-1 rounded-full text-xs font-semibold',
                          index % 2 === 0 ? 'md:ml-auto' : '',
                          item.active
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-300'
                        )}
                      >
                        {item.year}
                      </span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.phase}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-8">
            AI Gelişiminin <span className="gradient-text">Dört Temel İlkesi</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="AI gelişiminin ilkeleri">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-strong rounded-2xl p-6 text-center group card-hover"
              role="listitem"
              tabIndex={0}
            >
              <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform', `bg-gradient-to-br ${principle.color}`)}>
                <principle.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h4 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">
                {principle.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {principle.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}