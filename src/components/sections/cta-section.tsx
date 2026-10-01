'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, CheckCircle2, Loader2, Sparkles, Rocket, Github, Twitter, Linkedin, MessageCircle, Bot, User } from 'lucide-react'
import { useToastHelpers } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'

export function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'bot'; content: string }>>([])
  const [input, setInput] = useState('')
  const [isChatting, setIsChatting] = useState(false)
  const toast = useToastHelpers()

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      toast.error('Geçersiz e-posta', 'Lütfen geçerli bir e-posta adresi girin')
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubscribed(true)
    toast.success('Başarıyla abone oldunuz!', 'Haftalık AI bültenimize hoş geldiniz')
  }

  const botResponses: Record<string, string> = {
    'sağlık': 'Sağlık alanında AI, erken teşhiste %20 artış, ilaç keşfinde 100x hızlanma ve kişiselleştirilmiş tedavi imkânları sunuyor.',
    'eğitim': 'Eğitimde adaptif öğrenme platformları ile öğrenci başarısı %35 arttı, bireysel ilerleme takibi mümkün hale geldi.',
    'ekoloji': 'Çevre alanında AI, hava kirliliği tahmininde %90 doğruluk, orman yangını erken tespitinde ortalama 15 dakika erken uyarı sağlıyor.',
    'ekonomi': 'Ekonomide AI, küresel GSYH\'ye 2030 yılına kadar 15.7 trilyon dolar katkı sunacak. PwC tahminine göre en büyük etki üretim ve sağlıkta olacak.',
    'nasıl': 'AI öğrenmek için önce Python temellerini öğrenmenizi, ardından makine öğrenmesi ve derin öğrenme kurslarına geçmenizi öneririz. Hugging Face ve fast.ai harika kaynaklar sunuyor.',
    'merhaba': 'Merhaba! Ben AI Etkisi asistanıyım. Size nasıl yardımcı olabilirim?',
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setInput('')
    setIsChatting(true)

    await new Promise((resolve) => setTimeout(resolve, 1200))

    const lowerInput = userMessage.toLowerCase()
    let response = 'Bu konuda daha fazla bilgi için kaynaklarımıza göz atabilirsiniz. Başka bir sorunuz var mı?'

    for (const [keyword, value] of Object.entries(botResponses)) {
      if (lowerInput.includes(keyword)) {
        response = value
        break
      }
    }

    setMessages((prev) => [...prev, { role: 'bot', content: response }])
    setIsChatting(false)
  }

  const socialLinks = [
    { href: 'https://github.com', icon: Github, label: 'GitHub' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://discord.com', icon: MessageCircle, label: 'Discord' },
  ]

  return (
    <section
      ref={ref}
      id="bulten"
      className="section-padding bg-white dark:bg-dark-950"
      aria-labelledby="cta-title"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600 p-8 lg:p-12"
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
              <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-black/20 blur-3xl" />
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <Rocket className="h-4 w-4" aria-hidden="true" />
                Bu Hafta Yapay Zekâ Bülteni
              </span>

              <h2 id="cta-title" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                AI Dünyasını <br />
                <span className="text-accent-200">Takip Edin</span>
              </h2>

              <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-lg">
                Her cuma sabahı en önemli AI haberleri, araştırmalar ve trendler e-postanızda. Ücretsiz, spam yok.
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-4" aria-label="Bülten aboneliği">
                  <label htmlFor="cta-email" className="sr-only">
                    E-posta adresiniz
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      id="cta-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e-posta@adresiniz.com"
                      className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                      required
                      disabled={isSubmitting}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary bg-white text-primary-600 hover:bg-gray-50 hover:text-primary-700 shadow-xl px-8 py-3.5 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                          Kaydediliyor...
                        </>
                      ) : (
                        <>
                          Abone Ol
                          <Send className="h-5 w-5" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-white/70 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    12,000+ okuyucu bize katıldı. Spam göndermiyoruz.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25"
                  role="status"
                >
                  <div className="w-12 h-12 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Aramıza hoş geldiniz!</p>
                    <p className="text-white/80 text-sm">İlk bültenimizi cuma sabahı alacaksınız.</p>
                  </div>
                </motion.div>
              )}

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-white/80 mb-4">Sosyal medyada takip edin</p>
                <div className="flex items-center gap-3" role="list" aria-label="Sosyal medya linkleri">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-strong rounded-3xl p-8 lg:p-10 flex flex-col"
            role="region"
            aria-labelledby="chat-title"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 id="chat-title" className="font-display text-xl font-bold text-gray-900 dark:text-white">
                  AI Etkisi Asistanı
                </h3>
                <p className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                  Çevrimiçi
                </p>
              </div>
            </div>

            <div
              className="flex-1 min-h-[280px] max-h-[320px] overflow-y-auto rounded-2xl bg-gray-50 dark:bg-dark-900/50 p-4 space-y-3 mb-4"
              role="log"
              aria-live="polite"
              aria-label="Sohbet mesajları"
            >
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Sparkles className="h-8 w-8 text-primary-400 mb-3" aria-hidden="true" />
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Merhaba! Bana yapay zekanın etkileri hakkında sorular sorabilirsiniz.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {['Sağlıkta AI', 'Eğitimde AI', 'Ekoloji', 'Ekonomi'].map((q) => (
                      <button
                        key={q}
                        onClick={() => setInput(q)}
                        className="px-3 py-1.5 rounded-lg bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 text-xs font-medium text-gray-600 dark:text-gray-300 hover:border-primary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn('flex gap-2', msg.role === 'user' ? 'justify-end' : 'justify-start')}
                >
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                  )}
                  <div
                    className={cn(
                      'max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed',
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-br-sm'
                        : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-bl-sm border border-gray-200 dark:border-dark-700'
                    )}
                  >
                    {msg.content}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-lg bg-gray-200 dark:bg-dark-700 flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-gray-600 dark:text-gray-300" aria-hidden="true" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isChatting && (
                <div className="flex gap-2 justify-start">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                  <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1" aria-label="Yazıyor...">
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex gap-2"
              aria-label="Mesaj gönder"
            >
              <label htmlFor="chat-input" className="sr-only">
                Mesajınız
              </label>
              <input
                id="chat-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Sorunuzu yazın..."
                className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                disabled={isChatting}
              />
              <button
                type="submit"
                disabled={!input.trim() || isChatting}
                className="btn-primary px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Mesajı gönder"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}