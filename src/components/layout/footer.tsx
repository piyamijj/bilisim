'use client'

import Link from 'next/link'
import { Brain, Github, Twitter, Linkedin, Mail, ArrowUpRight, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  platform: [
    { href: '#etki-alanlari', label: 'Etki Alanları' },
    { href: '#istatistikler', label: 'İstatistikler' },
    { href: '#vaka-calismalari', label: 'Vaka Çalışmaları' },
    { href: '#gelecek-vizyonu', label: 'Gelecek Vizyonu' },
  ],
  resources: [
    { href: '/blog', label: 'Blog' },
    { href: '/arastirmalar', label: 'Araştırmalar' },
    { href: '/veri-seti', label: 'Veri Setleri' },
    { href: '/api-docs', label: 'API Dokümantasyonu' },
  ],
  company: [
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/kariyer', label: 'Kariyer' },
    { href: '/iletisim', label: 'İletişim' },
    { href: '/basin', label: 'Basın' },
  ],
  legal: [
    { href: '/gizlilik', label: 'Gizlilik Politikası' },
    { href: '/sartlar', label: 'Kullanım Şartları' },
    { href: '/cerezler', label: 'Çerez Politikası' },
    { href: '/erisilebilirlik', label: 'Erişilebilirlik' },
  ],
}

const socialLinks = [
  { href: 'https://github.com', icon: Github, label: 'GitHub', color: 'hover:text-gray-400' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter', color: 'hover:text-sky-400' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
  { href: 'mailto:hello@ai-etkisi.com', icon: Mail, label: 'E-posta', color: 'hover:text-red-400' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white dark:from-dark-950 dark:to-dark-900 border-t border-gray-200 dark:border-dark-800" role="contentinfo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-3xl" />
      </div>

      <div className="container-custom relative py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2 text-xl font-display font-bold gradient-text mb-4" aria-label="AI Etkisi - Ana sayfa">
              <Brain className="text-3xl" aria-hidden="true" />
              <span>AI Etkisi</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 max-w-xs">
              Yapay zekânın dünyayı değiştiren gücünü görselleştiren, analiz eden ve paylaşan lider platform.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={cn('text-gray-400 transition-colors duration-300', social.color)}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-label="Platform linkleri"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Platform</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-label="Kaynaklar linkleri"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Kaynaklar</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            aria-label="Şirket linkleri"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Şirket</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Bülten</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Yapay zeka gelişmelerinden haberdar olun. Haftalık özet alın.
            </p>
            <form className="flex flex-col gap-2" aria-label="Bülten aboneliği">
              <label htmlFor="email" className="sr-only">
                E-posta adresiniz
              </label>
              <input
                type="email"
                id="email"
                placeholder="e-posta@ornak.com"
                className="px-4 py-2.5 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                className="btn-primary text-sm py-2.5 w-full"
              >
                Abone Ol
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-gray-200 dark:border-dark-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
              © {currentYear} AI Etkisi. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/gizlilik" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Gizlilik</Link>
              <Link href="/sartlar" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Şartlar</Link>
              <Link href="/cerezler" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Çerezler</Link>
              <span className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Canlı</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}