import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ToastProvider } from '@/hooks/use-toast'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const cal = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-cal',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-etkisi.vercel.app'),
  title: {
    default: 'AI Etkisi | Yapay Zekânın Dünyayı Değiştiren Gücü',
    template: '%s | AI Etkisi',
  },
  description: 'Yapay zekanın sağlık, eğitim, tarım, finans ve daha birçok alandaki devrim niteliğindeki etkilerini keşfedin. Görsel olarak zengin, etkileşimli ve ilham verici bir platform.',
  keywords: ['yapay zeka', 'AI', 'teknoloji', 'gelecek', 'inovasyon', 'dijital dönüşüm', 'makine öğrenmesi'],
  authors: [{ name: 'AI Etkisi Platformu' }],
  creator: 'AI Etkisi',
  publisher: 'AI Etkisi',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://ai-etkisi.vercel.app',
    siteName: 'AI Etkisi',
    title: 'AI Etkisi | Yapay Zekânın Dünyayı Değiştiren Gücü',
    description: 'Yapay zekanın dünyayı nasıl değiştirdiğini görsel ve etkileşimli olarak keşfedin.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Etkisi - Yapay Zekanın Gücü',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Etkisi | Yapay Zekânın Dünyayı Değiştiren Gücü',
    description: 'Yapay zekanın dünyayı nasıl değiştirdiğini keşfedin.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning className={`${inter.variable} ${cal.variable} font-sans`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.live" />
      </head>
      <body className="min-h-screen bg-white dark:bg-dark-950 text-gray-900 dark:text-gray-50 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 btn-primary"
            >
              Ana içeriğe atla
            </a>
            <Header />
            <main id="main-content" className="relative">
              {children}
            </main>
            <Footer />
            <Toaster />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}