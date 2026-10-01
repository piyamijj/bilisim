'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Brain, ArrowRight, Sparkles, BarChart3, Globe, Users, Shield, Zap } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const features = [
  { icon: BarChart3, title: 'Veri Odaklı', desc: 'Gerçek dünya verileriyle desteklenmiş analizler' },
  { icon: Globe, title: 'Küresel Etki', desc: 'Dünya genelindeki AI uygulamalarını takip' },
  { icon: Users, title: 'Topluluk', desc: 'Uzmanlar ve meraklılar için ortak platform' },
  { icon: Shield, title: 'Güvenilir', desc: 'Akademik ve endüstri kaynaklı doğrulanmış içerik' },
]

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 0.95])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" aria-labelledby="hero-title">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-accent-500/20 to-primary-500/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 5 }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      </div>

      <motion.div
        style={{ y: y1, scale, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <Brain className="text-9xl lg:text-[12rem] bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-clip-text text-transparent opacity-10 animate-pulse" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="container-custom relative z-10 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4 animate-pulse" aria-hidden="true" />
            <span>Yapay Zekânın Dünyayı Değiştiren Gücü</span>
          </motion.span>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-gray-900 dark:text-white">AI&apos;nin</span>{' '}
            <span className="gradient-text">Etkisini</span>{' '}
            <span className="text-gray-900 dark:text-white">Keşfedin</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Sağlıktan tarıma, eğitimden finansa yapay zekânın nasıl devrim yarattığını
            görsel, etkileşimli ve veri destekli olarak keşfedin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="#etki-alanlari"
              className="btn-primary group w-full sm:w-auto"
            >
              Keşfetmeye Başla
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="#vaka-calismalari"
              className="btn-secondary w-full sm:w-auto"
            >
              Vaka Çalışmaları
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
            role="list"
            aria-label="Öne çıkan özellikler"
          >
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="glass-strong rounded-2xl p-5 text-left group hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300"
                role="listitem"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
        >
          <span className="text-xs font-medium">Aşağı kaydırın</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}